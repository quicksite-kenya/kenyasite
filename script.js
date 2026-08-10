import * as THREE from 'three';
import { GoogleGenAI } from "@google/genai";
import { db, auth, logOut, signInWithEmail, signUpWithEmail, serverTimestamp, storage, resetPassword } from './firebase.js';
import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc, getDocs, limit, updateDoc, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// --- AI Consultation Chatbot ---
const initAIConsultation = () => {
    console.log("AI Consultation initializing via server-side bridge...");
    
    // Create Chat UI
    const chatBtn = document.createElement('div');
    chatBtn.className = 'ai-chat-btn';
    chatBtn.innerHTML = '<i data-lucide="message-square"></i>';
    document.body.appendChild(chatBtn);

    const chatWindow = document.createElement('div');
    chatWindow.className = 'ai-chat-window';
    chatWindow.innerHTML = `
        <div class="ai-chat-header">
            <div class="ai-chat-title">
                <i data-lucide="sparkles"></i>
                <span>AI Evolution Consultant</span>
            </div>
            <button class="ai-chat-close"><i data-lucide="x"></i></button>
        </div>
        <div class="ai-chat-messages">
            <div class="ai-message bot">
                Greetings! I am your Digital Evolution Consultant. How can I help architect your prestige today?
            </div>
        </div>
        <div class="ai-chat-input-container">
            <input type="text" placeholder="Describe your vision..." class="ai-chat-input">
            <button class="ai-chat-send"><i data-lucide="send"></i></button>
        </div>
    `;
    document.body.appendChild(chatWindow);

    if (window.lucide) window.lucide.createIcons();

    const messagesContainer = chatWindow.querySelector('.ai-chat-messages');
    const input = chatWindow.querySelector('.ai-chat-input');
    const sendBtn = chatWindow.querySelector('.ai-chat-send');
    const closeBtn = chatWindow.querySelector('.ai-chat-close');

    let chatHistory = [];

    const addMessage = (text, sender) => {
        const msg = document.createElement('div');
        msg.className = `ai-message ${sender}`;
        msg.innerText = text;
        messagesContainer.appendChild(msg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const handleSend = async () => {
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        input.value = '';
        input.disabled = true;
        sendBtn.disabled = true;

        // Add a typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'ai-message bot typing';
        typingIndicator.innerText = 'Consulting the digital ether...';
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            // Send payload to backend
            const payload = {
                message: text,
                chatHistory: chatHistory
            };
            
            const reqUrl = window.location.origin.includes('localhost') ? 'http://localhost:3000/api/ai-chat' : '/api/ai-chat';
            const response = await fetch(reqUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            
            const rawText = await response.text();
            let responseData;
            try {
                responseData = JSON.parse(rawText);
            } catch (err) {
                 throw new Error(`Server returned non-JSON response (${response.status}): ` + rawText.substring(0, 100));
            }
            
            if (!response.ok) {
                throw new Error(responseData.error || "Server error");
            }
            
            const responseText = responseData.text;
            
            // Remove typing indicator
            typingIndicator.remove();
            
            addMessage(responseText, 'bot');
            
            // Update history for next turn
            chatHistory.push({ role: 'user', parts: [{ text }] });
            chatHistory.push({ role: 'model', parts: [{ text: responseText }] });
            
            // LEAD CAPTURE LOGIC
            const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
            const emailsFound = text.match(emailRegex);
            
            if (emailsFound && emailsFound.length > 0) {
                console.log("AI Lead Capture detected email:", emailsFound[0]);
                try {
                    await addDoc(collection(db, 'inquiries'), {
                        name: 'AI Chat Lead',
                        email: emailsFound[0],
                        service: 'AI Consultation',
                        message: `Captured from AI Chat: "${text}"`,
                        createdAt: serverTimestamp(),
                        source: 'ai-chatbot',
                        status: 'New'
                    });
                    console.log("AI Lead saved to Firestore.");
                } catch (saveErr) {
                    console.error("Failed to save AI lead:", saveErr);
                }
            }
        } catch (error) {
            console.error("AI Chat Error:", error);
            if (typingIndicator.parentNode) typingIndicator.remove();
            const errMsg = error instanceof Error ? error.message : String(error);
            addMessage("Error: " + errMsg, 'bot');
        } finally {
            input.disabled = false;
            sendBtn.disabled = false;
            input.focus();
        }
    };

    chatBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        chatBtn.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            input.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
        chatBtn.classList.remove('active');
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    sendBtn.addEventListener('click', handleSend);

    // Handle "initiate consultation" from external triggers if needed
    window.initiateAIConsultation = (initialMessage) => {
        chatWindow.classList.add('active');
        chatBtn.classList.add('active');
        if (initialMessage) {
            input.value = initialMessage;
            handleSend();
        }
    };
};

// --- Jargon Decoder / Plain English Mode Helper ---
const initJargonDecoder = () => {
    if (document.getElementById('jargon-decoder-root')) return;

    const translationMap = {
        "SSL + Secure Hosting": {
            simple: "🔒 Security Lock & Safe Hosting",
            analogy: "Like a secure padlock on your front door. It keeps hackers out and removes that scary 'Not Secure' warning so clients trust your site completely."
        },
        "Free .quicksitekenya subdomain": {
            simple: "🌐 Free Temporary Web Address",
            analogy: "A free temporary address (yourname.quicksitekenya.co.ke) so people can visit your site instantly before you buy a custom domain name."
        },
        "WhatsApp integration": {
            simple: "💬 One-Click WhatsApp Chat Button",
            analogy: "A button that lets customers chat with you on WhatsApp instantly. They click it on their phone, and it opens a WhatsApp chat with you."
        },
        "Lead capture database": {
            simple: "📋 Automated Customer Guestbook",
            analogy: "A digital spreadsheet that automatically collects the names and phone numbers of people who contact you, so you never lose a potential sale."
        },
        "SEO + Google Maps setup": {
            simple: "📍 Showing Up First on Google Maps & Search",
            analogy: "Like putting a giant billboard on Nairobi's main highway, ensuring locals see your name first when searching for services near them."
        },
        "WhatsApp + Email automation": {
            simple: "💬 Instant Automated Quick-Replies",
            analogy: "Sends a speedy greeting on WhatsApp or email the second someone requests info. Keeps your clients warm even if you are sleeping!"
        },
        "Client dashboard access": {
            simple: "🔑 Private Customer Management Portal",
            analogy: "Your own secret online master-board where you can see all inquiries, client files, and ad metrics in one clean screen."
        },
        "Real-time booking system": {
            simple: "📅 Online Appointment Booking Calendar",
            analogy: "Like an online secretary who works 24/7. Your clients can see when you are free, select a slot, and book themselves."
        },
        "Customer tracking CRM": {
            simple: "📁 Secure Digital Client File Cabinet",
            analogy: "A centralized system that files all your contact notes, booking histories, and payment status so everyone's info is clean."
        },
        "Advanced traffic analytics": {
            simple: "📈 Simple Visitor Counters & Graphs",
            analogy: "Clear, clean graphs that show how many local folks visit your site each day, what they clicked, and which ads are working."
        },
        "AI-generated content tools": {
            simple: "🤖 Automatic Post & Document Writer",
            analogy: "A smart writing assistant that writes professional blogs, emails, and advertisements for you, saving you expensive writing costs."
        },
        "Marketing automation engine": {
            simple: "⚙️ Automatic Follow-up Dispatcher",
            analogy: "Directly emails and messages your prospects automatically, asking them to come back if they haven't ordered yet."
        },
        "Meta (FB/IG) Ad Management": {
            simple: "📊 Smart Facebook & Instagram Ad setup",
            analogy: "Setting up and monitoring your phone ads so that your spending actually results in phone calls, and doesn't get wasted."
        },
        "Targeted Facebook & Instagram Campaigns": {
            simple: "📣 Focused Ads for local buyers",
            analogy: "Showing ads specifically to people of the right age, location, and interests who are highly likely to pay for your service."
        },
        "Custom Ad Creative & Copywriting": {
            simple: "🎨 High-Converting Ad Visuals & Headlines",
            analogy: "We write catchy headlines and create modern graphics that make scrolling users stop and click to ask about your prices."
        },
        "Weekly ROI & Performance Reports": {
            simple: "📊 Weekly Cost-vs-Profit Summaries",
            analogy: "A weekly sheet in simple language telling you exactly how many shillings you spent on ads versus how much sales inquiry value came back."
        },
        "WhatsApp Business Lead Optimization": {
            simple: "💬 WhatsApp Call-to-Action Setup",
            analogy: "Configuring ads so that when clicked, they start a conversation in WhatsApp with a pre-typed template, making it super easy for customers."
        },
        "Audience Retargeting Strategy": {
            simple: "🎯 Re-Advertising to interested visitors",
            analogy: "Showing gentle reminder ads to people who clicked on your site but didn't contact you yet. These are the easiest sales to get!"
        },
        "Pixel & API tracking": {
            simple: "📊 Ad Conversion Counter",
            analogy: "A secret counter on your site that lets Facebook and Google know who bought, so they can show your ads to other similar high-paying customers."
        },
        "Custom API Hooks": {
            simple: "🔌 Connect to CRM & Local Tools",
            analogy: "Connects your website to popular tools (like SMS gateways, Excel sheets, or billing software) automatically."
        },
        "Dedicated Hosting": {
            simple: "⚡ Lightning-Fast Private Server space",
            analogy: "Giving your website its own premium fast lane so it loads instantly even when thousands of users are browsing at the same time."
        },
        "White-Label Access": {
            simple: "🏷️ Your Own Custom Branding Option",
            analogy: "Hiding our quicksite agency name and replacing it with your own business logo so it looks fully custom built by you."
        },
        "Priority Support": {
            simple: "📞 24/7 Direct WhatsApp Helpline",
            analogy: "A dedicated fast-track WhatsApp line for you to reach our top designers and developers for any quick adjustments."
        },
        "Custom Architecture": {
            simple: "🏗️ Tailor-Made High Performance Code",
            analogy: "Designing and building your website from scratch with pristine speed and modern style rather than utilizing generic templates."
        },
        "Responsive Layouts": {
            simple: "📱 Perfect Layout on All Phones & Laptops",
            analogy: "Making sure your website looks stunning, readable, and easy-to-click whether viewed on a small smartphone or a large computer."
        },
        "Speed Optimized": {
            simple: "⚡ Lightning-Fast Loading (Under 2 seconds)",
            analogy: "We fine-tune the size and code so the site pops up in the blink of an eye, meaning impatient users never click away."
        },
        "A/B Creative Testing": {
            simple: "🎨 Automated Ad Design Contest",
            analogy: "We test multiple button layouts or text options to let actual customer behavior show us which version makes you the most money."
        }
    };

    const widget = document.createElement('div');
    widget.id = 'jargon-decoder-root';
    widget.className = 'jargon-decoder-widget text-left';
    widget.innerHTML = `
        <div class="jargon-decoder-btn" id="jargonBtn" title="💡 Plain English Helper Switch">
            <i data-lucide="help-circle"></i>
        </div>
        <div class="jargon-decoder-card" id="jargonCard">
            <div class="jargon-card-header">
                <span class="spark"><i data-lucide="sparkles"></i></span>
                <h3>Plain English Helper</h3>
            </div>
            <p>Our systems possess elite power. Click the toggle to rewrite all technical jargon on this website to simple, friendly business terms!</p>
            <div class="jargon-toggle-row">
                <span class="jargon-toggle-label">💡 Friendly Terms</span>
                <label class="jargon-toggle-switch">
                    <input type="checkbox" id="jargonToggleCheckbox">
                    <span class="jargon-toggle-slider"></span>
                </label>
            </div>
        </div>
    `;
    document.body.appendChild(widget);

    let tooltipPopup = document.getElementById('jargonTooltipPopup');
    if (!tooltipPopup) {
        tooltipPopup = document.createElement('div');
        tooltipPopup.id = 'jargonTooltipPopup';
        tooltipPopup.className = 'jargon-tooltip-popup';
        document.body.appendChild(tooltipPopup);
    }

    const jargonBtn = widget.querySelector('#jargonBtn');
    const jargonCard = widget.querySelector('#jargonCard');
    const toggleCheckbox = widget.querySelector('#jargonToggleCheckbox');

    jargonBtn.onclick = (e) => {
        e.stopPropagation();
        jargonBtn.classList.toggle('active');
        jargonCard.classList.toggle('active');
    };

    document.addEventListener('click', (e) => {
        if (!widget.contains(e.target)) {
            jargonBtn.classList.remove('active');
            jargonCard.classList.remove('active');
        }
    });

    const rewriteTextInNode = (node, mode) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const originalText = node.textContent;
            const keys = Object.keys(translationMap);
            for (const key of keys) {
                if (originalText.includes(key)) {
                    const parent = node.parentNode;
                    if (parent && 
                        !parent.closest('.jargon-decoder-widget') && 
                        !parent.closest('nav') && 
                        !parent.closest('footer') &&
                        !parent.classList.contains('jargon-highlight')) {
                        
                        if (mode === 'simple') {
                            if (!parent.hasAttribute('data-original-html')) {
                                parent.setAttribute('data-original-html', parent.innerHTML);
                            }
                            
                            const span = document.createElement('span');
                            span.className = 'jargon-highlight';
                            span.setAttribute('data-jargon-key', key);
                            span.innerHTML = `${translationMap[key].simple} <span class="jargon-analogy-badge">💡 explainer</span>`;
                            parent.replaceChild(span, node);
                        }
                    }
                    break;
                }
            }
        } else {
            if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE' || node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') return;
            Array.from(node.childNodes).forEach(child => rewriteTextInNode(child, mode));
        }
    };

    const applyPlainEnglish = () => {
        rewriteTextInNode(document.body, 'simple');
        if (window.lucide) window.lucide.createIcons();
        attachTooltipListeners();
        showToast('💡 Plain English Mode active! Complex terms simplified.');
    };

    const restoreStandardEnglish = () => {
        document.querySelectorAll('[data-original-html]').forEach(el => {
            el.innerHTML = el.getAttribute('data-original-html');
            el.removeAttribute('data-original-html');
        });
        if (window.lucide) window.lucide.createIcons();
        showToast('🌿 Standard Mode restored.');
    };

    const attachTooltipListeners = () => {
        const triggers = document.querySelectorAll('.jargon-highlight');
        triggers.forEach(trigger => {
            const showTooltip = (e) => {
                const key = trigger.getAttribute('data-jargon-key');
                const info = translationMap[key];
                if (!info) return;

                tooltipPopup.innerHTML = `
                    <h4><i data-lucide="help-circle" style="width:14px;height:14px;"></i> Plain English:</h4>
                    <div style="font-weight: 700; margin-bottom: 5px;">${info.simple}</div>
                    <div class="tooltip-analogy">
                        <strong>Real-World Analogy:</strong> ${info.analogy}
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
                tooltipPopup.classList.add('visible');

                // Position calculation relative to trigger
                const rect = trigger.getBoundingClientRect();
                const tooltipWidth = 300;
                let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                let top = rect.top - 12 - 120; // estimate tooltip height or pull dynamically
                
                // Keep inside screen bounds
                if (left < 10) left = 10;
                if (left + tooltipWidth > window.innerWidth - 10) {
                    left = window.innerWidth - tooltipWidth - 10;
                }
                
                // Convert relative to viewport
                tooltipPopup.style.left = `${left}px`;
                tooltipPopup.style.top = `${rect.top - 10}px`;
                tooltipPopup.style.transform = `translateY(-100%) translateX(0)`;
                
                // Adjust if too close to top
                if (rect.top < 150) {
                    tooltipPopup.style.top = `${rect.bottom + 10}px`;
                    tooltipPopup.style.transform = `translateY(0) translateX(0)`;
                }
            };

            const hideTooltip = () => {
                tooltipPopup.classList.remove('visible');
            };

            trigger.onmouseenter = showTooltip;
            trigger.onmouseleave = hideTooltip;
            trigger.onclick = (e) => {
                e.stopPropagation();
                showTooltip(e);
            };
        });
    };

    toggleCheckbox.onchange = () => {
        if (toggleCheckbox.checked) {
            localStorage.setItem('quicksite-jargon-mode', 'simple');
            applyPlainEnglish();
        } else {
            localStorage.setItem('quicksite-jargon-mode', 'normal');
            restoreStandardEnglish();
        }
    };

    // Plain English mode stays off by default unless manually toggled
    localStorage.removeItem('quicksite-jargon-mode');

    if (window.lucide) window.lucide.createIcons();
};

// Initialize AI Consultation & Jargon Decoder
document.addEventListener('DOMContentLoaded', () => {
    try {
        initAIConsultation();
    } catch (err) {
        console.error("Failed to initialize AI Consultation:", err);
    }
    try {
        initJargonDecoder();
    } catch (err) {
        console.error("Failed to initialize Jargon Decoder:", err);
    }
});

// --- Custom Toast Notification ---
const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.className = 'custom-toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = type === 'error' ? '#ff4444' : 'var(--gold-gradient)';
    toast.style.color = type === 'error' ? 'white' : 'var(--bg-color)';
    toast.style.padding = '15px 30px';
    toast.style.borderRadius = '30px';
    toast.style.zIndex = '10000';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    toast.style.fontWeight = 'bold';
    toast.style.textAlign = 'center';
    toast.style.minWidth = '300px';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
};

const showConfirm = (message, onConfirm) => {
    const overlay = document.createElement('div');
    overlay.className = 'custom-confirm-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.85)';
    overlay.style.zIndex = '20000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.backdropFilter = 'blur(10px)';
    
    const modal = document.createElement('div');
    modal.style.background = '#111';
    modal.style.border = '1px solid var(--primary-color)';
    modal.style.padding = '40px';
    modal.style.borderRadius = '20px';
    modal.style.maxWidth = '400px';
    modal.style.textAlign = 'center';
    modal.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 20px; color: var(--primary-color); font-size: 1.5rem;">Confirm Action</h3>
        <p style="margin-bottom: 30px; color: white; opacity: 0.9; line-height: 1.6;">${message}</p>
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button class="btn btn-primary btn-sm" id="confirmYes" style="background: #ff4444; border-color: #ff4444;">Yes, Proceed</button>
            <button class="btn btn-secondary btn-sm" id="confirmNo">Cancel</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.querySelector('#confirmYes').onclick = () => {
        onConfirm();
        document.body.removeChild(overlay);
    };
    
    overlay.querySelector('#confirmNo').onclick = () => {
        document.body.removeChild(overlay);
    };
};

const showInquiryDetail = (id, data) => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.zIndex = '30000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.backdropFilter = 'blur(15px)';
    overlay.style.padding = '20px';
    
    const modal = document.createElement('div');
    modal.style.background = '#111';
    modal.style.border = '1px solid var(--primary-color)';
    modal.style.padding = '30px';
    modal.style.borderRadius = '20px';
    modal.style.maxWidth = '600px';
    modal.style.width = '100%';
    modal.style.maxHeight = '90vh';
    modal.style.overflowY = 'auto';
    modal.style.boxShadow = '0 25px 50px rgba(0,0,0,0.8)';
    
    let date = 'N/A';
    if (data.createdAt) {
        if (data.createdAt.seconds) {
            date = new Date(data.createdAt.seconds * 1000).toLocaleString();
        } else if (data.createdAt instanceof Date) {
            date = data.createdAt.toLocaleString();
        } else {
            date = new Date(data.createdAt).toLocaleString();
        }
    }

    modal.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 15px;">
            <h3 style="color: var(--primary-color); font-size: 1.5rem; margin: 0;">Inquiry Details</h3>
            <button id="closeDetail" style="background: none; border: none; color: white; cursor: pointer; font-size: 1.5rem;">&times;</button>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Full Name</p>
                <p style="color: white; font-weight: 500;">${data.name || '-'}</p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Status</p>
                <span style="background: rgba(212, 175, 55, 0.2); color: var(--primary-color); padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">${data.status || 'New'}</span>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Email</p>
                <p style="color: white;"><a href="mailto:${data.email}" style="color: white; text-decoration: underline;">${data.email || '-'}</a></p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Phone</p>
                <p style="color: white;">${data.phone || '-'}</p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Service</p>
                <p style="color: white;">${data.service || '-'}</p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Date Submitted</p>
                <p style="color: white;">${date}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 25px;">
            <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Message</p>
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; color: white; line-height: 1.6; white-space: pre-wrap;">${data.message || '-'}</div>
        </div>
        
        <div style="text-align: right;">
            <button class="btn btn-secondary" id="closeDetailBtn">Close</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    const close = () => document.body.removeChild(overlay);
    overlay.querySelector('#closeDetail').onclick = close;
    overlay.querySelector('#closeDetailBtn').onclick = close;
    overlay.onclick = (e) => { if (e.target === overlay) close(); };
};

// --- URL Sanitization Utility ---
const getSafeImageUrl = (url, fallbackSeed = 'placeholder', width = 600, height = 400) => {
    const isSafari = fallbackSeed.toLowerCase().includes('safari luxury');
    const isPenthouse = fallbackSeed.toLowerCase().includes('nairobi penthouse');
    
    if (isSafari) {
        return 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80';
    }
    if (isPenthouse) {
        return 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80';
    }

    if (!url) {
        return `https://placehold.co/${width}x${height}/1a1a1a/d4af37?text=${encodeURIComponent(fallbackSeed)}`;
    }
    
    const lowerUrl = url.toLowerCase();
    const isSecureOrigin = window.location.protocol === 'https:';
    const isLocalUrl = lowerUrl.includes('localhost') || lowerUrl.includes('127.0.0.1') || lowerUrl.includes('192.168.');

    if (isSecureOrigin && isLocalUrl) {
        // Browser blocks local IPs from public HTTPS origins (Private Network Access)
        console.warn(`Local URL ${url} blocked by browser PNA policy. Using placeholder.`);
        return `https://placehold.co/${width}x${height}/1a1a1a/d4af37?text=${encodeURIComponent(fallbackSeed)}`;
    }
    
    if (url.startsWith('http://') && !isLocalUrl) {
        return url.replace('http://', 'https://');
    }
    
    return url;
};

// --- 3D Background Implementation ---
const initThreeBackground = () => {
    const container = document.getElementById('three-canvas-container');
    if (!container) {
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const velocityArray = new Float32Array(particlesCount * 3);
    const initialPosArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        const val = (Math.random() - 0.5) * 15;
        posArray[i] = val;
        initialPosArray[i] = val;
        velocityArray[i] = (Math.random() - 0.5) * 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material with a very subtle gold glow
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: 0xd4af37, // Gold
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add a subtle grid/wireframe sphere for depth
    const sphereGeometry = new THREE.SphereGeometry(12, 40, 40);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        wireframe: true,
        transparent: true,
        opacity: 0.05
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    camera.position.z = 6;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
        
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Smooth mouse movement for camera
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Rotate particles and sphere
        particlesMesh.rotation.y += 0.0003;
        particlesMesh.rotation.x += 0.0001;
        sphere.rotation.y -= 0.0002;
        sphere.rotation.x -= 0.0001;

        // Apply mouse interaction to camera
        camera.position.x += (targetX * 3 - camera.position.x) * 0.05;
        camera.position.y += (-targetY * 3 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        // Update particle positions for a "floating" effect and mouse repulsion
        const positions = particlesGeometry.attributes.position.array;
        
        // Raycaster for mouse repulsion
        raycaster.setFromCamera(mouse, camera);
        const mousePos = new THREE.Vector3();
        raycaster.ray.at(8, mousePos); // Point on the ray at distance 8

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            
            // Natural movement
            positions[i3] += velocityArray[i3];
            positions[i3 + 1] += velocityArray[i3 + 1];
            positions[i3 + 2] += velocityArray[i3 + 2];

            // Mouse repulsion
            const dx = positions[i3] - mousePos.x;
            const dy = positions[i3 + 1] - mousePos.y;
            const dz = positions[i3 + 2] - mousePos.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            if (dist < 2) {
                const force = (2 - dist) * 0.02;
                positions[i3] += dx * force;
                positions[i3 + 1] += dy * force;
                positions[i3 + 2] += dz * force;
            } else {
                // Slowly return to initial relative position (drift back)
                // This is complex because the mesh itself is rotating.
                // For simplicity, we just let them float.
            }

            // Boundary check
            if (Math.abs(positions[i3]) > 10) velocityArray[i3] *= -1;
            if (Math.abs(positions[i3 + 1]) > 10) velocityArray[i3 + 1] *= -1;
            if (Math.abs(positions[i3 + 2]) > 10) velocityArray[i3 + 2] *= -1;
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    // --- Admin & Inquiries UI Elements ---
    const adminModal = document.getElementById('adminModal');
    const adminLoginLink = document.getElementById('adminLoginLink');
    const closeAdminModal = document.getElementById('closeAdminModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const emailSignInBtn = document.getElementById('emailSignInBtn');
    const adminEmailInput = document.getElementById('adminEmail');
    const adminPasswordInput = document.getElementById('adminPassword');
    
    // Pre-fill administrator credentials as requested
    if (adminEmailInput) adminEmailInput.value = 'michaelmulili41@gmail.com';
    if (adminPasswordInput) adminPasswordInput.value = 'Michael2005';
    
    const adminManageBtn = document.getElementById('adminManageBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    const viewInquiriesBtn = document.getElementById('viewInquiriesBtn');
    const manageBlogBtn = document.getElementById('manageBlogBtn');
    const inquiriesModal = document.getElementById('inquiriesModal');
    const blogPostModal = document.getElementById('blogPostModal');
    const closeInquiriesModal = document.getElementById('closeInquiriesModal');
    const closeBlogPostModal = document.getElementById('closeBlogPostModal');
    const inquiriesList = document.getElementById('inquiriesList');
    const blogPostForm = document.getElementById('blogPostForm');
    const clearMarketplaceBtn = document.getElementById('clearMarketplaceBtn');
    const adminManageDesc = document.getElementById('adminManageDesc');
    const addWebsiteModal = document.getElementById('addWebsiteModal');
    const closeAddModal = document.getElementById('closeAddModal');
    const addWebsiteForm = document.getElementById('addWebsiteForm');
    const marketplaceGrid = document.getElementById('marketplaceSections');
    const portfolioGrid = document.getElementById('portfolioSections');
    const featuredProjectsContainer = document.getElementById('featuredProjectsContainer');

    // --- Client Manager Logic ---
    const clientsModal = document.getElementById('clientsModal');
    const manageClientsBtn = document.getElementById('manageClientsBtn');
    const closeClientsModal = document.getElementById('closeClientsModal');
    const clientsList = document.getElementById('clientsList');
    const addNewClientBtn = document.getElementById('addNewClientBtn');

    const siteEditorModal = document.getElementById('siteEditorModal');
    const closeSiteEditorModal = document.getElementById('closeSiteEditorModal');
    const siteEditorForm = document.getElementById('siteEditorForm');
    const previewSiteBtn = document.getElementById('previewSiteBtn');

    if (manageClientsBtn) {
        manageClientsBtn.onclick = () => {
            clientsModal.style.display = 'block';
            loadClientsList();
        };
    }

    if (closeClientsModal) closeClientsModal.onclick = () => clientsModal.style.display = 'none';
    if (closeSiteEditorModal) closeSiteEditorModal.onclick = () => siteEditorModal.style.display = 'none';

    if (addNewClientBtn) {
        addNewClientBtn.onclick = () => openSiteEditor();
    }

    // Tab Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.onclick = () => {
            const target = btn.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
            document.getElementById(target).style.display = 'block';
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
    });

    // --- Ad-Blocker Proactive Detection ---
    const checkAdBlocker = async () => {
        const domains = [
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
            'https://securetoken.googleapis.com/v1/token',
            'https://firebaseinstallations.googleapis.com/v1/projects/'
        ];
        
        try {
            // We use 'head' to minimize data usage, but even a failed preflight is enough to detect a block
            await Promise.all(domains.map(url => 
                fetch(url, { method: 'HEAD', mode: 'no-cors' }).catch(e => { throw e; })
            ));
            console.log("Security Handshake domains are reachable.");
        } catch (err) {
            console.warn("AD-BLOCKER ALERT: Critical security domains are being blocked by your browser.");
            window.securityBlocked = true;
            
            // Show the warning note immediately if it exists
            const networkNote = document.getElementById('authNetworkNote');
            if (networkNote) {
                networkNote.style.display = 'block';
            }
        }
    };
    checkAdBlocker();

    const loadClientsList = () => {
        if (!clientsList) return;
        clientsList.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Syncing clients...</p></div>';

        onSnapshot(query(collection(db, 'clientSites'), orderBy('createdAt', 'desc')), 
            (snapshot) => {
                clientsList.innerHTML = '';
                if (snapshot.empty) {
                    clientsList.innerHTML = '<p style="text-align: center; padding: 20px; opacity: 0.5;">No active clients yet. Start by adding one!</p>';
                    return;
                }

                snapshot.forEach(docSnap => {
                    const client = docSnap.data();
                    const id = docSnap.id;
                    
                    // Determine the correct tenant URL
                    let tenantUrl = `site.html?id=${id}`;
                    if (client.status === 'Live') {
                        if (client.custom_domains && client.custom_domains.length > 0) {
                            tenantUrl = `https://${client.custom_domains[0]}`;
                        } else if (client.subdomain) {
                            tenantUrl = `https://${client.subdomain}.quicksitekenya.co.ke`;
                        }
                    }

                    const item = document.createElement('div');
                    item.className = 'client-item';
                    item.innerHTML = `
                        <div class="client-info">
                            <h4>${client.businessName || 'Elite Business'} <span style="font-size: 0.75rem; opacity: 0.4; font-weight: 400;">(${client.clientName || client.clientEmail?.split('@')[0]})</span></h4>
                            <p>${client.subscriptionPlan || client.plan || 'Starter Presence'} | Template: ${client.template || 'Universal'}</p>
                            <div class="client-badges">
                                <span class="client-badge plan">${(client.subscriptionPlan || client.plan || 'Starter Presence')}</span>
                                <span class="client-badge status-${(client.status || 'Draft').toLowerCase()}">${client.status || 'Draft'}</span>
                            </div>
                        </div>
                        <div class="client-actions">
                            <a href="${tenantUrl}" target="_blank" class="btn btn-primary btn-icon" title="View Site" style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.1); color: var(--primary-color);">
                                <i data-lucide="external-link" style="width: 18px;"></i>
                            </a>
                            <button class="btn btn-secondary edit-client-btn" data-id="${id}" style="padding: 10px 18px; font-weight: 700; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                                <i data-lucide="edit-3" style="width: 18px;"></i> Manage
                            </button>
                            <button class="btn btn-primary btn-icon delete-client-btn" data-id="${id}" style="background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.3); color: #ef4444;" title="Delete Client">
                                <i data-lucide="trash-2" style="width: 18px;"></i>
                            </button>
                        </div>
                    `;
                    clientsList.appendChild(item);

                    item.querySelector('.edit-client-btn').onclick = () => openSiteEditor(id, client);
                    let isDeleting = false;
                    const deleteBtn = item.querySelector('.delete-client-btn');
                    deleteBtn.onclick = async () => {
                        if (!isDeleting) {
                            // First click asks for confirmation by changing the button text
                            isDeleting = true;
                            deleteBtn.innerHTML = 'Click to Confirm Removal';
                            deleteBtn.style.background = 'darkred';
                            setTimeout(() => {
                                // Reset after 3 seconds if not clicked
                                if(isDeleting) {
                                    isDeleting = false;
                                    deleteBtn.innerHTML = '<i data-lucide="trash-2"></i>';
                                    deleteBtn.style.background = '#ff4444';
                                    if (window.lucide) window.lucide.createIcons();
                                }
                            }, 3000);
                        } else {
                            // Second click executes delete
                            try {
                                await deleteDoc(doc(db, 'clientSites', id));
                                showToast('Client removed successfully.');
                                // The onSnapshot listener will automatically remove it from the DOM
                            } catch (err) {
                                showToast('Failed to delete: ' + err.message, 'error');
                            }
                        }
                    };
                });
                if (window.lucide) window.lucide.createIcons();
            },
            (error) => {
                console.error("Clients list listener error:", error);
                if (error.code === 'permission-denied') {
                    clientsList.innerHTML = '<p style="padding: 20px; text-align: center; color: #ff6666;">Access Denied: You do not have permission to view the client sites list.</p>';
                } else {
                    clientsList.innerHTML = '<p style="padding: 20px; text-align: center;">Failed to sync clients.</p>';
                }
            }
        );
    };

    const openSiteEditor = (id = null, data = null) => {
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = (val !== undefined && val !== null) ? val : '';
        };

        setVal('editSiteId', id || '');
        const titleEl = document.getElementById('siteEditorTitle');
        if (titleEl) titleEl.innerHTML = id ? `Edit <span>${data.businessName}</span>` : 'Add New <span>Client Site</span>';
        
        // Populate inputs
        setVal('clientNameInput', data ? data.clientName || '' : '');
        setVal('businessNameInput', data ? data.businessName || '' : '');
        setVal('planInput', data ? data.plan || 'Starter Online Presence' : 'Starter Online Presence');
        setVal('templateInput', data ? data.template || 'CORPORATE_CLEAN' : 'CORPORATE_CLEAN');
        setVal('taglineInput', data ? data.tagline || '' : '');
        setVal('aboutTextInput', data ? data.aboutText || '' : '');
        setVal('statusInput', data ? data.status || 'Draft' : 'Draft');
        
        // Services
        setVal('servicesInput', data && data.services ? data.services.map(s => `${s.name || ''} | ${s.price || ''} | ${s.description || ''}`).join('\n') : '');
        
        // Contact
        setVal('phoneInput', data && data.contact ? data.contact.phone || '' : '');
        setVal('whatsappInput', data && data.contact ? data.contact.whatsapp || '' : '');
        setVal('addressInput', data && data.contact ? data.contact.address || '' : '');
        setVal('mapUrlInput', data && data.contact ? data.contact.mapUrl || '' : '');
        
        // Media
        setVal('heroImageInput', data && data.images ? data.images.hero || '' : '');
        setVal('aboutImageInput', data && data.images ? data.images.about || '' : '');
        setVal('servicesImageInput', data && data.images ? data.images.services || '' : '');
        setVal('logoImageInput', data && data.images ? data.images.logo || '' : '');
        setVal('galleryImagesInput', data && data.images && data.images.gallery ? data.images.gallery.join('\n') : '');
        
        // Hosting & Domains
        setVal('customDomainInput', data ? data.customDomain || '' : '');
        setVal('subdomainInput', data ? data.subdomain || '' : '');
        setVal('customDomainsListInput', data && data.custom_domains ? data.custom_domains.join(', ') : '');
        
        // Advanced Universal Template Fields
        setVal('heroSettingsInput', data && data.hero ? `${data.hero.title || ''} | ${data.hero.subtitle || ''} | ${data.hero.cta || ''}` : '');
        setVal('featuresInput', data && data.features ? data.features.map(f => `${f.title || ''} | ${f.desc || ''} | ${f.icon || ''}`).join('\n') : '');
        setVal('testimonialsInput', data && data.testimonials ? data.testimonials.map(t => `${t.name || ''} | ${t.quote || ''}`).join('\n') : '');
        setVal('pricingInput', data && data.pricing ? data.pricing.map(p => `${p.plan || ''} | ${p.price || ''} | ${(p.features || []).join(', ')}`).join('\n') : '');
        setVal('ctaSettingsInput', data && data.cta ? `${data.cta.title || ''} | ${data.cta.btn || ''}` : '');
        
        // Billing & Subscriptions
        setVal('subscriptionPlanInput', data ? data.plan || data.subscriptionPlan || 'Starter Presence' : 'Starter Presence');
        setVal('paymentStatusInput', data ? data.paymentStatus || 'Unpaid' : 'Unpaid');
        setVal('setupFeeInput', data ? data.setupFee || 0 : 0);
        setVal('monthlyFeeInput', data ? data.monthlyFee || 0 : 0);
        setVal('featuresEnabledInput', data && data.featuresEnabled ? data.featuresEnabled.join(', ') : '');
        setVal('projectVisionInput', data ? data.projectVision || '' : '');

        siteEditorModal.style.display = 'block';
    };

    if (siteEditorForm) {
        // Admin Site Editor save logic
        document.getElementById('planInput').addEventListener('change', (e) => {
            const val = e.target.value;
            const subPlan = document.getElementById('subscriptionPlanInput');
            if (subPlan) subPlan.value = val;
        });

        document.getElementById('subscriptionPlanInput').addEventListener('change', (e) => {
            const val = e.target.value;
            const planInput = document.getElementById('planInput');
            if (planInput) planInput.value = val;
        });

        siteEditorForm.onsubmit = async (e) => {
            e.preventDefault();
            const id = document.getElementById('editSiteId').value;
            const submitBtn = siteEditorForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerText = 'Publishing Instant Update...';

            const servicesRaw = document.getElementById('servicesInput').value.split('\n');
            const services = servicesRaw.filter(line => line.includes('|')).map(line => {
                const parts = line.split('|');
                return { name: parts[0].trim(), price: parts[1].trim(), description: (parts[2] || '').trim() };
            });

            // Ensure plan values match before submission
            const assignedPlan = document.getElementById('planInput').value;
            const subscriptionPlan = document.getElementById('subscriptionPlanInput').value;
            const finalPlan = assignedPlan || subscriptionPlan || 'Starter Presence';

            const siteData = {
                clientName: document.getElementById('clientNameInput').value,
                businessName: document.getElementById('businessNameInput').value,
                plan: finalPlan,
                subscriptionPlan: finalPlan, // For backward compatibility
                template: document.getElementById('templateInput').value,
                tagline: document.getElementById('taglineInput').value,
                aboutText: document.getElementById('aboutTextInput').value,
                contact: {
                    phone: document.getElementById('phoneInput').value,
                    whatsapp: document.getElementById('whatsappInput').value,
                    address: document.getElementById('addressInput').value,
                    mapUrl: document.getElementById('mapUrlInput').value
                },
                customDomain: document.getElementById('customDomainInput').value,
                custom_domains: document.getElementById('customDomainsListInput').value.split(',').map(d => d.trim()).filter(d => d),
                subdomain: document.getElementById('subdomainInput').value,
                template: document.getElementById('templateInput').value,
                // SaaS Billing Fields
                paymentStatus: document.getElementById('paymentStatusInput').value,
                setupFee: parseFloat(document.getElementById('setupFeeInput').value) || 0,
                monthlyFee: parseFloat(document.getElementById('monthlyFeeInput').value) || 0,
                featuresEnabled: document.getElementById('featuresEnabledInput').value.split(',').map(f => f.trim()).filter(f => f),
                projectVision: document.getElementById('projectVisionInput').value,
                // Advanced Template Fields
                hero: {
                    title: document.getElementById('heroSettingsInput').value.split('|')[0]?.trim() || '',
                    subtitle: document.getElementById('heroSettingsInput').value.split('|')[1]?.trim() || '',
                    cta: document.getElementById('heroSettingsInput').value.split('|')[2]?.trim() || ''
                },
                features: document.getElementById('featuresInput').value.split('\n').filter(l => l.includes('|')).map(l => {
                    const [title, desc, icon] = l.split('|').map(s => s.trim());
                    return { title, desc, icon: icon || 'check' };
                }),
                testimonials: document.getElementById('testimonialsInput').value.split('\n').filter(l => l.includes('|')).map(l => {
                    const [name, quote] = l.split('|').map(s => s.trim());
                    return { name, quote };
                }),
                pricing: document.getElementById('pricingInput').value.split('\n').filter(l => l.includes('|')).map(l => {
                    const [plan, price, featuresStr] = l.split('|').map(s => s.trim());
                    return { plan, price, features: featuresStr ? featuresStr.split(',').map(f => f.trim()) : [] };
                }),
                cta: {
                    title: document.getElementById('ctaSettingsInput').value.split('|')[0]?.trim() || '',
                    btn: document.getElementById('ctaSettingsInput').value.split('|')[1]?.trim() || ''
                },
                images: {
                    hero: document.getElementById('heroImageInput').value,
                    about: document.getElementById('aboutImageInput').value,
                    services: document.getElementById('servicesImageInput').value,
                    logo: document.getElementById('logoImageInput').value,
                    gallery: document.getElementById('galleryImagesInput').value.split('\n').filter(l => l.trim())
                },
                services: services,
                status: document.getElementById('statusInput').value,
                updatedAt: serverTimestamp()
            };

            try {
                if (id) {
                    await updateDoc(doc(db, 'clientSites', id), siteData);
                    showToast('Website Updated Live!');
                } else {
                    siteData.createdAt = serverTimestamp();
                    await addDoc(collection(db, 'clientSites'), siteData);
                    showToast('New Client Site Created!');
                }
                siteEditorModal.style.display = 'none';
            } catch (err) {
                handleFirestoreError(err, id ? OperationType.UPDATE : OperationType.CREATE, 'clientSites');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Save → Website Live';
            }
        };
    }

    if (previewSiteBtn) {
        previewSiteBtn.onclick = () => {
            const id = document.getElementById('editSiteId').value;
            if (!id) {
                showToast('Save the site first to generate a preview link.', 'info');
                return;
            }
            window.open(`site.html?id=${id}&preview=true`, '_blank');
        };
    }

    const aiGenBtn = document.getElementById('aiGenerateContentBtn');
    const tabBriefGenerateBtn = document.getElementById('tabBriefGenerateBtn');

    const triggerAIGeneration = async () => {
        const brief = document.getElementById('projectVisionInput').value;
        const businessName = document.getElementById('businessNameInput').value;
        const template = document.getElementById('templateInput').value;
        const docId = document.getElementById('editSiteId').value;
        
        // Gather extra context
        const phone = document.getElementById('phoneInput').value;
        const whatsapp = document.getElementById('whatsappInput').value;
        const address = document.getElementById('addressInput').value;
        const existingTagline = document.getElementById('taglineInput').value;
        const existingAbout = document.getElementById('aboutTextInput').value;

        if (!brief && !existingAbout) {
            showToast("The Project Vision or About Business field is empty. AI needs a description to design from.", 'error');
            return;
        }

        if (!docId) {
            showToast("Please save this client first before using AI generation.", 'info');
            return;
        }

        const originalBtnText = aiGenBtn ? aiGenBtn.innerHTML : 'AI Design';
        if (aiGenBtn) {
            aiGenBtn.innerHTML = '<i data-lucide="loader" class="spin" style="width: 16px; display: inline-block; vertical-align: middle; margin-right: 5px;"></i> Engineering...';
            aiGenBtn.disabled = true;
        }
        if (tabBriefGenerateBtn) {
            tabBriefGenerateBtn.disabled = true;
            tabBriefGenerateBtn.innerText = 'Engineering Site...';
        }

        const plan = document.getElementById('subscriptionPlanInput').value || 'Business Growth';

        try {
            const promptText = `Generate a website content object in JSON format based on the following context:

BUSINESS NAME: ${businessName}
SUBSCRIPTION PLAN: ${plan}
PROJECT BRIEF: ${brief}
CONTACT INFO: ${phone ? 'Phone: ' + phone : ''} ${whatsapp ? 'WhatsApp: ' + whatsapp : ''} ${address ? 'Address: ' + address : ''}
EXISTING TAGLINE: ${existingTagline}
EXISTING ABOUT: ${existingAbout}

You are an AI assistant responsible for selecting the most appropriate premium website template for a business AND generating all copy.

CRITICAL INSTRUCTION: You MUST respect the limits of the ${plan} subscription plan.
- If the plan is "Starter Presence" (1-Page Site): Only generate core essentials (Hero, About, Services, Contact, Tagline). Do NOT generate Testimonials, Features, or Pricing arrays.
- If the plan is "Business Growth" (5-7 Pages): Generate comprehensive content including Hero, About, Services, Features, Testimonials, Gallery Keywords, Pricing, and CTA.
- If the plan is "Pro Conversion System" (Advanced SaaS/Sales): Generate everything in "Business Growth" PLUS highly aggressive sales copy, advanced marketing CTAs, and complex pricing tiers.

Your template decision must be based on:
- Business name
- Industry
- Services
- Brand tone (if available)

AVAILABLE TEMPLATES:
1. LUXURY_DARK
Best for: Real estate, Agencies, High-end brands, Luxury services
Style: Dark gradient background, Red accents, Cinematic visuals, Bold typography

2. CORPORATE_CLEAN
Best for: Corporate companies, Consultants, Finance businesses, Professional services
Style: White background, Blue accents, Structured layout, Clean and professional

3. STARTUP_MODERN
Best for: Tech startups, SaaS platforms, Apps, Digital products
Style: Gradient backgrounds, Bright colors (purple/blue), Glassmorphism UI, Modern and innovative

4. BOLD_FITNESS
Best for: Gyms, Personal trainers, Sports brands, Fitness businesses
Style: Dark theme, Neon accents, Strong typography, High-energy visuals

5. UNIVERSAL_PROFESSIONAL
Best for: General professional services, Portfolios, Small businesses
Style: Modern, Clean, Versatile layout, High legibility

6. LEGAL_CONSULTING
Best for: Law firms, High-level consulting, Financial advisors
Style: Sophisticated, Serif typography, Trustworthy, Formal layout

INSTRUCTIONS:
- Match the business to the most suitable template from the list of AVAILABLE TEMPLATES based on Project Brief, Content, Media and Advanced needs. DO NOT default to any specific template; select the one that best fits the business industry and needs.
- If multiple templates could fit, choose the one that feels most premium and visually appropriate.
- ALWAYS make a fresh, business-specific template selection.
- Ensure the copy is high-converting and specifically tailored to the Kenyan market. Use local nuances if appropriate.

Respond ONLY with a raw JSON object matching this exact structure. DO NOT wrap in markdown blocks. DO NOT include any conversational prefixes.
{
  "template": "LUXURY_DARK | CORPORATE_CLEAN | STARTUP_MODERN | BOLD_FITNESS | UNIVERSAL_PROFESSIONAL | LEGAL_CONSULTING",
  "templateReason": "short explanation of why this template fits the business",
  "hero": { "title": "Main Headline", "subtitle": "Supporting text" },
  "heroImage": "Single keyword for hero image (e.g. business meeting)",
  "aboutImage": "Single keyword for about image (e.g. diverse team)",
  "servicesImage": "Single keyword for services image",
  "aboutText": "A professional, persuasive story about the business",
  "services": [ { "name": "Service Name", "description": "Short description", "price": "KES 5000" } ],
  "features": [ { "icon": "check", "title": "Quality", "desc": "We perfectly deliver" } ], // Omit if Starter Presence
  "pricing": [ { "plan": "Basic", "price": "KES 1000", "features": ["Feature 1", "Feature 2"] } ], // Omit if Starter Presence
  "testimonials": [ { "name": "John Doe", "quote": "Amazing service!" } ], // Omit if Starter Presence
  "tagline": "A punchy 1-sentence brand promise",
  "cta": { "title": "Ready to Start?", "btn": "Contact Us Now" }
}`;

            const payload = {
                promptText: promptText,
                systemInstruction: `You are an elite web designer and copywriter for QuickSite Kenya. 
                CRITICAL INSTRUCTION: You MUST strictly enforce the features of the assigned subscription plan:
                - If the PLAN is "Starter Presence": This is a 1-page site. Generate ONLY: Hero, About, Services, Contact. PROHIBIT: Testimonials, Features, Pricing, Gallery sections.
                - If the PLAN is "Business Growth": This is a 5-7 page site. Generate comprehensive content: Hero, About, Services, Features, Testimonials, Gallery, Pricing, CTA.
                - If the PLAN is "Pro Conversion System": Generate everything in "Business Growth" PLUS aggressive high-converting sales copy and complex pricing.
                
                Respond ONLY with JSON that adheres to these constraints.`
            };

            const reqUrl = window.location.origin.includes('localhost') ? 'http://localhost:3000/api/generate-design' : '/api/generate-design';
            const response = await fetch(reqUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            // Read as text first to handle non-JSON responses from proxies
            const rawText = await response.text();
            
            let responseData;
            try {
                responseData = JSON.parse(rawText);
            } catch (parseErr) {
                // If it fails to parse, it means we got plain text or HTML (like 504 Gateway Timeout)
                throw new Error(`Server returned non-JSON response (${response.status}): ` + rawText.substring(0, 100));
            }
            
            if (!response.ok) {
                throw new Error(responseData.error || "Server processing error");
            }
            
            const output = responseData.output;
            if (!output) throw new Error("Backend returned empty response.");
            
            // Extract the pure JSON block to avoid conversational prefixes
            const jsonMatch = output.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
               throw new Error("Invalid output format returned by AI.");
            }
            
            let content;
            try {
                content = JSON.parse(jsonMatch[0]);
            } catch (err) {
                console.error("AI JSON Matching Extracted:", jsonMatch[0]);
                throw new Error("Failed to parse extracted JSON block. The AI may have malformed the object.");
            }

            // Map Image keywords to real high-res placeholders
            if (content.heroImage) content.heroImageUrl = `https://picsum.photos/seed/${String(content.heroImage).replace(/\s+/g, '')}/1920/1080`;
            if (content.aboutImage) content.aboutImageUrl = `https://picsum.photos/seed/${String(content.aboutImage).replace(/\s+/g, '')}/1080/1080`;
            if (content.servicesImage) content.servicesImageUrl = `https://picsum.photos/seed/${String(content.servicesImage).replace(/\s+/g, '')}/1280/720`;
            
            // Safe fallbacks
            const hero = content.hero || { title: "", subtitle: "" };
            const cta = content.cta || { title: "", btn: "" };
            const services = Array.isArray(content.services) ? content.services : [];
            const features = Array.isArray(content.features) ? content.features : [];
            const pricing = Array.isArray(content.pricing) ? content.pricing : [];
            const testimonials = Array.isArray(content.testimonials) ? content.testimonials : [];
            // Prefer user's choice if not 'Default', otherwise let AI select
            const userTemplate = document.getElementById('templateInput').value;
            const aiTemplate = (userTemplate && userTemplate !== 'Default') ? userTemplate : (content.template || userTemplate);

            // Ensure the dropdown reflects the AI's choice if it exists
            const templateInputEl = document.getElementById('templateInput');
            if (templateInputEl && content.template) {
                // If the option doesn't exist yet, we might need to add it, but normally it should map.
                templateInputEl.value = content.template;
            }

            // Update Firestore
            await updateDoc(doc(db, 'clientSites', docId), {
                template: aiTemplate,
                templateReason: content.templateReason || "",
                hero: hero,
                aboutText: content.aboutText || existingAbout || "",
                tagline: content.tagline || existingTagline || "",
                services: services,
                features: features,
                pricing: pricing,
                testimonials: testimonials,
                cta: cta,
                images: {
                    hero: content.heroImageUrl || (document.getElementById('heroImageInput') ? document.getElementById('heroImageInput').value : ''),
                    about: content.aboutImageUrl || (document.getElementById('aboutImageInput') ? document.getElementById('aboutImageInput').value : ''),
                    services: content.servicesImageUrl || (document.getElementById('servicesImageInput') ? document.getElementById('servicesImageInput').value : ''),
                    logo: document.getElementById('logoImageInput') ? document.getElementById('logoImageInput').value : '',
                    gallery: document.getElementById('galleryImagesInput') ? document.getElementById('galleryImagesInput').value.split('\n').filter(l => l.trim()) : []
                },
                featuresEnabled: ['Features', 'Pricing', 'Testimonials', 'CTA'],
                updatedAt: serverTimestamp()
            });

            // Update UI fields
            const setVal = (id, val) => {
                const el = document.getElementById(id);
                if (el) el.value = val !== undefined && val !== null ? val : '';
            };
            setVal('heroSettingsInput', `${hero.title} | ${hero.subtitle} | Learn More`);
            setVal('taglineInput', content.tagline || existingTagline);
            setVal('aboutTextInput', content.aboutText || existingAbout);
            setVal('servicesInput', services.map(s => `${s.name} | ${s.price} | ${s.description}`).join('\n'));
            setVal('featuresInput', features.map(f => `${f.title} | ${f.desc} | ${f.icon}`).join('\n'));
            setVal('pricingInput', pricing.map(p => `${p.plan} | ${p.price} | ${(p.features || []).join(', ')}`).join('\n'));
            setVal('testimonialsInput', testimonials.map(t => `${t.name} | ${t.quote}`).join('\n'));
            setVal('ctaSettingsInput', `${cta.title} | ${cta.btn}`);
            
            setVal('heroImageInput', content.heroImageUrl || '');
            setVal('aboutImageInput', content.aboutImageUrl || '');
            setVal('servicesImageInput', content.servicesImageUrl || '');

            showToast("Design complete! Switched to Content tab to review results.", 'success');
            
            // Auto switch to content tab
            const contentTabBtn = document.querySelector('.tab-btn[data-tab="tab-content"]');
            if (contentTabBtn) contentTabBtn.click();

        } catch (err) {
            console.error("AI Gen error:", err);
            const errMsg = err instanceof Error ? err.message : String(err);
            showToast("AI Gen failed: " + errMsg, 'error');
        } finally {
            if (aiGenBtn) {
                aiGenBtn.innerHTML = originalBtnText;
                aiGenBtn.disabled = false;
            }
            if (tabBriefGenerateBtn) {
                tabBriefGenerateBtn.disabled = false;
                tabBriefGenerateBtn.innerHTML = '<i data-lucide="brain-circuit"></i> Run AI Generation Phase';
            }
            if (window.lucide) window.lucide.createIcons();
        }
    };

    if (aiGenBtn) aiGenBtn.onclick = triggerAIGeneration;
    if (tabBriefGenerateBtn) tabBriefGenerateBtn.onclick = triggerAIGeneration;

    // --- Category Selector Logic ---
    const initCategorySelector = () => {
        const selector = document.getElementById('categorySelector');
        const hiddenInput = document.getElementById('siteCategory');
        if (!selector || !hiddenInput) return;

        const options = selector.querySelectorAll('.category-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                selectCategory(option.getAttribute('data-value'));
            });
        });
    };

    const selectCategory = (value) => {
        const selector = document.getElementById('categorySelector');
        const hiddenInput = document.getElementById('siteCategory');
        if (!selector || !hiddenInput) return;

        const options = selector.querySelectorAll('.category-option');
        options.forEach(opt => {
            if (opt.getAttribute('data-value') === value) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
        hiddenInput.value = value;
    };

    const openAddWebsiteModal = (preSelectedCategory = null, editData = null) => {
        const modal = document.getElementById('addWebsiteModal');
        if (!modal) return;
        
        modal.style.display = 'block';

        const title = document.getElementById('addWebsiteModalTitle');
        const desc = document.getElementById('addWebsiteModalDesc');
        const form = document.getElementById('addWebsiteForm');

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val !== undefined && val !== null ? val : '';
        };

        if (editData) {
            if (title) title.innerHTML = `Edit <span>Website</span>`;
            if (desc) desc.innerText = `Update the details of your digital asset.`;
            setVal('editWebsiteId', editData.id);
            setVal('siteName', editData.name || editData.title || editData.businessName || '');
            setVal('sitePrice', editData.price || '');
            setVal('siteDesc', editData.desc || editData.description || '');
            setVal('siteImage', editData.img || editData.image || '');
            setVal('siteLink', editData.link || editData.url || '');
            
            const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
            if(submitBtn) submitBtn.innerText = 'Update Project';
            
            if(editData.category) {
                selectCategory(editData.category);
                setVal('siteCategory', editData.category);
            } else {
                setVal('siteCategory', 'Other Digital Assets');
                selectCategory('Other Digital Assets');
            }
        } else {
            if (title) title.innerHTML = `List Your <span>Website</span>`;
            if (desc) desc.innerText = `Fill in the details to showcase your digital asset in our elite marketplace.`;
            if(form) {
                form.reset();
                setVal('editWebsiteId', '');
                const submitBtn = form.querySelector('button[type="submit"]');
                if(submitBtn) submitBtn.innerText = 'Publish Project';
            }
            if (preSelectedCategory) {
                selectCategory(preSelectedCategory);
            } else {
                // Reset if no category provided
                const options = document.querySelectorAll('.category-option');
                options.forEach(opt => opt.classList.remove('active'));
                const hiddenInput = document.getElementById('siteCategory');
                if (hiddenInput) hiddenInput.value = '';
            }
        }
    };

    initCategorySelector();

    // --- Custom Cursor Implementation ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .logo, .nav-links li, .stat-item, .bento-item, .gallery-item, .social-links a');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('active');
                cursorOutline.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('active');
                cursorOutline.classList.remove('active');
            });
        });
    }

    // --- Hero Content Mouse Parallax ---
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }

    // --- Interactive Stats Counter ---
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-item h3');
        if (!stats.length) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            if (isNaN(target)) return;
            
            let count = 0;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    stat.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target + (stat.innerText.includes('+') ? '+' : '');
                }
            };
            updateCount();
        });
    };

    // --- Advanced Scroll Reveal with Intersection Observer ---
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a stat item, trigger the counter
                if (entry.target.classList.contains('stats')) {
                    animateStats();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Reusable reveal function to observe elements
    const reveal = (elements) => {
        const els = elements || document.querySelectorAll('.reveal:not(.active)');
        els.forEach(el => {
            // Add default reveal-up if no specific reveal class is present
            if (!el.classList.contains('reveal-left') && !el.classList.contains('reveal-right')) {
                el.classList.add('reveal-up');
            }
            revealObserver.observe(el);
        });
    };

    // Initial reveal call
    reveal();

    // MutationObserver to automatically handle dynamically added .reveal elements
    const revealMutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    if (node.classList.contains('reveal')) {
                        reveal([node]);
                    }
                    const nestedReveals = node.querySelectorAll('.reveal');
                    if (nestedReveals.length > 0) {
                        reveal(nestedReveals);
                    }
                }
            });
        });
    });

    revealMutationObserver.observe(document.body, { childList: true, subtree: true });

    // --- Interactive Service Cards Spotlight Effect ---
    const updateServiceCardSpotlight = () => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    };
    updateServiceCardSpotlight();

    try {
        initThreeBackground();
    } catch (err) {
        console.error('Failed to initialize 3D background:', err);
    }
    
    // Check server health (non-blocking)
    fetch('/api/health')
        .then(response => response.json())
        .then(health => console.log('Server health check:', health))
        .catch(err => console.warn('Server health check failed. Backend might be unreachable.', err));

    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const openModalBtn = document.getElementById('openAddModal');

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }
    });

    // Mobile Menu Toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Animate hamburger spans
            const spans = hamburger.querySelectorAll('span');
            if (spans.length >= 3) {
                if (navLinks.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                if (spans.length >= 3) {
                    spans.forEach(span => span.style.transform = 'none');
                    spans[1].style.opacity = '1';
                }
            }
        });
    }

    // Close mobile menu on link click
    if (links && hamburger && navLinks) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                if (spans.length >= 3) {
                    spans.forEach(span => span.style.transform = 'none');
                    spans[1].style.opacity = '1';
                }
            });
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;
            
            const isAnchor = href.startsWith('#');
            const currentFile = window.location.pathname.split('/').pop() || 'index.html';
            const isSamePageAnchor = href.includes('#') && (href.startsWith(currentFile + '#') || href.startsWith('./' + currentFile + '#'));
            
            if (isAnchor || isSamePageAnchor) {
                const targetId = isAnchor ? href : '#' + href.split('#')[1];
                if (targetId === '#') return;
                
                e.preventDefault();
                try {
                    const target = document.querySelector(targetId);
                    if (target) {
                        // Force reveal if it's hidden
                        target.classList.add('active');
                        const parentReveal = target.closest('.reveal');
                        if (parentReveal) parentReveal.classList.add('active');
                        
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else if (!isAnchor) {
                        // If it's same page anchor but target not found, just navigate normally (fallback)
                        window.location.hash = targetId;
                    }
                } catch (err) {
                    console.warn('Invalid selector:', href);
                }
            }
        });
    });

    // Handle Hash on Load for Reveal Elements
    const handleInitialHash = () => {
        if (window.location.hash) {
            setTimeout(() => {
                try {
                    const targetId = window.location.hash;
                    const target = document.querySelector(targetId);
                    if (target) {
                        target.classList.add('active');
                        const parentReveal = target.closest('.reveal');
                        if (parentReveal) parentReveal.classList.add('active');
                        
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (err) {
                    console.warn('Initial hash error:', err);
                }
            }, 1000); // Delay for layout stability
        }
    };
    handleInitialHash();

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Handle URL parameters for service pre-selection
        const urlParams = new URLSearchParams(window.location.search);
        const serviceParam = urlParams.get('service');
        const interestParam = urlParams.get('interest');
        const packageParam = urlParams.get('package');

        if (serviceParam) {
            const serviceSelect = document.getElementById('contactService');
            if (serviceSelect) {
                serviceSelect.value = serviceParam;
            }
        }

        if (packageParam) {
            const serviceSelect = document.getElementById('contactService');
            const messageField = document.getElementById('contactMessage');
            
            let packageName = '';
            let selectValue = '';
            
            if (packageParam === 'starter') {
                packageName = 'Starter Presence';
                selectValue = 'Starter Presence';
            } else if (packageParam === 'growth') {
                packageName = 'Business Growth';
                selectValue = 'Business Growth';
            } else if (packageParam === 'pro' || packageParam === 'generator') {
                packageName = 'Pro Conversion System';
                selectValue = 'Pro Conversion System';
            } else if (packageParam === 'enterprise') {
                packageName = 'Enterprise SaaS System';
                selectValue = 'Enterprise SaaS';
            }
            
            if (serviceSelect && selectValue) {
                serviceSelect.value = selectValue;
            }
            
            if (messageField && packageName) {
                messageField.value = `I am interested in the elite "${packageName}" package and architecting a high-performance digital presence.`;
            }
        }

        if (interestParam) {
            const messageField = document.getElementById('contactMessage');
            const serviceSelect = document.getElementById('contactService');
            if (messageField) {
                messageField.value = `I am interested in the "${interestParam}" website from your marketplace. I would like to discuss the details and acquisition process.`;
            }
            if (serviceSelect) {
                serviceSelect.value = 'web-design';
            }
        }

        const couponParam = urlParams.get('coupon');
        if (couponParam) {
            const messageField = document.getElementById('contactMessage');
            if (messageField) {
                if (!messageField.value.includes('SAVE6') && !messageField.value.includes('6% OFF')) {
                    const currentVal = messageField.value ? messageField.value + '\n\n' : '';
                    messageField.value = `${currentVal}[DISCOUNT COUPON APPLIED: ${couponParam.toUpperCase()} - 6% OFF All Services]`;
                }
            }
            showToast('🎁 6% OFF Coupon Code "SAVE6" successfully applied to your consultation request!', 'success');
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerText : 'Submit Inquiry';
            
            if (submitBtn) {
                submitBtn.innerText = 'Locking In 48h Build Slot...';
                submitBtn.disabled = true;
            }
            
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                contactMethod: formData.get('contactMethod') || 'WhatsApp Direct',
                budget: formData.get('budget') || 'Starter ($99 - $150)',
                coupon: formData.get('coupon') || 'SAVE6',
                message: formData.get('message'),
                status: 'New',
                createdAt: serverTimestamp()
            };
            
            try {
                // 1. Direct Firestore Save
                await addDoc(collection(db, "inquiries"), data);
                
                // 2. Ping Email Notification endpoint if reachable
                try {
                    await fetch('/api/consultation', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                } catch(e) {
                    console.warn("Email API ping failed, but DB saved successfully.", e);
                }
                
                // Construct WhatsApp message URL for instant lead response
                const waText = encodeURIComponent(`Hi Michael Mulili (QuickSite Kenya),\nI just submitted an intake form:\n• Name: ${data.name}\n• Service: ${data.service}\n• Budget: ${data.budget}\n• Coupon: ${data.coupon}\n• Preferred Contact: ${data.contactMethod}\n• Message: ${data.message.substring(0, 150)}...\n\nLooking forward to our 48-hour build consultation!`);
                const waUrl = `https://wa.me/254708691648?text=${waText}`;

                showToast('🎉 Intake Submitted! Redirecting to confirmation...', 'success');
                setTimeout(() => {
                    window.location.href = `thank-you.html?name=${encodeURIComponent(data.name)}&wa=${encodeURIComponent(waUrl)}`;
                }, 1200);
            } catch (error) {
                console.error('Error sending inquiry:', error);
                if (submitBtn) {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }
                showToast('Failed to submit inquiry: ' + error.message, 'error');
            }
        });
    }

    // --- Inquiries Management ---
    let inquiriesUnsubscribe = null;
    let globalInquiriesListener = null;

    const updateInquiryBadge = (count) => {
        const viewInquiriesBtn = document.getElementById('viewInquiriesBtn');
        if (!viewInquiriesBtn) return;

        let badge = viewInquiriesBtn.querySelector('.inquiry-badge');
        if (count > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'inquiry-badge';
                badge.style.background = '#ff4444';
                badge.style.color = 'white';
                badge.style.fontSize = '0.6rem';
                badge.style.padding = '2px 6px';
                badge.style.borderRadius = '10px';
                badge.style.marginLeft = '8px';
                badge.style.fontWeight = 'bold';
                viewInquiriesBtn.appendChild(badge);
            }
            badge.innerText = count;
        } else if (badge) {
            badge.remove();
        }
    };

    const initGlobalInquiriesListener = () => {
        // STRICT ISOLATION: Only initialize if confirmed admin
        if (!isAdmin || !auth.currentUser) {
            if (globalInquiriesListener) {
                globalInquiriesListener();
                globalInquiriesListener = null;
            }
            return;
        }

        const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
        let isInitialLoad = true;

        globalInquiriesListener = onSnapshot(q, (snapshot) => {
            const newCount = snapshot.docs.filter(doc => doc.data().status === 'New' || !doc.data().status).length;
            updateInquiryBadge(newCount);
            
            if (!isInitialLoad && !snapshot.empty) {
                // Check if the newest inquiry is actually new (not just a deletion)
                const newestDoc = snapshot.docs[0];
                const data = newestDoc.data();
                const createdAt = data.createdAt ? data.createdAt.toMillis() : Date.now();
                
                // If inquiry is less than 10 seconds old, show notification
                if (Date.now() - createdAt < 10000) {
                    showToast(`New Inquiry from ${data.name}!`, 'success');
                }
            }
            isInitialLoad = false;
        }, (error) => {
            console.error("Global Inquiries Listener Error:", error);
            if (error.code === 'permission-denied') {
                console.warn("Permission denied for global inquiries listener. Dashboard UI may be limited.");
            }
        });
    };

    const loadInquiries = () => {
        if (!inquiriesList) return;
        
        // CRITICAL: Ensure user is authenticated before attempting to query inquiries
        if (!auth.currentUser) {
            console.warn("Attempted to load inquiries while unauthenticated.");
            inquiriesList.innerHTML = `
                <div style="text-align: center; padding: 40px; opacity: 0.6;">
                    <i data-lucide="lock" style="width: 48px; height: 48px; margin-bottom: 15px;"></i>
                    <p>Authentication required to view inquiries.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        // Unsubscribe from previous listener if it exists
        if (inquiriesUnsubscribe) {
            inquiriesUnsubscribe();
            inquiriesUnsubscribe = null;
        }
        
        inquiriesList.innerHTML = `
            <div class="loading-spinner" style="text-align: center; padding: 40px;">
                <div class="spinner"></div>
                <p style="margin-top: 15px; opacity: 0.6;">Retrieving inquiries...</p>
            </div>
        `;

        const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
        
        inquiriesUnsubscribe = onSnapshot(q, (snapshot) => {
            console.log(`>>> [Admin] Inquiries snapshot received. Size: ${snapshot.size}`);
            if (snapshot.empty) {
                inquiriesList.innerHTML = `
                    <div class="no-inquiries">
                        <i data-lucide="inbox" style="width: 48px; height: 48px; margin-bottom: 15px; opacity: 0.3;"></i>
                        <p>No inquiries found. Your marketplace is quiet... for now.</p>
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
                return;
            }

            inquiriesList.innerHTML = '';
            
            // Add a refresh button at the top
            const refreshContainer = document.createElement('div');
            refreshContainer.style.display = 'flex';
            refreshContainer.style.justifyContent = 'flex-end';
            refreshContainer.style.marginBottom = '20px';
            refreshContainer.innerHTML = `
                <button id="refreshInquiriesBtn" class="btn btn-secondary" style="font-size: 0.7rem; padding: 5px 12px;">
                    <i data-lucide="refresh-cw" style="width: 12px; height: 12px; margin-right: 5px;"></i> Refresh
                </button>
            `;
            inquiriesList.appendChild(refreshContainer);
            
            const refreshBtn = refreshContainer.querySelector('#refreshInquiriesBtn');
            if (refreshBtn) {
                refreshBtn.onclick = () => loadInquiries();
            }

            const tableContainer = document.createElement('div');
            tableContainer.style.overflowX = 'auto';
            tableContainer.innerHTML = `
                <table class="inquiries-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--glass-border); background: rgba(0,0,0,0.3);">
                            <th style="padding: 12px;">ID</th>
                            <th style="padding: 12px;">Full Name</th>
                            <th style="padding: 12px;">Email</th>
                            <th style="padding: 12px;">Phone</th>
                            <th style="padding: 12px;">Service</th>
                            <th style="padding: 12px;">Message</th>
                            <th style="padding: 12px;">Date Submitted</th>
                            <th style="padding: 12px;">Status</th>
                            <th style="padding: 12px;">Actions</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            `;
            inquiriesList.appendChild(tableContainer);
            const tbody = tableContainer.querySelector('tbody');

            snapshot.forEach((docSnap) => {
                const data = docSnap.data();
                const id = docSnap.id;
                const status = data.status || 'New';
                
                let date = 'Just now';
                if (data.createdAt) {
                    if (data.createdAt.seconds) {
                        date = new Date(data.createdAt.seconds * 1000).toLocaleString();
                    } else if (data.createdAt instanceof Date) {
                        date = data.createdAt.toLocaleString();
                    } else if (typeof data.createdAt === 'string') {
                        date = new Date(data.createdAt).toLocaleString();
                    }
                }
                
                const tr = document.createElement('tr');
                tr.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
                
                const shortId = id.substring(0, 6) + '...';
                const shortMessage = data.message && data.message.length > 30 ? data.message.substring(0, 30) + '...' : data.message;

                tr.innerHTML = `
                    <td style="padding: 12px;" title="${id}">${shortId}</td>
                    <td style="padding: 12px;">${data.name || '-'}</td>
                    <td style="padding: 12px;"><a href="mailto:${data.email || ''}" style="color: var(--primary-color);">${data.email || '-'}</a></td>
                    <td style="padding: 12px;">${data.phone || '-'}</td>
                    <td style="padding: 12px;">${data.service || '-'}</td>
                    <td style="padding: 12px;" title="${data.message || ''}">${shortMessage || '-'}</td>
                    <td style="padding: 12px;">${date}</td>
                    <td style="padding: 12px;">
                        <select class="status-select" data-id="${id}" style="background: rgba(0,0,0,0.5); color: white; border: 1px solid var(--glass-border); padding: 5px; border-radius: 4px;">
                            <option value="New" ${status === 'New' ? 'selected' : ''}>New</option>
                            <option value="Read" ${status === 'Read' ? 'selected' : ''}>Read</option>
                            <option value="Replied" ${status === 'Replied' ? 'selected' : ''}>Replied</option>
                            <option value="Closed" ${status === 'Closed' ? 'selected' : ''}>Closed</option>
                        </select>
                    </td>
                    <td style="padding: 12px; display: flex; gap: 5px;">
                        <button class="btn btn-secondary btn-sm view-inquiry-btn" data-id="${id}" style="font-size: 0.7rem; padding: 4px 8px;">View</button>
                        <button class="inquiry-delete-btn" data-id="${id}" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 0.7rem; display: flex; align-items: center; gap: 5px;">
                            <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i>
                        </button>
                    </td>
                `;
                
                tbody.appendChild(tr);
            });

            // Add event listeners for status changes
            const statusSelects = tbody.querySelectorAll('.status-select');
            statusSelects.forEach(select => {
                select.addEventListener('change', async (e) => {
                    const docId = e.target.getAttribute('data-id');
                    const newStatus = e.target.value;
                    try {
                        await updateDoc(doc(db, 'inquiries', docId), { status: newStatus });
                        showToast('Status updated to ' + newStatus, 'success');
                    } catch (error) {
                        console.error('Error updating status:', error);
                        showToast('Failed to update status', 'error');
                    }
                });
            });

            // Add event listeners for view buttons
            const viewBtns = tbody.querySelectorAll('.view-inquiry-btn');
            viewBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const docId = e.currentTarget.getAttribute('data-id');
                    const docData = snapshot.docs.find(d => d.id === docId)?.data();
                    if (docData) {
                        showInquiryDetail(docId, docData);
                    }
                });
            });

            // Add event listeners for delete buttons
            const deleteBtns = tbody.querySelectorAll('.inquiry-delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const docId = e.currentTarget.getAttribute('data-id');
                    showConfirm('Are you sure you want to delete this inquiry?', async () => {
                        try {
                            await deleteDoc(doc(db, 'inquiries', docId));
                            showToast('Inquiry deleted.', 'success');
                        } catch (error) {
                            console.error('Error deleting inquiry:', error);
                            showToast('Failed to delete inquiry.', 'error');
                        }
                    });
                });
            });
            
            if (window.lucide) window.lucide.createIcons();
        }, (error) => {
            handleFirestoreError(error, OperationType.LIST, 'inquiries');
        });
    };

    if (closeInquiriesModal) {
        closeInquiriesModal.onclick = () => {
            inquiriesModal.style.display = 'none';
            // Stop listening when modal is closed to save resources and prevent permission errors on logout
            if (inquiriesUnsubscribe) {
                inquiriesUnsubscribe();
                inquiriesUnsubscribe = null;
            }
        };
    }

    if (closeBlogPostModal) {
        closeBlogPostModal.onclick = () => {
            blogPostModal.style.display = 'none';
        };
    }

    if (manageBlogBtn) {
        manageBlogBtn.onclick = (e) => {
            e.preventDefault();
            const blogTitle = document.getElementById('blogModalTitle');
            if (blogTitle) blogTitle.innerHTML = 'Add <span>Blog Post</span>';
            if (blogPostForm) blogPostForm.reset();
            const editPostId = document.getElementById('editPostId');
            if (editPostId) editPostId.value = '';
            if (blogPostModal) blogPostModal.style.display = 'block';
        };
    }

    // --- Newsletter Subscription ---
    const newsletterForms = document.querySelectorAll('.newsletter form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button');
            const email = emailInput ? emailInput.value : '';
            
            if (!email) return;
            
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Joining...';
            }
            
            try {
                await addDoc(collection(db, 'inquiries'), {
                    name: 'Newsletter Subscriber',
                    email: email,
                    service: 'Newsletter',
                    message: 'User subscribed to the elite newsletter.',
                    createdAt: serverTimestamp(),
                    source: 'newsletter',
                    status: 'New'
                });
                
                form.innerHTML = `
                    <div style="color: var(--primary-color); font-weight: 600; padding: 10px; background: rgba(212, 175, 55, 0.1); border-radius: 8px; text-align: center;">
                        <i data-lucide="check-circle" style="width: 16px; height: 16px; margin-right: 5px;"></i> Welcome to the Elite.
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
            } catch (err) {
                console.error("Newsletter error:", err);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = 'Subscribe';
                }
                showToast('Digital pathways congested. Please try again.', 'error');
            }
        });
    });
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Parallax Hero Video
    const heroVideo = document.querySelector('.hero-bg-video');
    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            heroVideo.style.transform = `translateY(${scroll * 0.5}px)`;
        });
    }

    // Scroll Down from Hero
    const scrollDownBtn = document.getElementById('scrollDown');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            const statsSection = document.querySelector('.stats');
            if (statsSection) {
                statsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Parallax CTA Glow
    const ctaGlow = document.querySelector('.cta-bg-glow');
    if (ctaGlow) {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            const ctaTop = document.querySelector('.cta-section').offsetTop;
            if (scroll > ctaTop - window.innerHeight) {
                ctaGlow.style.transform = `translate(-50%, -50%) translateY(${(scroll - ctaTop) * 0.2}px)`;
            }
        });
    }

    // Admin Login Logic
    let isAdmin = false;

    // Marketplace Unsubscribe Logic
    let marketplaceUnsubscribe = null;
    let sliderUnsubscribe = null;

    const logoutAdmin = async () => {
        try {
            await logOut();
            isAdmin = false;
            updateAdminUI();
            // Stay on current page, UI will update
        } catch (error) {
            console.error("Error logging out", error);
        }
    };

    // Admin Authentication Logic (Firebase Auth)
    let isLoggingIn = false;

    const updateAdminUI = (userEmail = null) => {
        console.log("Updating Admin UI. isAdmin:", isAdmin, "User:", userEmail);
        const adminManageBtn = document.getElementById('adminManageBtn');
        const viewInquiriesBtn = document.getElementById('viewInquiriesBtn');
        const adminManageDesc = document.getElementById('adminManageDesc');
        const adminSection = document.getElementById('admin-dashboard');
        const adminNavLi = document.getElementById('adminNavLi');
        const manageBlogBtn = document.getElementById('manageBlogBtn');
        const manageClientsBtn = document.getElementById('manageClientsBtn');
        
        // Update navbar link
        if (adminNavLi) {
            adminNavLi.style.display = isAdmin ? 'block' : 'none';
        }

        if (manageBlogBtn) {
            manageBlogBtn.style.display = isAdmin ? 'inline-flex' : 'none';
        }

        if (manageClientsBtn) {
            manageClientsBtn.style.display = isAdmin ? 'inline-flex' : 'none';
        }

        // Update body class
        if (isAdmin) {
            document.body.classList.add('is-admin');
            if (adminSection) {
                adminSection.style.display = 'block';
                // Add a subtle "Logged in as" indicator if it doesn't exist
                let userIndicator = adminSection.querySelector('.admin-user-indicator');
                if (!userIndicator) {
                    userIndicator = document.createElement('div');
                    userIndicator.className = 'admin-user-indicator';
                    userIndicator.style.fontSize = '0.7rem';
                    userIndicator.style.opacity = '0.5';
                    userIndicator.style.marginTop = '10px';
                    adminSection.querySelector('.container').appendChild(userIndicator);
                }
                const currentUser = auth.currentUser;
                const isVerified = currentUser && currentUser.emailVerified;
                userIndicator.innerHTML = `Logged in as: ${userEmail || 'Administrator'} ${isVerified ? '<span style="color: #00ff00;">(Verified)</span>' : '<span style="color: #d4af37;">(Unverified / Development Mode)</span>'}`;
            }
        } else {
            document.body.classList.remove('is-admin');
            if (adminSection) adminSection.style.display = 'none';
        }

        // Update Portfolio Management Section
        if (adminManageBtn) {
            if (isAdmin) {
                adminManageBtn.innerHTML = '<i data-lucide="plus-circle" style="width: 16px; height: 16px; margin-right: 8px;"></i> Add New Website';
                adminManageBtn.style.display = 'inline-flex';
                adminManageBtn.onclick = (e) => {
                    e.preventDefault();
                    openAddWebsiteModal();
                };
                
                if (viewInquiriesBtn) {
                    viewInquiriesBtn.style.display = 'inline-flex';
                    viewInquiriesBtn.onclick = (e) => {
                        e.preventDefault();
                        if (inquiriesModal) {
                            inquiriesModal.style.display = 'block';
                            loadInquiries();
                        }
                    };
                }

                if (adminManageDesc) adminManageDesc.innerText = 'Welcome back, Administrator. Your session is active across all pages.';
                
                // Re-init icons if lucide is available
                if (window.lucide) window.lucide.createIcons();
            } else {
                adminManageBtn.style.display = 'none'; 
                if (viewInquiriesBtn) viewInquiriesBtn.style.display = 'none';
                if (adminManageDesc) adminManageDesc.innerText = 'Exclusive access for QuickSite administrators.';
            }
        }

        // Clear Marketplace Button (Admin Only)
        const clearBtn = document.getElementById('clearMarketplaceBtn');
        if (clearBtn) {
            clearBtn.style.display = isAdmin ? 'inline-flex' : 'none';
            clearBtn.onclick = (e) => {
                e.preventDefault();
                console.log("Clear Marketplace button clicked");
                showConfirm('Are you sure you want to clear ALL dynamic marketplace listings? This cannot be undone.', async () => {
                    try {
                        const q = query(collection(db, 'marketplaceItems'));
                        const snapshot = await getDocs(q);
                        const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
                        await Promise.all(deletePromises);
                        showToast('Marketplace cleared successfully.');
                    } catch (error) {
                        handleFirestoreError(error, OperationType.DELETE, 'marketplaceItems');
                    }
                });
            };
        }

        // Admin Logout Button (Dashboard)
        const logoutBtn = document.getElementById('adminLogoutBtn');
        if (logoutBtn) {
            logoutBtn.style.display = isAdmin ? 'inline-flex' : 'none';
        }

        // Update Footer Admin Link
        if (adminLoginLink) {
            if (isAdmin) {
                adminLoginLink.innerText = 'Admin Logout';
                adminLoginLink.style.display = 'inline-block';
                adminLoginLink.style.opacity = '1';
                adminLoginLink.onclick = async (e) => {
                    e.preventDefault();
                    await logoutAdmin();
                };
            } else {
                adminLoginLink.style.display = 'none';
            }
        }
    };

    // Hidden Admin Trigger: Click copyright 5 times
    let copyrightClicks = 0;
    const copyrightText = document.getElementById('copyrightText');
    if (copyrightText) {
        copyrightText.style.cursor = 'default';
        copyrightText.addEventListener('click', () => {
            copyrightClicks++;
            if (copyrightClicks === 5) {
                const adminModal = document.getElementById('adminModal');
                if (adminModal) adminModal.style.display = 'block';
                copyrightClicks = 0;
                showToast('Administrator Gateway Opened', 'success');
            }
            // Reset after 3 seconds of inactivity
            setTimeout(() => { copyrightClicks = 0; }, 3000);
        });
    }

    // Check admin status on load
    let lastUserUid = null;
    onAuthStateChanged(auth, (user) => {
        if (user && user.uid === lastUserUid) return; // Skip if same user
        lastUserUid = user ? user.uid : null;
        
        console.log("Auth state changed:", user ? `logged in (${user.email})` : "logged out");
        
        if (user) {
            const userEmail = user.email ? user.email.toLowerCase().trim() : '';
            console.log("Checking admin privileges for:", userEmail);
            
            // CRITICAL: Admin sessions are isolated to the specific browser/device where the user is logged in.
            // This check ensures that only authorized emails get admin UI privileges locally.
            const adminEmails = ['michaelmulili41@gmail.com', 'michael.mulili@quicksite.com', 'michael.michael@quicksite.com', 'quicksitekenya@gmail.com'];
            if (adminEmails.includes(userEmail)) {
                if (!user.emailVerified) {
                    console.info("Admin access: Operating in unverified developer mode.", userEmail);
                }
                
                console.log("Admin access locally recognized for:", userEmail);
                isAdmin = true;
                document.body.classList.add('is-admin');
                
                // Close modal if open
                const adminModal = document.getElementById('adminModal');
                if (adminModal) adminModal.style.display = 'none';
                
                isLoggingIn = false;

                // Check if we were redirected here to add a website
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('action') === 'addWebsite') {
                    const addModal = document.getElementById('addWebsiteModal');
                    if (addModal) addModal.style.display = 'block';
                    window.history.replaceState({}, document.title, window.location.pathname);
                }
                
                updateAdminUI(userEmail);
                initGlobalInquiriesListener();
            } else {
                console.warn("Access denied for non-admin user:", userEmail);
                isAdmin = false;
                document.body.classList.remove('is-admin');
                
                // Cleanup listeners
                if (globalInquiriesListener) {
                    globalInquiriesListener();
                    globalInquiriesListener = null;
                }

                // Only alert and logout if they explicitly tried to login
                const adminModal = document.getElementById('adminModal');
                if (adminModal && adminModal.style.display === 'block') {
                    showToast('Access Denied: Your account (' + userEmail + ') does not have administrator privileges.', 'error');
                    logoutAdmin();
                }
                updateAdminUI();
            }
        } else {
            isAdmin = false;
            document.body.classList.remove('is-admin');
            
            // Unsubscribe from inquiries if logged out
            if (inquiriesUnsubscribe) {
                inquiriesUnsubscribe();
                inquiriesUnsubscribe = null;
            }

            if (globalInquiriesListener) {
                globalInquiriesListener();
                globalInquiriesListener = null;
            }
            
            updateAdminUI();
        }
        
        // RE-RENDER Marketplace to show/hide delete buttons
        if (marketplaceGrid) loadMarketplaceItems();
        if (portfolioGrid) loadPortfolioItems();
        if (featuredProjectsContainer) loadFeaturedProjects();
        if (document.getElementById('liveSlider')) loadLiveSliderItems();
    });

    // Initial UI update
    updateAdminUI();

    if (adminModal && closeAdminModal) {
        closeAdminModal.onclick = () => adminModal.style.display = 'none';
    }

    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = adminEmailInput.value;
            if (!email) {
                showToast('Please enter your email address first.', 'info');
                return;
            }
            try {
                await resetPassword(email);
                showToast('Password reset link sent to your email. Check your inbox.', 'success');
            } catch (err) {
                console.error("Reset Password Error:", err);
                showToast('Failed to send reset link: ' + err.message, 'error');
            }
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = adminEmailInput.value;
            const password = adminPasswordInput.value;
            
            if (!email || !password) {
                showToast('Please enter both email and password.', 'error');
                return;
            }

            isLoggingIn = true;
            const loadingOverlay = document.getElementById('loadingOverlay');
            if (loadingOverlay) loadingOverlay.style.display = 'flex';
            try {
                await signInWithEmail(email, password);
                // The onAuthStateChanged listener will handle the redirection
                if (loadingOverlay) loadingOverlay.style.display = 'none';
                if (adminModal) adminModal.style.display = 'none';
            } catch (err) {
                // If we are actually logged in (detected by onAuthStateChanged), ignore the error
                if (isAdmin) {
                    console.log("Manual login failed but user is authenticated. Ignoring error.");
                    if (loadingOverlay) loadingOverlay.style.display = 'none';
                    if (adminModal) adminModal.style.display = 'none';
                    return;
                }

                if (err.code === 'auth/invalid-credential') {
                    console.log("Invalid credential, attempting auto-signup...");
                    try {
                        await signUpWithEmail(email, password);
                        showToast('Account created and signed in successfully!', 'success');
                        if (loadingOverlay) loadingOverlay.style.display = 'none';
                        if (adminModal) adminModal.style.display = 'none';
                        return; // Success!
                    } catch (signupErr) {
                        // Account already exists but password was wrong, so signup fails.
                        // We do not need to log this as an error.
                        isLoggingIn = false;
                        if (loadingOverlay) loadingOverlay.style.display = 'none';
                        
                        if (signupErr.code === 'auth/email-already-in-use') {
                            showToast('Sign In failed: Incorrect password for existing account. Please click "Forgot Password" to reset it to your desired credentials.', 'error');
                        } else {
                            showToast('Sign In failed: Invalid email or password.', 'error');
                        }
                        return;
                    }
                }

                isLoggingIn = false;
                if (loadingOverlay) loadingOverlay.style.display = 'none';
                
                console.error("Sign In error:", err);
                if (err.code === 'auth/network-request-failed') {
                    showToast('SECURITY BLOCKED: Your Ad-blocker or Brave Shields is preventing login. See the instructions below.', 'error');
                    console.warn("AD-BLOCKER DETECTED: Firebase Auth requests are being blocked. This is common with uBlock Origin or Brave Shields.");
                    const networkNote = document.getElementById('authNetworkNote');
                    if (networkNote) {
                        networkNote.style.display = 'block';
                        networkNote.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    alert("⚠️ FIREBASE BLOCKED BY BROWSER ⚠️\n\nYou are inside an iframe and your browser's privacy shields are blocking the login.\n\nWe will now explicitly break out of the iframe and auto-open the application in a new tab for you to log in securely. Please hit Sign In on the new tab.");
                    window.open(window.location.href, '_blank');
                } else {
                    showToast('Sign In failed: ' + err.message, 'error');
                }
            }
        });
    }

    // Admin Logout Button (Dashboard)
    if (adminLogoutBtn) {
        adminLogoutBtn.onclick = async (e) => {
            e.preventDefault();
            console.log("Admin Logout button clicked");
            await logoutAdmin();
        };
    }

    const testConnectionBtn = document.getElementById('testConnectionBtn');
    if (testConnectionBtn) {
        testConnectionBtn.onclick = async () => {
            if (!isAdmin) return;
            showToast('Initiating test flow...', 'info');
            try {
                const testData = {
                    name: "Admin Test",
                    email: "quicksitekenya@gmail.com",
                    service: "System Test",
                    message: "This is a test inquiry to verify the notification and dashboard flow."
                };
                
                const response = await fetch('/api/consultation', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(testData)
                });
                
                const result = await response.json();
                if (result.success) {
                    showToast('Test flow successful! Check your email and dashboard.', 'success');
                    loadInquiries();
                } else {
                    showToast('Test flow failed: ' + result.error, 'error');
                }
            } catch (err) {
                showToast('Test flow error: ' + err.message, 'error');
            }
        };
    }

    // Add Website Modal Logic
    if (addWebsiteModal && closeAddModal) {
        closeAddModal.onclick = () => addWebsiteModal.style.display = 'none';
        window.addEventListener('click', (e) => {
            if (e.target === addWebsiteModal) addWebsiteModal.style.display = 'none';
        });
    }

    if (addWebsiteForm) {
        addWebsiteForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!isAdmin) {
                showToast('Unauthorized: Only administrators can list websites.', 'error');
                return;
            }
            
            const getVal = (id) => {
                const el = document.getElementById(id);
                return el ? el.value : '';
            };
            const setVal = (id, val) => {
                const el = document.getElementById(id);
                if (el) el.value = val !== undefined && val !== null ? val : '';
            };

            const name = getVal('siteName');
            const category = getVal('siteCategory');
            const price = getVal('sitePrice');
            const desc = getVal('siteDesc');
            const link = getVal('siteLink');
            const img = getVal('siteImage');
            const editId = getVal('editWebsiteId');

            if (!category) {
                showToast('Please select a category.', 'error');
                return;
            }

            const submitBtn = addWebsiteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerText : 'Submit';
            if (submitBtn) {
                submitBtn.innerText = editId ? 'Updating...' : 'Publishing...';
                submitBtn.disabled = true;
            }

            try {
                if (editId) {
                    await updateDoc(doc(db, 'marketplaceItems', editId), {
                        name,
                        category,
                        price,
                        desc,
                        img,
                        link
                    });
                    showToast('Project updated successfully.', 'success');
                } else {
                    await addDoc(collection(db, 'marketplaceItems'), {
                        name,
                        category,
                        price,
                        desc,
                        img,
                        link,
                        createdAt: serverTimestamp()
                    });
                    showToast('Project published successfully.', 'success');
                }

                addWebsiteForm.reset();
                setVal('editWebsiteId', '');
                // Reset category selector
                const options = document.querySelectorAll('.category-option');
                options.forEach(opt => opt.classList.remove('active'));
                setVal('siteCategory', '');

                if (addWebsiteModal) addWebsiteModal.style.display = 'none';
                
            } catch (error) {
                handleFirestoreError(error, OperationType.WRITE, 'marketplaceItems');
            } finally {
                if (submitBtn) {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }
            }
        });
    }

    // Live Website Slider Logic
    let sliderInterval;
    const initSliderLogic = () => {
        const sliderTrack = document.getElementById('liveSlider');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');
        
        if (sliderTrack && prevBtn && nextBtn) {
            if (sliderInterval) clearInterval(sliderInterval);
            
            let currentSlide = 0;
            const slides = sliderTrack.querySelectorAll('.slide');
            const totalSlides = slides.length;

            if (totalSlides > 0) {
                const updateSlider = () => {
                    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
                };

                nextBtn.onclick = () => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateSlider();
                };

                prevBtn.onclick = () => {
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                    updateSlider();
                };

                sliderInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateSlider();
                }, 5000);
            }
        }
    };

    // Social Media Ads Image Slider Logic
    let adsSliderInterval;
    const initAdsSliderLogic = () => {
        const sliderTrack = document.getElementById('adsImageSlider');
        const prevBtn = document.getElementById('adsPrevSlide');
        const nextBtn = document.getElementById('adsNextSlide');
        
        if (sliderTrack && prevBtn && nextBtn) {
            if (adsSliderInterval) clearInterval(adsSliderInterval);
            
            let currentSlide = 0;
            const slides = sliderTrack.querySelectorAll('.slide');
            const totalSlides = slides.length;

            if (totalSlides > 0) {
                const updateSlider = () => {
                    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
                };

                nextBtn.onclick = (e) => {
                    e.preventDefault();
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateSlider();
                };

                prevBtn.onclick = (e) => {
                    e.preventDefault();
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                    updateSlider();
                };

                adsSliderInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateSlider();
                }, 5000);
            }
        }
    };

    const loadLiveSliderItems = () => {
        const sliderTrack = document.getElementById('liveSlider');
        if (!sliderTrack) return;

        // Unsubscribe from previous listener if it exists
        if (sliderUnsubscribe) {
            sliderUnsubscribe();
            sliderUnsubscribe = null;
        }

        const q = query(collection(db, 'marketplaceItems'), orderBy('createdAt', 'desc'));
        sliderUnsubscribe = onSnapshot(q, (snapshot) => {
            // Remove existing dynamic slides and the placeholder message
            const dynamicSlides = sliderTrack.querySelectorAll('.dynamic-slide');
            dynamicSlides.forEach(slide => slide.remove());
            
            const noItemsMsg = sliderTrack.querySelector('.no-items-message');
            if (noItemsMsg && !snapshot.empty) {
                noItemsMsg.style.display = 'none';
            } else if (noItemsMsg && snapshot.empty) {
                noItemsMsg.style.display = 'block';
            }

            snapshot.forEach((docSnap) => {
                const item = docSnap.data();
                if (!item) return;

                const itemName = item.name || 'Unnamed Project';
                const itemDesc = item.desc || 'Premium digital asset.';
                
                // Sanitize image URL to prevent mixed content errors and local IP blocks
                const safeImgUrl = getSafeImageUrl(item.img, itemName, 1200, 600);

                const newSlide = document.createElement('div');
                newSlide.className = 'slide dynamic-slide';
                newSlide.innerHTML = `
                    <div class="slide-content">
                        <img src="${safeImgUrl}" alt="${itemName}" onerror="this.src='https://placehold.co/800x500/1a1a1a/d4af37?text=Preview'" referrerPolicy="no-referrer">
                        <div class="slide-info">
                            <span class="slide-tag">Marketplace</span>
                            <h3>${itemName}</h3>
                            <p>${itemDesc}</p>
                            <a href="portfolio.html?site=${encodeURIComponent(itemName)}" class="btn btn-primary btn-sm">Visit Site</a>
                        </div>
                    </div>
                `;
                
                // Insert at the beginning of the slider
                sliderTrack.insertBefore(newSlide, sliderTrack.firstChild);
            });

            // Re-initialize slider logic
            initSliderLogic();
        });
    };

    // Initial load will be handled by onAuthStateChanged
    // loadLiveSliderItems();
    initSliderLogic();
    initAdsSliderLogic();

    // CRITICAL: Firestore Error Handling Spec
    const OperationType = {
        CREATE: 'create',
        UPDATE: 'update',
        DELETE: 'delete',
        LIST: 'list',
        GET: 'get',
        WRITE: 'write',
    };

    const handleFirestoreError = (error, operationType, path) => {
        const errInfo = {
            error: error instanceof Error ? error.message : String(error),
            authInfo: {
                userId: auth.currentUser?.uid,
                email: auth.currentUser?.email,
                emailVerified: auth.currentUser?.emailVerified,
                isAnonymous: auth.currentUser?.isAnonymous,
                tenantId: auth.currentUser?.tenantId,
                providerInfo: auth.currentUser?.providerData.map(provider => ({
                    providerId: provider.providerId,
                    displayName: provider.displayName,
                    email: provider.email,
                    photoUrl: provider.photoURL
                })) || []
            },
            operationType,
            path
        };
        console.error('Firestore Error: ', JSON.stringify(errInfo));
        
        // Check for connection errors specifically
        if (errInfo.error.includes('Could not reach Cloud Firestore backend') || errInfo.error.includes('the client is offline')) {
            const errorMsg = document.createElement('div');
            errorMsg.className = 'container firestore-error-msg';
            errorMsg.style.color = '#ff4444';
            errorMsg.style.padding = '20px';
            errorMsg.style.textAlign = 'center';
            errorMsg.innerHTML = `
                <p><strong>Database Connection Error:</strong> We could not reach the marketplace database.</p>
                <p style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 15px;">This is often caused by an Ad Blocker (like uBlock Origin) or <strong>Brave Shields</strong> blocking the connection. Please try disabling them or refreshing the page.</p>
                <button class="btn btn-secondary btn-sm" onclick="location.reload()">Retry Connection</button>
            `;
            if (marketplaceGrid) {
                // Remove existing error messages first
                const existing = document.querySelectorAll('.firestore-error-msg');
                existing.forEach(e => e.remove());
                marketplaceGrid.parentElement.insertBefore(errorMsg, marketplaceGrid);
            }
        }
        
        throw new Error(JSON.stringify(errInfo));
    };

    // Load persisted marketplace items
    const loadMarketplaceItems = () => {
        if (!marketplaceGrid) return;
        
        if (marketplaceUnsubscribe) {
            marketplaceUnsubscribe();
            marketplaceUnsubscribe = null;
        }
        
        const q = query(collection(db, 'marketplaceItems'), orderBy('createdAt', 'desc'));
        marketplaceUnsubscribe = onSnapshot(q, (snapshot) => {
            marketplaceGrid.innerHTML = '';
            
            if (snapshot.empty) {
                marketplaceGrid.innerHTML = `
                    <div class="no-items-message" style="text-align: center; padding: 40px; opacity: 0.6;">
                        <p>The marketplace is currently being updated with elite digital assets. Stay tuned.</p>
                    </div>
                `;
                return;
            }

            // Group items by category
            const groupedItems = {};
            snapshot.forEach((docSnap) => {
                const item = docSnap.data();
                const category = item.category || 'Other Digital Assets';
                if (!groupedItems[category]) {
                    groupedItems[category] = [];
                }
                groupedItems[category].push({ id: docSnap.id, ...item });
            });

            // Define the order of categories
            const categoryOrder = [
                "E-Commerce Platforms",
                "E-Learning Systems",
                "Social Media Websites",
                "Business Landing Pages",
                "Corporate & Business Sites",
                "Portfolio & Creative Sites",
                "Custom Web Applications",
                "Other Digital Assets"
            ];

            // Render sections
            categoryOrder.forEach(category => {
                if (groupedItems[category]) {
                    renderMarketplaceCategory(category, groupedItems[category], marketplaceGrid);
                    delete groupedItems[category];
                }
            });

            // Render any remaining categories
            Object.keys(groupedItems).forEach(category => {
                renderMarketplaceCategory(category, groupedItems[category], marketplaceGrid);
            });
            
            if (window.lucide) window.lucide.createIcons();
        }, (error) => {
            handleFirestoreError(error, OperationType.LIST, 'marketplaceItems');
        });
    };

    const getFormattedUsdPrice = (itemName = '', itemPrice = '') => {
        const nameLower = itemName.toLowerCase();
        
        if (nameLower.includes('skybridge') || nameLower.includes('travel')) {
            return '$425 USD';
        }
        if (nameLower.includes('elitefit') || nameLower.includes('gym')) {
            return '$270 USD';
        }
        if (nameLower.includes('penthouse') || nameLower.includes('nairobi')) {
            return '$350 USD';
        }

        if (!itemPrice) return '$299 USD';
        
        const strPrice = String(itemPrice).trim();
        if (strPrice.includes('$')) return strPrice.includes('USD') ? strPrice : `${strPrice} USD`;
        
        const cleanNum = parseFloat(strPrice.replace(/[^0-9.]/g, ''));
        if (!isNaN(cleanNum)) {
            if (cleanNum === 55000) return '$425 USD';
            if (cleanNum === 35000) return '$270 USD';
            if (cleanNum === 45000) return '$350 USD';
            if (cleanNum > 1000) return `$${Math.round(cleanNum / 130)} USD`;
            return `$${cleanNum} USD`;
        }
        
        return strPrice;
    };

    const renderMarketplaceCategory = (category, items, container) => {
        const section = document.createElement('div');
        section.className = 'marketplace-category-section reveal';
        section.style.marginBottom = '60px';
        
        section.innerHTML = `
            <h3 class="category-title" style="font-size: 1.5rem; margin-bottom: 30px; border-left: 4px solid var(--primary-color); padding-left: 15px; color: white; font-weight: 600;">${category}</h3>
            <div class="marketplace-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px;"></div>
        `;
        
        const grid = section.querySelector('.marketplace-grid');
        
        items.forEach(item => {
            const itemName = item.name || 'Unnamed Project';
            const itemPrice = item.price || '';
            const itemDesc = item.desc || 'No description available.';
            const itemCategory = item.category || 'Other Digital Assets';
            const itemLink = item.link || '#';
            const safeImgUrl = getSafeImageUrl(item.img, itemName);
            
            const newItem = document.createElement('div');
            newItem.className = 'marketplace-item dynamic-item';
            const displayPriceUSD = getFormattedUsdPrice(itemName, itemPrice);
            
            const deleteBtnHtml = isAdmin ? `
                <button class="delete-item-btn admin-only block" data-id="${item.id}" title="Delete Listing" style="position: absolute; top: 10px; right: 10px; background: rgba(255,0,0,0.7); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;">
                    <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                </button>
                <button class="edit-item-btn admin-only block" data-id="${item.id}" title="Edit Listing" style="position: absolute; top: 10px; right: 50px; background: rgba(0,0,0,0.7); color: white; border: 1px solid var(--primary-color); border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;">
                    <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i>
                </button>
            ` : '';

            newItem.innerHTML = `
                <div class="item-badge">For Sale</div>
                ${deleteBtnHtml}
                <div style="position: relative;">
                    <img src="${safeImgUrl}" alt="${itemName}" onerror="this.src='https://placehold.co/800x500/1a1a1a/d4af37?text=Preview'" referrerPolicy="no-referrer">
                    <div class="floating-attention-card" style="bottom: 10px; right: 10px; padding: 6px 12px;">
                        <div class="floating-icon-dot" style="width:28px; height:28px; font-size:0.8rem;">🎁</div>
                        <div class="floating-card-text">
                            <span class="floating-card-title" style="font-size:0.75rem;">6% OFF COUPON</span>
                            <span class="floating-card-sub" style="font-size:0.7rem;">Code: <strong>SAVE6</strong></span>
                        </div>
                    </div>
                </div>
                <div class="item-content">
                    <div class="item-header">
                        <div>
                            <h3 style="margin-bottom: 5px;">${itemName}</h3>
                            <span style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; letter-spacing: 1px;">${itemCategory}</span>
                        </div>
                        <span class="price-tag">${displayPriceUSD}</span>
                    </div>
                    <p>${itemDesc}</p>
                    <div class="item-footer">
                        <a href="contact.html?interest=${encodeURIComponent(itemName)}" class="btn btn-secondary btn-sm">Inquire Now</a>
                        <a href="${itemLink}" class="btn btn-primary btn-sm" target="_blank">Claim (${displayPriceUSD})</a>
                    </div>
                </div>
            `;

            if (isAdmin) {
                const delBtn = newItem.querySelector('.delete-item-btn');
                if (delBtn) {
                    delBtn.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const docId = delBtn.getAttribute('data-id');
                        showConfirm(`Are you sure you want to delete "${itemName}"?`, async () => {
                            try {
                                await deleteDoc(doc(db, 'marketplaceItems', docId));
                                showToast('Item deleted successfully.');
                            } catch (error) {
                                handleFirestoreError(error, OperationType.DELETE, 'marketplaceItems/' + docId);
                            }
                        });
                    };
                }

                const editBtn = newItem.querySelector('.edit-item-btn');
                if (editBtn) {
                    editBtn.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openAddWebsiteModal(item.category, item);
                    };
                }
            }

            grid.appendChild(newItem);
        });
        
        container.appendChild(section);
    };

    // Curated Masterpieces Collection (Curated fallback & baseline items)
    const DEFAULT_MASTERPIECES = [
        {
            id: 'masterpiece-1',
            name: 'Skybridge Travel & Tours Portal',
            category: 'Corporate & Business Sites',
            price: 425,
            desc: 'Automated safari reservation system featuring real-time itinerary booking, multi-currency pricing, M-Pesa paybill integration, and automated WhatsApp trip confirmation.',
            img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/services.html',
            techTags: ['React', 'M-Pesa API', 'SEO Optimized', '48h Delivery']
        },
        {
            id: 'masterpiece-2',
            name: 'Apex Luxury E-Commerce Platform',
            category: 'E-Commerce Platforms',
            price: 550,
            desc: 'Turnkey high-converting online merchant store with automated cart, product variant swatches, coupon code support, and express WhatsApp order triggers.',
            img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/packages.html',
            techTags: ['E-Commerce', 'Paystack / M-Pesa', 'Analytics', 'Mobile First']
        },
        {
            id: 'masterpiece-3',
            name: 'EliteFit Gym & Fitness Hub',
            category: 'Business Landing Pages',
            price: 320,
            desc: 'High-energy lead generation funnel featuring membership tier comparisons, trainer booking calendar, and instant WhatsApp trial triggers.',
            img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/contact.html',
            techTags: ['Lead Funnel', 'WhatsApp Direct', 'Schedule Manager']
        },
        {
            id: 'masterpiece-4',
            name: 'Nairobi Penthouse Real Estate',
            category: 'Corporate & Business Sites',
            price: 680,
            desc: 'Architectural property portal with 3D virtual walkthrough galleries, interactive floor plans, neighborhood guides, and VIP buyer schedule booking.',
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/services.html',
            techTags: ['Virtual Gallery', 'VIP Client Portal', 'Map Integration']
        },
        {
            id: 'masterpiece-5',
            name: 'EduLearn Academy LMS',
            category: 'E-Learning Systems',
            price: 490,
            desc: 'Interactive online learning portal with student progress tracking, video module hosting, automated quizzes, and digital certificates.',
            img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/services.html',
            techTags: ['LMS Engine', 'Certificate Gen', 'Video Stream']
        },
        {
            id: 'masterpiece-6',
            name: 'SocialConnect Creator Network',
            category: 'Social Media Websites',
            price: 580,
            desc: 'Modern community hub with user profile cards, live discussion feeds, direct chat messaging, and creator tipping integration.',
            img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/blog.html',
            techTags: ['Community Feed', 'Live Messaging', 'Firebase DB']
        },
        {
            id: 'masterpiece-7',
            name: 'Savannah Safaris Expedition',
            category: 'Portfolio & Creative Sites',
            price: 380,
            desc: 'Immersive photography-focused portfolio showcasing game park itineraries, client reviews, and custom tour booking forms.',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/about.html',
            techTags: ['High-Res Gallery', 'Booking Form', 'SEO Boost']
        },
        {
            id: 'masterpiece-8',
            name: 'FinTech Kenya Merchant Portal',
            category: 'Custom Web Applications',
            price: 750,
            desc: 'Enterprise financial dashboard for tracking merchant disbursements, transaction analytics, and automated PDF statement exports.',
            img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/client-portal.html',
            techTags: ['Analytics UI', 'PDF Exporter', 'Bank Grade Security']
        }
    ];

    let portfolioUnsubscribe = null;
    let allMasterpiecesList = [];
    let activePortfolioCategory = 'ALL';
    let portfolioSearchQuery = '';

    const loadPortfolioItems = () => {
        if (!portfolioGrid) return;
        
        if (portfolioUnsubscribe) {
            portfolioUnsubscribe();
            portfolioUnsubscribe = null;
        }
        
        const q = query(collection(db, 'marketplaceItems'), orderBy('createdAt', 'desc'));
        portfolioUnsubscribe = onSnapshot(q, (snapshot) => {
            const dbItems = [];
            snapshot.forEach((docSnap) => {
                dbItems.push({ id: docSnap.id, ...docSnap.data() });
            });

            // Combine DB items with baseline default masterpieces (avoid duplicate names)
            const dbNames = new Set(dbItems.map(i => (i.name || '').toLowerCase().trim()));
            const filteredDefaults = DEFAULT_MASTERPIECES.filter(d => !dbNames.has(d.name.toLowerCase().trim()));
            
            allMasterpiecesList = [...dbItems, ...filteredDefaults];

            setupPortfolioFiltersAndSearch();
            renderFilteredPortfolio();
        }, (error) => {
            handleFirestoreError(error, OperationType.LIST, 'marketplaceItems');
            allMasterpiecesList = [...DEFAULT_MASTERPIECES];
            setupPortfolioFiltersAndSearch();
            renderFilteredPortfolio();
        });
    };

    const setupPortfolioFiltersAndSearch = () => {
        const searchInput = document.getElementById('portfolioSearchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');

        if (searchInput && !searchInput.dataset.listenerAttached) {
            searchInput.dataset.listenerAttached = 'true';
            searchInput.addEventListener('input', (e) => {
                portfolioSearchQuery = e.target.value.toLowerCase().trim();
                renderFilteredPortfolio();
            });
        }

        filterBtns.forEach(btn => {
            if (!btn.dataset.listenerAttached) {
                btn.dataset.listenerAttached = 'true';
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    activePortfolioCategory = btn.getAttribute('data-category') || 'ALL';
                    renderFilteredPortfolio();
                });
            }
        });
    };

    const renderFilteredPortfolio = () => {
        if (!portfolioGrid) return;

        portfolioGrid.innerHTML = '';

        // Filter items
        let filtered = allMasterpiecesList.filter(item => {
            const matchesCat = activePortfolioCategory === 'ALL' || item.category === activePortfolioCategory;
            const textToSearch = `${item.name || ''} ${item.category || ''} ${item.desc || ''} ${(item.techTags || []).join(' ')}`.toLowerCase();
            const matchesSearch = !portfolioSearchQuery || textToSearch.includes(portfolioSearchQuery);
            return matchesCat && matchesSearch;
        });

        const countBadge = document.getElementById('portfolioMatchCount');
        if (countBadge) {
            countBadge.innerHTML = `<i data-lucide="layers" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> Showing <strong>${filtered.length}</strong> Masterpieces`;
        }

        if (filtered.length === 0) {
            portfolioGrid.innerHTML = `
                <div class="no-items-message" style="text-align: center; padding: 60px 20px; background: rgba(18,18,26,0.6); border: 1px dashed var(--glass-border); border-radius: 20px;">
                    <i data-lucide="search-x" style="width: 48px; height: 48px; color: #d4af37; margin-bottom: 15px;"></i>
                    <h3 style="color: white; font-size: 1.3rem; margin-bottom: 8px;">No Matching Masterpieces Found</h3>
                    <p style="color: #aaa; font-size: 0.9rem;">Try adjusting your search query or switching to 'All Masterpieces'.</p>
                </div>
            `;
            if (window.lucide) lucide.createIcons();
            return;
        }

        // Group filtered items by category if ALL is selected, or render grid directly if specific category or search
        if (activePortfolioCategory === 'ALL' && !portfolioSearchQuery) {
            const grouped = {};
            filtered.forEach(item => {
                const cat = item.category || 'Other Digital Assets';
                if (!grouped[cat]) grouped[cat] = [];
                grouped[cat].push(item);
            });

            const categoryOrder = [
                "E-Commerce Platforms",
                "Corporate & Business Sites",
                "Business Landing Pages",
                "Portfolio & Creative Sites",
                "Custom Web Applications",
                "E-Learning Systems",
                "Social Media Websites",
                "Other Digital Assets"
            ];

            categoryOrder.forEach(category => {
                if (grouped[category]) {
                    renderPortfolioCategoryGroup(category, grouped[category], portfolioGrid);
                    delete grouped[category];
                }
            });

            Object.keys(grouped).forEach(category => {
                renderPortfolioCategoryGroup(category, grouped[category], portfolioGrid);
            });
        } else {
            const section = document.createElement('div');
            section.className = 'portfolio-category-section reveal';
            section.style.marginBottom = '60px';
            
            section.innerHTML = `
                <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 28px;"></div>
            `;
            
            const grid = section.querySelector('.portfolio-grid');
            filtered.forEach(item => {
                grid.appendChild(createElitePortfolioCard(item));
            });
            
            portfolioGrid.appendChild(section);
        }

        if (window.lucide) lucide.createIcons();
    };

    const renderPortfolioCategoryGroup = (category, items, container) => {
        const section = document.createElement('div');
        section.className = 'portfolio-category-section reveal';
        section.style.marginBottom = '60px';
        
        section.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <h3 class="category-title" style="font-size: 1.4rem; border-left: 4px solid var(--primary-color); padding-left: 15px; color: white; font-weight: 700; display: flex; align-items: center; gap: 10px;">
                    ${category}
                </h3>
                <span style="font-size: 0.8rem; color: #d4af37; background: rgba(212,175,55,0.12); padding: 4px 12px; border-radius: 12px; border: 1px solid rgba(212,175,55,0.3); font-weight: 700;">${items.length} Asset${items.length > 1 ? 's' : ''}</span>
            </div>
            <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 28px;"></div>
        `;
        
        const grid = section.querySelector('.portfolio-grid');
        items.forEach(item => {
            grid.appendChild(createElitePortfolioCard(item));
        });
        
        container.appendChild(section);
    };

    const createElitePortfolioCard = (item) => {
        const itemName = item.name || 'Unnamed Project';
        const itemCategory = item.category || 'Other Digital Assets';
        const itemDesc = item.desc || 'High-performance bespoke web asset engineered for elite conversions.';
        const itemLink = item.link || '#';
        const safeImgUrl = getSafeImageUrl(item.img, itemName, 800, 500);
        const itemPriceVal = getFormattedUsdPrice(itemName, item.price);
        const tags = item.techTags || ['React', 'M-Pesa API', '48h Live', 'SEO Ready'];

        const card = document.createElement('div');
        card.className = 'elite-portfolio-card dynamic-item';

        const editBtnHtml = isAdmin ? `
            <button class="edit-portfolio-btn" data-id="${item.id}" title="Edit Website Details" style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.85); color: #ffd700; border: 1px solid #d4af37; border-radius: 50%; width: 36px; height: 36px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
            </button>
        ` : '';

        card.innerHTML = `
            <div class="elite-card-img-wrapper">
                <span class="elite-card-price-badge">${itemPriceVal}</span>
                ${editBtnHtml}
                <img src="${safeImgUrl}" alt="${itemName}" loading="lazy" referrerPolicy="no-referrer">
                
                <div class="floating-attention-card" style="bottom: 10px; right: 10px; padding: 6px 12px; z-index: 4;">
                    <div class="floating-icon-dot" style="width:26px; height:26px; font-size:0.75rem;">🎁</div>
                    <div class="floating-card-text">
                        <span class="floating-card-title" style="font-size:0.7rem;">6% OFF COUPON</span>
                        <span class="floating-card-sub" style="font-size:0.65rem;">Code: <strong>SAVE6</strong></span>
                    </div>
                </div>
            </div>

            <div class="elite-card-body">
                <div class="elite-card-category">
                    <i data-lucide="check-circle-2" style="width: 14px; height: 14px; color: #25d366;"></i> ${itemCategory}
                </div>
                <h3 class="elite-card-title">${itemName}</h3>
                <p class="elite-card-desc">${itemDesc}</p>

                <div class="elite-tech-tags">
                    ${tags.map(tag => `<span class="elite-tech-pill">⚡ ${tag}</span>`).join('')}
                </div>

                <div class="elite-card-actions">
                    <a href="${itemLink}" class="btn btn-primary btn-sm" target="_blank" style="flex: 1; justify-content: center; display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; padding: 8px 12px;">
                        <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> Live Demo
                    </a>
                    <button class="btn btn-secondary btn-sm quick-view-btn" style="flex: 1; justify-content: center; display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; padding: 8px 12px; background: rgba(255,255,255,0.06); border-color: rgba(212,175,55,0.4); color: #ffd700;">
                        <i data-lucide="eye" style="width: 14px; height: 14px;"></i> Specs
                    </button>
                </div>
            </div>
        `;

        // Edit button handler
        if (isAdmin) {
            const editBtn = card.querySelector('.edit-portfolio-btn');
            if (editBtn) {
                editBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openAddWebsiteModal(item.category, item);
                };
            }
        }

        // Quick View button handler
        const quickViewBtn = card.querySelector('.quick-view-btn');
        if (quickViewBtn) {
            quickViewBtn.onclick = (e) => {
                e.preventDefault();
                openPortfolioQuickViewModal(item);
            };
        }

        return card;
    };

    // Quick View Modal Opener
    const openPortfolioQuickViewModal = (item) => {
        const modal = document.getElementById('portfolioQuickViewModal');
        const content = document.getElementById('quickViewContent');
        const closeBtn = document.getElementById('closeQuickViewModal');

        if (!modal || !content) return;

        const itemName = item.name || 'Unnamed Project';
        const itemCategory = item.category || 'Other Digital Assets';
        const itemDesc = item.desc || 'High-performance bespoke web asset engineered for elite conversions.';
        const itemLink = item.link || '#';
        const safeImgUrl = getSafeImageUrl(item.img, itemName, 1200, 800);
        const itemPriceVal = getFormattedUsdPrice(itemName, item.price);
        const tags = item.techTags || ['React 18', 'M-Pesa Express API', '100% Responsive', 'SEO Optimization', 'WhatsApp Trigger', '48h Turnaround'];

        content.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; align-items: center;">
                <div style="position: relative; border-radius: 16px; overflow: hidden; border: 1px solid rgba(212,175,55,0.5); box-shadow: 0 15px 35px rgba(0,0,0,0.6);">
                    <img src="${safeImgUrl}" alt="${itemName}" style="width: 100%; height: auto; display: block;" referrerPolicy="no-referrer">
                    <span style="position: absolute; top: 15px; left: 15px; background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%); color: #000; font-weight: 800; padding: 6px 16px; border-radius: 20px; font-size: 0.9rem;">
                        ${itemPriceVal}
                    </span>
                </div>

                <div>
                    <span style="font-size: 0.75rem; color: #d4af37; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                        <i data-lucide="award" style="width: 14px; height: 14px;"></i> ${itemCategory}
                    </span>
                    <h2 style="font-size: 1.8rem; font-weight: 800; color: white; margin-bottom: 12px; line-height: 1.2;">${itemName}</h2>
                    <p style="color: #ccc; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">${itemDesc}</p>

                    <div style="margin-bottom: 25px;">
                        <h4 style="font-size: 0.85rem; color: #ffd700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; font-weight: 700;">Key Tech Specs & Features:</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            ${tags.map(t => `<span style="background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.3); color: #ffd700; font-size: 0.8rem; padding: 6px 12px; border-radius: 12px; font-weight: 700;">✓ ${t}</span>`).join('')}
                        </div>
                    </div>

                    <div style="background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.4); border-radius: 14px; padding: 12px 18px; margin-bottom: 25px; display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: #25d366; font-size: 0.85rem; font-weight: 800; display: flex; align-items: center; gap: 6px;">
                            <i data-lucide="tag"></i> Exclusive Offer: 6% OFF Active
                        </span>
                        <code style="background: rgba(0,0,0,0.5); color: #ffd700; padding: 3px 10px; border-radius: 6px; font-weight: 800;">SAVE6</code>
                    </div>

                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <a href="${itemLink}" target="_blank" class="btn btn-primary" style="flex: 1; justify-content: center; display: inline-flex; align-items: center; gap: 8px;">
                            <i data-lucide="external-link"></i> Launch Live Demo
                        </a>
                        <a href="contact.html?coupon=SAVE6&project=${encodeURIComponent(itemName)}" class="btn btn-secondary" style="flex: 1; justify-content: center; display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%); color: #000; font-weight: 800; border: none;">
                            <i data-lucide="shopping-cart"></i> Claim This Build
                        </a>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        if (window.lucide) lucide.createIcons();

        if (closeBtn) {
            closeBtn.onclick = () => {
                modal.style.display = 'none';
            };
        }

        window.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    };

    // Load Featured Projects (Home page style)
    let featuredUnsubscribe = null;
    const loadFeaturedProjects = () => {
        if (!featuredProjectsContainer) return;
        
        if (featuredUnsubscribe) {
            featuredUnsubscribe();
            featuredUnsubscribe = null;
        }
        
        const q = query(collection(db, 'marketplaceItems'), orderBy('createdAt', 'desc'), limit(3));
        featuredUnsubscribe = onSnapshot(q, (snapshot) => {
            const dynamicItems = featuredProjectsContainer.querySelectorAll('.dynamic-item');
            dynamicItems.forEach(item => item.remove());
            
            const noItemsMsg = featuredProjectsContainer.querySelector('.static-fallback');
            if (noItemsMsg && !snapshot.empty) {
                noItemsMsg.style.display = 'none';
            } else if (noItemsMsg && snapshot.empty) {
                noItemsMsg.style.display = 'block';
            }

            snapshot.forEach((docSnap, index) => {
                const item = docSnap.data();
                if (!item) return;
                
                const itemName = item.name || 'Unnamed Project';
                const itemCategory = item.category || 'Other Digital Assets';
                const itemDesc = item.desc || 'No description available.';
                const itemLink = item.link || '#';
                const safeImgUrl = getSafeImageUrl(item.img, itemName, 1200, 800);
                
                const isReverse = index % 2 !== 0;
                const newItem = document.createElement('div');
                newItem.className = `featured-grid dynamic-item reveal ${isReverse ? 'reverse reveal-right' : 'reveal-left'}`;
                newItem.style.marginBottom = '60px';
                
                const editBtnHtml = isAdmin ? `
                    <button class="edit-featured-btn" data-id="${docSnap.id}" title="Edit Featured Project" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; border: 1px solid var(--primary-color); border-radius: 5px; padding: 5px 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; gap: 5px;">
                        <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i> Edit Template
                    </button>
                ` : '';

                const itemPriceVal = getFormattedUsdPrice(itemName, item.price);
                const priceBadgeHtml = `
                    <span style="position: absolute; top: 20px; left: 20px; background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%); color: #000; font-weight: 800; font-size: 0.9rem; padding: 8px 18px; border-radius: 30px; z-index: 10; box-shadow: 0 10px 25px rgba(212,175,55,0.4);">${itemPriceVal}</span>
                `;

                newItem.innerHTML = `
                    <div class="featured-img" style="position: relative;">
                        ${priceBadgeHtml}
                        ${editBtnHtml}
                        <img src="${safeImgUrl}" alt="${itemName}" referrerPolicy="no-referrer">
                        <div class="floating-attention-card ${isReverse ? 'alt-left' : ''}">
                            <div class="floating-icon-dot">🎁</div>
                            <div class="floating-card-text">
                                <span class="floating-card-title">6% OFF COUPON</span>
                                <span class="floating-card-sub">Use Code: <strong>SAVE6</strong></span>
                            </div>
                        </div>
                    </div>
                    <div class="featured-info">
                        <span class="section-tag" style="margin-bottom: 15px;">${itemCategory}</span>
                        <h2>${itemName.split(' ')[0]} <span>${itemName.split(' ').slice(1).join(' ')}</span></h2>
                        <p class="lead">${itemCategory} solution for elite clients.</p>
                        <p>${itemDesc}</p>
                        <ul class="service-features" style="margin-bottom: 30px;">
                            <li><i data-lucide="check-circle"></i> Custom Elite Design</li>
                            <li><i data-lucide="check-circle"></i> High Performance</li>
                            <li><i data-lucide="check-circle"></i> Secure Integration</li>
                        </ul>
                        <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
                            <a href="${itemLink}" class="btn btn-primary" target="_blank">Claim Offer (${itemPriceVal})</a>
                        </div>
                    </div>
                `;
                
                if (isAdmin) {
                    const editBtn = newItem.querySelector('.edit-featured-btn');
                    if (editBtn) {
                        editBtn.onclick = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openAddWebsiteModal(item.category, {id: docSnap.id, ...item});
                        };
                    }
                }

                featuredProjectsContainer.appendChild(newItem);
            });
            
            if (window.lucide) window.lucide.createIcons();
            // Trigger reveal animations for new items
            if (typeof reveal === 'function') reveal();
        }, (error) => {
            handleFirestoreError(error, OperationType.LIST, 'marketplaceItems');
        });
    };

    // Initial load will be handled by onAuthStateChanged
    // if (marketplaceGrid) loadMarketplaceItems();

    // --- Dynamic Portfolio Content Handling ---
    const handlePortfolioParams = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const siteName = urlParams.get('site');
        
        if (siteName && window.location.pathname.includes('portfolio.html')) {
            const pageHeaderH1 = document.querySelector('.page-header h1');
            const pageHeaderP = document.querySelector('.page-header p');
            
            if (pageHeaderH1) {
                pageHeaderH1.innerHTML = `<span>${siteName}</span>`;
            }
            
            if (pageHeaderP) {
                pageHeaderP.innerText = `Detailed overview of the ${siteName} digital masterpiece. Crafted with precision for Nairobi's elite.`;
                
                // Add a "Back to Portfolio" button
                const backBtn = document.createElement('a');
                backBtn.href = 'portfolio.html';
                backBtn.className = 'btn btn-primary btn-sm';
                backBtn.style.marginTop = '20px';
                backBtn.innerText = '← Back to All Projects';
                pageHeaderP.parentNode.appendChild(backBtn);
            }

            // Fetch site details from Firestore
            try {
                const q = query(collection(db, 'marketplaceItems'), where('name', '==', siteName), limit(1));
                await getDocs(q);
            } catch (error) {
                console.error("Error fetching site details:", error);
            }

            // Scroll to the top to ensure the header is visible
            window.scrollTo(0, 0);

            // Optional: Highlight if it matches an existing item
            const portfolioItems = document.querySelectorAll('.portfolio-item, .marketplace-item');
            portfolioItems.forEach(item => {
                const itemTitle = item.querySelector('h3')?.innerText;
                if (itemTitle && siteName.toLowerCase().includes(itemTitle.toLowerCase())) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    item.style.border = '2px solid var(--primary-color)';
                    item.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.3)';
                }
            });
        }
    };

    handlePortfolioParams();

    // --- Dynamic Blog Post Handling ---
    const DEFAULT_BLOG_POSTS = [
        {
            id: 'article-spotlight-1',
            title: 'How Kenyan Service Businesses Are Scaling Beyond M-Pesa with Automated Web Portals',
            category: 'Strategy & Tech',
            subtitle: 'Discover how integrating real-time booking engines, automated WhatsApp receipts, and instant Paybill triggers triples monthly revenue for local agencies.',
            readTime: '5 min read',
            author: 'QuickSite Editorial Desk',
            authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
            date: 'August 8, 2026',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
            link: 'https://quicksitekenya.co.ke/services.html',
            content: `
                <p class="lead" style="font-size: 1.15rem; color: #ffd700; line-height: 1.6; margin-bottom: 25px; font-weight: 600;">In 2026, relying solely on manual WhatsApp inquiries and paper ledger records is standard practice for failing service providers in East Africa. Top-performing brands in Nairobi and Mombasa are automating client onboarding from first touch to final receipt.</p>

                <h2 style="color: white; font-size: 1.5rem; margin: 30px 0 15px 0;">1. The Death of the Manual Inquiry Loop</h2>
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">When a client requests pricing on WhatsApp at 9 PM and receives a response 10 hours later, 68% have already paid a competitor with an automated web booking portal. By embedding instant quote calculators and live availability calendars, businesses eliminate friction entirely.</p>

                <h2 style="color: white; font-size: 1.5rem; margin: 30px 0 15px 0;">2. Automated Paybill & Express M-Pesa Triggers</h2>
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">Modern web solutions allow buyers to enter their phone number and receive an instant M-Pesa STK push prompt. Once confirmed, the system immediately generates a branded PDF invoice, registers the order in the merchant dashboard, and notifies the fulfillment team in under 3 seconds.</p>

                <div style="background: rgba(212,175,55,0.12); border-left: 4px solid #d4af37; padding: 22px; border-radius: 12px; margin: 30px 0; border: 1px solid rgba(212,175,55,0.3);">
                    <p style="color: #ffd700; font-weight: 700; font-size: 1.05rem; margin: 0; line-height: 1.5;">"Automation isn't just about saving time — it's about converting late-night browser intent into verified revenue before sunrise."</p>
                </div>

                <h2 style="color: white; font-size: 1.5rem; margin: 30px 0 15px 0;">3. Claim Your Express Web Build</h2>
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">At QuickSite Kenya, we deliver custom, high-converting digital portals in under 48 hours. Use coupon code <strong style="color: #ffd700; background: rgba(0,0,0,0.5); padding: 2px 8px; border-radius: 6px;">SAVE6</strong> today to lock in 6% off your entire project package.</p>
            `
        },
        {
            id: 'article-2',
            title: '10 Conversion Hacks That Turned a Nairobi Safari Agency Into a KES 45M Powerhouse',
            category: 'Case Studies',
            subtitle: 'A breakdown of high-impact UI tweaks, speed optimization, and multi-currency payment checkout flows that unlocked international tourists.',
            readTime: '6 min read',
            author: 'Michael Mulili',
            authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
            date: 'August 5, 2026',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/portfolio.html',
            content: `
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">Tour operator Skybridge Safaris struggled with abandoned itinerary inquiries until replacing their legacy brochure website with an interactive package visualizer.</p>
                <h2 style="color: white; font-size: 1.4rem; margin: 25px 0 15px 0;">Key Enhancements Implemented:</h2>
                <ul style="color: #ccc; line-height: 1.8; margin-left: 20px; margin-bottom: 25px;">
                    <li>3D Interactive Game Park Maps with lodge filters.</li>
                    <li>Instant multi-currency conversion (USD, EUR, KES).</li>
                    <li>WhatsApp VIP direct connection for immediate custom quotes.</li>
                    <li>Automated client reviews sync with Google Maps API.</li>
                </ul>
            `
        },
        {
            id: 'article-3',
            title: 'SEO in East Africa 2026: Dominating Local Search in Nairobi, Mombasa & Kisumu',
            category: 'Digital Marketing',
            subtitle: 'How structured Schema markup, localized keywords, and sub-second page loads rank your brand above established competitors.',
            readTime: '7 min read',
            author: 'QuickSite SEO Desk',
            authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
            date: 'July 28, 2026',
            img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/services.html',
            content: `
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">Search engines now prioritize mobile performance and hyper-local geo-targeting above all else in East African commercial queries.</p>
                <h2 style="color: white; font-size: 1.4rem; margin: 25px 0 15px 0;">Essential Local SEO Blueprint:</h2>
                <p style="color: #ccc; line-height: 1.8;">Incorporate JSON-LD Organization Schema, optimize for voice queries ("best web designer near Westlands"), and maintain a 98+ Google Lighthouse performance score.</p>
            `
        },
        {
            id: 'article-4',
            title: 'Why 48-Hour Web Delivery is Disrupting Traditional Software Agencies in Kenya',
            category: 'Industry Insights',
            subtitle: 'Traditional 3-month agency delays are dead. Modern modular engineering allows business owners to launch before momentum fades.',
            readTime: '4 min read',
            author: 'QuickSite Team',
            authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
            date: 'July 19, 2026',
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/packages.html',
            content: `
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">In business, speed is a competitive moat. Waiting months for a simple corporate landing page results in lost seasonal demand and wasted marketing budgets.</p>
            `
        },
        {
            id: 'article-5',
            title: 'E-Commerce Security & Paystack/M-Pesa Integration Best Practices for 2026',
            category: 'E-Commerce',
            subtitle: 'Protecting your online store against fraudulent charges while ensuring a seamless 1-click mobile checkout experience.',
            readTime: '8 min read',
            author: 'Tech Security Desk',
            authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
            date: 'July 11, 2026',
            img: 'https://images.unsplash.com/photo-1556742049-0a67d2685710?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/packages.html',
            content: `
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">Security and speed are two sides of the same coin when running a high-traffic e-commerce brand in Kenya.</p>
            `
        },
        {
            id: 'article-6',
            title: 'Maximizing Social Media ROI with Instant WhatsApp Lead Funnels',
            category: 'Digital Marketing',
            subtitle: 'Bridge the gap between TikTok, Instagram & Facebook ads directly into high-closing direct chat conversions.',
            readTime: '5 min read',
            author: 'Growth Marketing Lead',
            authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
            date: 'June 30, 2026',
            img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
            link: 'https://quicksitekenya.co.ke/contact.html',
            content: `
                <p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">Directing ad traffic to a generic homepage is burning money. Direct them into custom landing pages with instant pre-filled WhatsApp prompts.</p>
            `
        }
    ];

    let allBlogPostsList = [];
    let activeBlogCategory = 'ALL';
    let blogSearchQuery = '';

    const loadBlogPosts = () => {
        const blogGrid = document.getElementById('blog-grid');
        if (!blogGrid) return;

        const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const dbPosts = [];
            snapshot.forEach((docSnap) => {
                dbPosts.push({ id: docSnap.id, ...docSnap.data() });
            });

            // Combine DB posts with baseline defaults without duplicating titles
            const dbTitles = new Set(dbPosts.map(p => (p.title || '').toLowerCase().trim()));
            const filteredDefaults = DEFAULT_BLOG_POSTS.filter(d => !dbTitles.has(d.title.toLowerCase().trim()));
            
            allBlogPostsList = [...dbPosts, ...filteredDefaults];

            setupBlogSearchAndFilters();
            renderBlogView();
        }, (error) => {
            handleFirestoreError(error, OperationType.LIST, 'blogPosts');
            allBlogPostsList = [...DEFAULT_BLOG_POSTS];
            setupBlogSearchAndFilters();
            renderBlogView();
        });
    };

    const setupBlogSearchAndFilters = () => {
        const searchInput = document.getElementById('blogSearchInput');
        const filterPills = document.querySelectorAll('.blog-filter-pill');
        const newsletterForm = document.getElementById('blogNewsletterForm');
        const addHeaderBtn = document.getElementById('addBlogHeaderBtn');

        if (searchInput && !searchInput.dataset.listenerAttached) {
            searchInput.dataset.listenerAttached = 'true';
            searchInput.addEventListener('input', (e) => {
                blogSearchQuery = e.target.value.toLowerCase().trim();
                renderBlogView();
            });
        }

        filterPills.forEach(pill => {
            if (!pill.dataset.listenerAttached) {
                pill.dataset.listenerAttached = 'true';
                pill.addEventListener('click', () => {
                    filterPills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    activeBlogCategory = pill.getAttribute('data-category') || 'ALL';
                    renderBlogView();
                });
            }
        });

        if (newsletterForm && !newsletterForm.dataset.listenerAttached) {
            newsletterForm.dataset.listenerAttached = 'true';
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = document.getElementById('blogNewsletterEmail');
                showToast(`🎉 VIP Welcome! Use coupon code SAVE6 for 6% OFF your web project.`);
                if (emailInput) emailInput.value = '';
            });
        }

        if (addHeaderBtn && !addHeaderBtn.dataset.listenerAttached) {
            addHeaderBtn.dataset.listenerAttached = 'true';
            addHeaderBtn.addEventListener('click', () => {
                const modal = document.getElementById('blogPostModal');
                const form = document.getElementById('blogPostForm');
                const editId = document.getElementById('editPostId');
                if (form) form.reset();
                if (editId) editId.value = '';
                if (modal) modal.style.display = 'block';
            });
        }
    };

    const renderBlogView = () => {
        const blogGrid = document.getElementById('blog-grid');
        const spotlightContainer = document.getElementById('featuredArticleSpotlight');
        const countBadge = document.getElementById('blogMatchCount');

        if (!blogGrid) return;

        let filtered = allBlogPostsList.filter(post => {
            const matchesCat = activeBlogCategory === 'ALL' || (post.category || '').toLowerCase() === activeBlogCategory.toLowerCase();
            const textToSearch = `${post.title || ''} ${post.subtitle || ''} ${post.category || ''} ${post.content || ''}`.toLowerCase();
            const matchesSearch = !blogSearchQuery || textToSearch.includes(blogSearchQuery);
            return matchesCat && matchesSearch;
        });

        if (countBadge) {
            countBadge.innerHTML = `<i data-lucide="book-open" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> Showing <strong>${filtered.length}</strong> Article${filtered.length !== 1 ? 's' : ''}`;
        }

        if (spotlightContainer) {
            if (activeBlogCategory === 'ALL' && !blogSearchQuery && allBlogPostsList.length > 0) {
                const spotlightPost = allBlogPostsList[0];
                const safeSpotlightImg = getSafeImageUrl(spotlightPost.img, spotlightPost.title, 1200, 600);
                
                spotlightContainer.innerHTML = `
                    <div style="background: linear-gradient(135deg, rgba(18, 18, 28, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%); border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 24px; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 0; box-shadow: 0 20px 50px rgba(0,0,0,0.6); position: relative;">
                        <div style="position: relative; height: 100%; min-height: 320px; overflow: hidden;">
                            <img src="${safeSpotlightImg}" alt="${spotlightPost.title}" style="width: 100%; height: 100%; object-fit: cover;" referrerPolicy="no-referrer">
                            <span style="position: absolute; top: 16px; left: 16px; background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%); color: #000; font-weight: 800; font-size: 0.75rem; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                                ⭐ Editor's Spotlight
                            </span>
                            
                            <div class="floating-attention-card" style="bottom: 12px; right: 12px; padding: 6px 12px; z-index: 4;">
                                <div class="floating-icon-dot" style="width:26px; height:26px; font-size:0.75rem;">🎁</div>
                                <div class="floating-card-text">
                                    <span class="floating-card-title" style="font-size:0.7rem;">6% OFF COUPON</span>
                                    <span class="floating-card-sub" style="font-size:0.65rem;">Code: <strong>SAVE6</strong></span>
                                </div>
                            </div>
                        </div>

                        <div style="padding: 35px; display: flex; flex-direction: column; justify-content: center;">
                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                                <span style="color: #d4af37; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">${spotlightPost.category || 'Strategy & Tech'}</span>
                                <span style="color: #666;">•</span>
                                <span style="color: #aaa; font-size: 0.8rem; font-weight: 600;">⏱️ ${spotlightPost.readTime || '5 min read'}</span>
                            </div>

                            <h2 style="font-size: 1.8rem; font-weight: 800; color: white; margin-bottom: 15px; line-height: 1.3;">${spotlightPost.title}</h2>
                            <p style="color: #ccc; font-size: 0.95rem; line-height: 1.6; margin-bottom: 25px;">${spotlightPost.subtitle}</p>

                            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08);">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <img src="${spotlightPost.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 1px solid #d4af37;" alt="Author">
                                    <div>
                                        <div style="color: white; font-size: 0.85rem; font-weight: 700;">${spotlightPost.author || 'QuickSite Editorial'}</div>
                                        <div style="color: #888; font-size: 0.75rem;">${spotlightPost.date || 'August 2026'}</div>
                                    </div>
                                </div>

                                <a href="blog-post.html?id=${spotlightPost.id}" class="btn btn-primary" style="padding: 10px 22px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 8px;">
                                    Read Article <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                spotlightContainer.style.display = 'block';
            } else {
                spotlightContainer.style.display = 'none';
            }
        }

        blogGrid.innerHTML = '';

        if (filtered.length === 0) {
            blogGrid.innerHTML = `
                <div class="no-items-message" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: rgba(18,18,26,0.6); border: 1px dashed var(--glass-border); border-radius: 20px;">
                    <i data-lucide="book-x" style="width: 48px; height: 48px; color: #d4af37; margin-bottom: 15px;"></i>
                    <h3 style="color: white; font-size: 1.3rem; margin-bottom: 8px;">No Insights Found</h3>
                    <p style="color: #aaa; font-size: 0.9rem;">Try adjusting your search keywords or choosing another category.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        const displayItems = (activeBlogCategory === 'ALL' && !blogSearchQuery && filtered.length > 1) ? filtered.slice(1) : filtered;

        displayItems.forEach(post => {
            const postId = post.id;
            const article = document.createElement('article');
            article.className = 'elite-blog-card dynamic-item reveal';

            const safeImg = getSafeImageUrl(post.img, post.title, 800, 500);

            const editBtnsHtml = isAdmin ? `
                <div style="position: absolute; top: 12px; right: 12px; display: flex; gap: 6px; z-index: 10;">
                    <button class="edit-post-btn" data-id="${postId}" title="Edit Article" style="background: rgba(0,0,0,0.85); color: #ffd700; border: 1px solid #d4af37; border-radius: 50%; width: 34px; height: 34px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                        <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i>
                    </button>
                    <button class="delete-post-btn" data-id="${postId}" title="Delete Article" style="background: rgba(255,68,68,0.85); color: white; border: 1px solid #ff4444; border-radius: 50%; width: 34px; height: 34px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                        <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>
            ` : '';

            article.innerHTML = `
                <div class="elite-blog-img-wrapper">
                    ${editBtnsHtml}
                    <img src="${safeImg}" alt="${post.title}" loading="lazy" referrerPolicy="no-referrer">
                    <span style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.8); color: #ffd700; border: 1px solid rgba(212,175,55,0.4); font-size: 0.7rem; font-weight: 800; padding: 4px 12px; border-radius: 12px; backdrop-filter: blur(8px);">
                        ${post.category || 'Insights'}
                    </span>
                </div>

                <div class="elite-blog-body">
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #888; margin-bottom: 10px;">
                        <span>📅 ${post.date || 'August 2026'}</span>
                        <span style="color: #ffd700; font-weight: 700;">⏱️ ${post.readTime || '5 min read'}</span>
                    </div>

                    <h3 style="font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 10px; line-height: 1.3;">${post.title}</h3>
                    <p style="font-size: 0.88rem; color: #aaa; line-height: 1.5; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        ${post.subtitle}
                    </p>

                    <div style="display: flex; gap: 10px; margin-top: auto; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.08);">
                        <a href="blog-post.html?id=${postId}" class="btn btn-primary btn-sm" style="flex: 1; justify-content: center; display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem;">
                            Read Insight <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i>
                        </a>
                        <button class="btn btn-secondary btn-sm share-post-btn" data-id="${postId}" data-title="${post.title}" style="padding: 8px 12px; font-size: 0.8rem; background: rgba(37,211,102,0.15); border-color: rgba(37,211,102,0.4); color: #25d366;">
                            <i data-lucide="share-2" style="width: 14px; height: 14px;"></i> Share
                        </button>
                    </div>
                </div>
            `;

            blogGrid.appendChild(article);
        });

        document.querySelectorAll('.share-post-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const id = btn.getAttribute('data-id');
                const title = btn.getAttribute('data-title');
                showSharePrompt(id, title);
            };
        });

        if (isAdmin) {
            document.querySelectorAll('.edit-post-btn').forEach(btn => {
                btn.onclick = (e) => {
                    e.preventDefault();
                    const id = btn.getAttribute('data-id');
                    editBlogPost(id);
                };
            });
            document.querySelectorAll('.delete-post-btn').forEach(btn => {
                btn.onclick = (e) => {
                    e.preventDefault();
                    const id = btn.getAttribute('data-id');
                    deleteBlogPost(id);
                };
            });
        }

        if (window.lucide) window.lucide.createIcons();
    };

    const editBlogPost = async (id) => {
        try {
            let post = allBlogPostsList.find(p => p.id === id);
            if (!post) {
                const snapshot = await getDocs(query(collection(db, 'blogPosts'), where('__name__', '==', id)));
                if (!snapshot.empty) {
                    post = snapshot.docs[0].data();
                }
            }

            if (post) {
                const setVal = (id, val) => {
                    const el = document.getElementById(id);
                    if (el) el.value = val !== undefined && val !== null ? val : '';
                };

                setVal('editPostId', id);
                setVal('postTitleInput', post.title);
                setVal('postSubtitleInput', post.subtitle);
                setVal('postImgInput', post.img);
                setVal('postLinkInput', post.link || '');
                setVal('postCategoryInput', post.category || 'Strategy & Tech');
                setVal('postContentInput', post.content);
                if (blogPostModal) blogPostModal.style.display = 'block';
            }
        } catch (error) {
            handleFirestoreError(error, OperationType.GET, `blogPosts/${id}`);
        }
    };

    const deleteBlogPost = (id) => {
        showConfirm('Are you sure you want to remove this insight?', async () => {
            try {
                await deleteDoc(doc(db, 'blogPosts', id));
                showToast('Article removed from database.');
            } catch (error) {
                handleFirestoreError(error, OperationType.DELETE, `blogPosts/${id}`);
            }
        });
    };

    const showSharePrompt = (postId, postTitle) => {
        const rawUrl = `${window.location.origin}/blog-post.html?id=${postId}`;
        const encodedUrl = encodeURIComponent(rawUrl);
        const encodedTitle = encodeURIComponent(`Check out this digital strategy guide from QuickSite Kenya: "${postTitle}"`);

        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:10000; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px); padding:20px;';
        
        overlay.innerHTML = `
            <div style="background:#12121a; border:1px solid #d4af37; border-radius:20px; padding:30px; max-width:480px; width:100%; position:relative; box-shadow: 0 20px 50px rgba(0,0,0,0.8);">
                <span class="close-share" style="position:absolute; top:15px; right:20px; font-size:1.8rem; color:#aaa; cursor:pointer;">&times;</span>
                <div style="text-align:center; margin-bottom:20px;">
                    <i data-lucide="share-2" style="width:40px; height:40px; color:#ffd700; margin-bottom:10px;"></i>
                    <h3 style="color:white; font-size:1.3rem;">Share Article Insight</h3>
                    <p style="color:#aaa; font-size:0.85rem; margin-top:5px;">Spread high-impact knowledge with fellow entrepreneurs and clients.</p>
                </div>

                <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:20px;">
                    <a href="https://wa.me/?text=${encodedTitle}%20${encodedUrl}" target="_blank" class="btn" style="background:#25D366; color:white; justify-content:center; display:flex; align-items:center; gap:8px; border-radius:12px; padding:12px;">
                        <i data-lucide="message-circle"></i> Share via WhatsApp
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}" target="_blank" class="btn" style="background:#1DA1F2; color:white; justify-content:center; display:flex; align-items:center; gap:8px; border-radius:12px; padding:12px;">
                        <i data-lucide="twitter"></i> Share on X (Twitter)
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" class="btn" style="background:#4267B2; color:white; justify-content:center; display:flex; align-items:center; gap:8px; border-radius:12px; padding:12px;">
                        <i data-lucide="facebook"></i> Share on Facebook
                    </a>
                </div>

                <div style="display:flex; gap:8px;">
                    <input type="text" value="${rawUrl}" readonly style="flex:1; padding:10px; background:rgba(0,0,0,0.5); border:1px solid var(--glass-border); border-radius:8px; color:white; font-size:0.8rem;">
                    <button id="copyShareUrlBtn" class="btn btn-primary" style="padding:10px 15px; font-size:0.8rem;">Copy Link</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        if (window.lucide) window.lucide.createIcons();

        overlay.querySelector('.close-share').onclick = () => overlay.remove();
        overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

        const copyBtn = overlay.querySelector('#copyShareUrlBtn');
        if (copyBtn) {
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(rawUrl);
                showToast('Article link copied to clipboard!');
                copyBtn.innerText = 'Copied!';
            };
        }
    };

    if (blogPostForm) {
        blogPostForm.onsubmit = async (e) => {
            e.preventDefault();
            const getVal = (id) => {
                const el = document.getElementById(id);
                return el ? el.value : '';
            };

            const editId = getVal('editPostId');
            const img = getVal('postImgInput');

            const submitBtn = blogPostForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerText : 'Publishing...';
            if (submitBtn) {
                submitBtn.innerText = 'Publishing...';
                submitBtn.disabled = true;
            }

            try {
                const postData = {
                    title: getVal('postTitleInput'),
                    subtitle: getVal('postSubtitleInput'),
                    img: img,
                    link: getVal('postLinkInput'),
                    category: getVal('postCategoryInput'),
                    content: getVal('postContentInput'),
                    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                    createdAt: serverTimestamp()
                };

                let newPostId = editId;
                if (editId) {
                    await updateDoc(doc(db, 'blogPosts', editId), postData);
                    showToast('Insight updated successfully.');
                } else {
                    const docRef = await addDoc(collection(db, 'blogPosts'), postData);
                    newPostId = docRef.id;
                    showToast('New elite insight published.');
                }
                blogPostModal.style.display = 'none';
                blogPostForm.reset();
            } catch (error) {
                handleFirestoreError(error, editId ? OperationType.UPDATE : OperationType.CREATE, 'blogPosts');
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        };
    }

    const handleBlogParams = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');

        if (postId && window.location.pathname.includes('blog-post.html')) {
            try {
                let post = null;

                const q = query(collection(db, 'blogPosts'), where('__name__', '==', postId));
                const snapshot = await getDocs(q);
                
                if (!snapshot.empty) {
                    post = snapshot.docs[0].data();
                } else {
                    post = DEFAULT_BLOG_POSTS.find(p => p.id === postId);
                }

                if (post) {
                    document.title = `${post.title} | QuickSite Kenya`;
                    
                    const dateEl = document.getElementById('post-date');
                    const titleEl = document.getElementById('post-title');
                    const subtitleEl = document.getElementById('post-subtitle');
                    const imgContainer = document.getElementById('post-img-container');
                    const bodyEl = document.getElementById('post-body');

                    if (dateEl) dateEl.innerHTML = `<span style="color:#ffd700; font-weight:800; text-transform:uppercase;">${post.category || 'Insights'}</span> • ${post.date || 'August 2026'}`;
                    if (titleEl) titleEl.innerText = post.title;
                    if (subtitleEl) subtitleEl.innerText = post.subtitle;
                    
                    if (imgContainer) {
                        const safeImg = getSafeImageUrl(post.img, post.title, 1200, 600);
                        imgContainer.innerHTML = `
                            <div style="position:relative; border-radius: 20px; overflow: hidden; border: 1px solid rgba(212,175,55,0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
                                <img src="${safeImg}" alt="${post.title}" style="width: 100%; max-height: 500px; object-fit: cover;" referrerPolicy="no-referrer">
                            </div>
                        `;
                    }
                    
                    if (bodyEl) {
                        bodyEl.innerHTML = `
                            <div style="font-size: 1.05rem; line-height: 1.8; color: #ddd; max-width: 850px; margin: 0 auto;">
                                ${post.content}

                                <div style="margin-top: 50px; background: linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(10,10,15,0.95) 100%); border: 2px solid rgba(212,175,55,0.5); border-radius: 20px; padding: 30px; text-align: center; box-shadow: 0 15px 35px rgba(0,0,0,0.5);">
                                    <h3 style="color: white; font-size: 1.4rem; margin-bottom: 10px;">Ready to Scale Your Business Online?</h3>
                                    <p style="color: #ccc; font-size: 0.95rem; margin-bottom: 20px;">Claim a custom express web build delivered in 48 hours with 6% OFF (Use Coupon Code: <strong style="color:#ffd700;">SAVE6</strong>).</p>
                                    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                                        <a href="contact.html?coupon=SAVE6" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
                                            <i data-lucide="zap"></i> Claim Your 6% Discount
                                        </a>
                                        <a href="https://wa.me/254708691648?text=${encodeURIComponent(`Hi QuickSite Kenya, I read your article "${post.title}" and would like a consultation.`)}" target="_blank" class="btn btn-secondary" style="background: #25D366; border-color: #25D366; color: white; display: inline-flex; align-items: center; gap: 8px;">
                                            <i data-lucide="message-circle"></i> Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                    
                    const navEl = document.querySelector('.post-navigation');
                    if (post.link && navEl) {
                        const visitBtn = document.createElement('a');
                        visitBtn.href = post.link;
                        visitBtn.className = 'btn btn-secondary';
                        visitBtn.target = '_blank';
                        visitBtn.innerText = 'Visit Featured Link';
                        visitBtn.style.marginLeft = '10px';
                        navEl.appendChild(visitBtn);
                    }
                    
                    if (window.lucide) window.lucide.createIcons();
                } else {
                    const titleEl = document.getElementById('post-title');
                    const subtitleEl = document.getElementById('post-subtitle');
                    if (titleEl) titleEl.innerText = 'Article Not Found';
                    if (subtitleEl) subtitleEl.innerText = 'The requested digital insight could not be located.';
                }
            } catch (error) {
                handleFirestoreError(error, OperationType.GET, `blogPosts/${postId}`);
            }
        }
    };

    loadBlogPosts();
    handleBlogParams();

    // --- Remodeled Homepage Dual Service Switcher & Hub Navigation ---
    const initServiceSwitcher = () => {
        const webBtn = document.getElementById('tabWebsitesBtn');
        const adsBtn = document.getElementById('tabAdsBtn');
        const hybridBtn = document.getElementById('tabHybridBtn');
        
        const webHub = document.getElementById('website-hub');
        const adsHub = document.getElementById('ads-hub');
        const allBanner = document.getElementById('allInOneBanner');

        if (!webBtn || !adsBtn || !webHub || !adsHub) return;

        const switchTab = (target, shouldScroll = false) => {
            // Reset button states
            webBtn.classList.remove('active');
            adsBtn.classList.remove('active');
            if (hybridBtn) hybridBtn.classList.remove('active');

            if (target === 'ads-hub' || target === 'ads') {
                adsBtn.classList.add('active');
                webHub.classList.add('hidden-hub');
                adsHub.classList.remove('hidden-hub');
                if (allBanner) allBanner.classList.add('hidden-hub');

                if (shouldScroll) {
                    setTimeout(() => {
                        const targetEl = document.getElementById('ads-management') || adsHub;
                        if (targetEl) {
                            const rect = targetEl.getBoundingClientRect();
                            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            window.scrollTo({
                                top: rect.top + scrollTop - 90,
                                behavior: 'smooth'
                            });
                        }
                    }, 150);
                }
            } else if (target === 'website-hub' || target === 'web' || target === 'website') {
                webBtn.classList.add('active');
                webHub.classList.remove('hidden-hub');
                adsHub.classList.add('hidden-hub');
                if (allBanner) allBanner.classList.add('hidden-hub');

                if (shouldScroll) {
                    setTimeout(() => {
                        const targetEl = webHub;
                        if (targetEl) {
                            const rect = targetEl.getBoundingClientRect();
                            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            window.scrollTo({
                                top: rect.top + scrollTop - 90,
                                behavior: 'smooth'
                            });
                        }
                    }, 150);
                }
            } else {
                // Combined Ecosystem (Both visible)
                if (hybridBtn) hybridBtn.classList.add('active');
                webHub.classList.remove('hidden-hub');
                adsHub.classList.remove('hidden-hub');
                if (allBanner) allBanner.classList.remove('hidden-hub');

                if (shouldScroll) {
                    setTimeout(() => {
                        const targetEl = document.getElementById('serviceSwitcherSection');
                        if (targetEl) {
                            const rect = targetEl.getBoundingClientRect();
                            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            window.scrollTo({
                                top: rect.top + scrollTop - 90,
                                behavior: 'smooth'
                            });
                        }
                    }, 150);
                }
            }

            if (window.lucide) window.lucide.createIcons();
        };

        webBtn.addEventListener('click', () => {
            switchTab('website-hub', true);
            history.pushState(null, null, '#website-hub');
        });

        adsBtn.addEventListener('click', () => {
            switchTab('ads-hub', true);
            history.pushState(null, null, '#ads-hub');
        });

        if (hybridBtn) {
            hybridBtn.addEventListener('click', () => {
                switchTab('all-hub', true);
                history.pushState(null, null, '#all-hub');
            });
        }

        // Hash change detection
        const handleHashSwitch = () => {
            const hash = window.location.hash.toLowerCase();
            if (hash.includes('ads')) {
                switchTab('ads-hub', true);
            } else if (hash.includes('all') || hash.includes('hybrid') || hash.includes('ecosystem')) {
                switchTab('all-hub', false);
            } else if (hash.includes('web')) {
                switchTab('website-hub', true);
            }
        };

        window.addEventListener('hashchange', handleHashSwitch);

        if (window.location.hash) {
            handleHashSwitch();
        } else {
            // Default to Website hub if no hash is specified, or let it show website tab properly
            switchTab('website-hub', false);
        }

        // Intercept internal links pointing to #ads-management or #ads-hub or #website-hub
        document.querySelectorAll('a[href*="#ads"], a[href*="#website"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.includes('ads')) {
                    e.preventDefault();
                    switchTab('ads-hub', true);
                    history.pushState(null, null, '#ads-hub');
                } else if (href && href.includes('website')) {
                    e.preventDefault();
                    switchTab('website-hub', true);
                    history.pushState(null, null, '#website-hub');
                }
            });
        });
    };

    const initFloatingCouponWidget = () => {
        if (sessionStorage.getItem('quicksite-coupon-closed') === 'true') {
            return;
        }

        if (document.getElementById('floatingCouponWidget')) return;

        const widget = document.createElement('div');
        widget.id = 'floatingCouponWidget';
        widget.className = 'floating-coupon-widget';
        widget.innerHTML = `
            <div class="coupon-widget-icon">🎁</div>
            <div class="coupon-widget-body">
                <div class="coupon-widget-tag">
                    <i data-lucide="sparkles" style="width: 12px; height: 12px;"></i>
                    <span>6% OFF ALL SERVICES</span>
                </div>
                <div class="coupon-widget-title">Exclusive Discount Code</div>
                <div class="coupon-code-pill" id="couponCodePill" title="Click to copy coupon code">
                    <span>CODE: <strong>SAVE6</strong></span>
                    <i data-lucide="copy" style="width: 12px; height: 12px; margin-left: 4px;"></i>
                </div>
            </div>
            <div class="coupon-widget-actions">
                <button class="coupon-btn-copy" id="claimCouponBtn">Claim 6% OFF</button>
                <button class="coupon-widget-close" id="closeCouponBtn" title="Dismiss coupon">&times;</button>
            </div>
        `;

        document.body.appendChild(widget);
        if (window.lucide) window.lucide.createIcons();

        const copyCode = () => {
            const code = 'SAVE6';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(code).catch(() => {});
            }
            showToast('🎉 Coupon code SAVE6 copied! 6% Discount applied to your service.', 'success');
        };

        const pill = widget.querySelector('#couponCodePill');
        if (pill) {
            pill.onclick = (e) => {
                e.preventDefault();
                copyCode();
            };
        }

        const claimBtn = widget.querySelector('#claimCouponBtn');
        if (claimBtn) {
            claimBtn.onclick = (e) => {
                e.preventDefault();
                copyCode();
                setTimeout(() => {
                    window.location.href = 'contact.html?coupon=SAVE6';
                }, 800);
            };
        }

        const closeBtn = widget.querySelector('#closeCouponBtn');
        if (closeBtn) {
            closeBtn.onclick = (e) => {
                e.preventDefault();
                widget.style.opacity = '0';
                widget.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    widget.remove();
                }, 300);
                sessionStorage.setItem('quicksite-coupon-closed', 'true');
            };
        }
    };

    initFloatingCouponWidget();
    initServiceSwitcher();
});
