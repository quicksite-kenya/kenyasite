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

// Initialize AI Consultation
document.addEventListener('DOMContentLoaded', () => {
    try {
        initAIConsultation();
    } catch (err) {
        console.error("Failed to initialize AI Consultation:", err);
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
        document.getElementById('editSiteId').value = id || '';
        document.getElementById('siteEditorTitle').innerHTML = id ? `Edit <span>${data.businessName}</span>` : 'Add New <span>Client Site</span>';
        
        // Populate inputs
        document.getElementById('clientNameInput').value = data ? data.clientName || '' : '';
        document.getElementById('businessNameInput').value = data ? data.businessName || '' : '';
        document.getElementById('planInput').value = data ? data.plan || 'Starter Online Presence' : 'Starter Online Presence';
        document.getElementById('templateInput').value = data ? data.template || 'CORPORATE_CLEAN' : 'CORPORATE_CLEAN';
        document.getElementById('taglineInput').value = data ? data.tagline || '' : '';
        document.getElementById('aboutTextInput').value = data ? data.aboutText || '' : '';
        document.getElementById('statusInput').value = data ? data.status || 'Draft' : 'Draft';
        
        // Services
        document.getElementById('servicesInput').value = data && data.services ? data.services.map(s => `${s.name} | ${s.price} | ${s.description}`).join('\n') : '';
        
        // Contact
        document.getElementById('phoneInput').value = data && data.contact ? data.contact.phone || '' : '';
        document.getElementById('whatsappInput').value = data && data.contact ? data.contact.whatsapp || '' : '';
        document.getElementById('addressInput').value = data && data.contact ? data.contact.address || '' : '';
        document.getElementById('mapUrlInput').value = data && data.contact ? data.contact.mapUrl || '' : '';
        
        // Media
        document.getElementById('heroImageInput').value = data && data.images ? data.images.hero || '' : '';
        document.getElementById('aboutImageInput').value = data && data.images ? data.images.about || '' : '';
        document.getElementById('servicesImageInput').value = data && data.images ? data.images.services || '' : '';
        document.getElementById('logoImageInput').value = data && data.images ? data.images.logo || '' : '';
        document.getElementById('galleryImagesInput').value = data && data.images && data.images.gallery ? data.images.gallery.join('\n') : '';
        
        // Hosting & Domains
        document.getElementById('customDomainInput').value = data ? data.customDomain || '' : '';
        document.getElementById('subdomainInput').value = data ? data.subdomain || '' : '';
        document.getElementById('customDomainsListInput').value = data && data.custom_domains ? data.custom_domains.join(', ') : '';
        
        // Advanced Universal Template Fields
        document.getElementById('heroSettingsInput').value = data && data.hero ? `${data.hero.title || ''} | ${data.hero.subtitle || ''} | ${data.hero.cta || ''}` : '';
        document.getElementById('featuresInput').value = data && data.features ? data.features.map(f => `${f.title} | ${f.desc} | ${f.icon}`).join('\n') : '';
        document.getElementById('testimonialsInput').value = data && data.testimonials ? data.testimonials.map(t => `${t.name} | ${t.quote}`).join('\n') : '';
        document.getElementById('pricingInput').value = data && data.pricing ? data.pricing.map(p => `${p.plan} | ${p.price} | ${p.features.join(', ')}`).join('\n') : '';
        document.getElementById('ctaSettingsInput').value = data && data.cta ? `${data.cta.title || ''} | ${data.cta.btn || ''}` : '';
        
        // Billing & Subscriptions
        document.getElementById('subscriptionPlanInput').value = data ? data.plan || data.subscriptionPlan || 'Starter Presence' : 'Starter Presence';
        document.getElementById('paymentStatusInput').value = data ? data.paymentStatus || 'Unpaid' : 'Unpaid';
        document.getElementById('setupFeeInput').value = data ? data.setupFee || 0 : 0;
        document.getElementById('monthlyFeeInput').value = data ? data.monthlyFee || 0 : 0;
        document.getElementById('featuresEnabledInput').value = data && data.featuresEnabled ? data.featuresEnabled.join(', ') : '';
        document.getElementById('projectVisionInput').value = data ? data.projectVision || '' : '';

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
                    hero: content.heroImageUrl || document.getElementById('heroImageInput').value,
                    about: content.aboutImageUrl || document.getElementById('aboutImageInput').value,
                    services: content.servicesImageUrl || document.getElementById('servicesImageInput').value,
                    logo: document.getElementById('logoImageInput').value,
                    gallery: document.getElementById('galleryImagesInput').value.split('\n').filter(l => l.trim())
                },
                featuresEnabled: ['Features', 'Pricing', 'Testimonials', 'CTA'],
                updatedAt: serverTimestamp()
            });

            // Update UI fields
            document.getElementById('heroSettingsInput').value = `${hero.title} | ${hero.subtitle} | Learn More`;
            document.getElementById('taglineInput').value = content.tagline || existingTagline;
            document.getElementById('aboutTextInput').value = content.aboutText || existingAbout;
            document.getElementById('servicesInput').value = services.map(s => `${s.name} | ${s.price} | ${s.description}`).join('\n');
            document.getElementById('featuresInput').value = features.map(f => `${f.title} | ${f.desc} | ${f.icon}`).join('\n');
            document.getElementById('pricingInput').value = pricing.map(p => `${p.plan} | ${p.price} | ${(p.features || []).join(', ')}`).join('\n');
            document.getElementById('testimonialsInput').value = testimonials.map(t => `${t.name} | ${t.quote}`).join('\n');
            document.getElementById('ctaSettingsInput').value = `${cta.title} | ${cta.btn}`;
            
            document.getElementById('heroImageInput').value = content.heroImageUrl || '';
            document.getElementById('aboutImageInput').value = content.aboutImageUrl || '';
            document.getElementById('servicesImageInput').value = content.servicesImageUrl || '';

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

        if (editData) {
            if (title) title.innerHTML = `Edit <span>Website</span>`;
            if (desc) desc.innerText = `Update the details of your digital asset.`;
            document.getElementById('editWebsiteId').value = editData.id;
            document.getElementById('siteName').value = editData.name || '';
            document.getElementById('sitePrice').value = editData.price || '';
            document.getElementById('siteDesc').value = editData.desc || '';
            document.getElementById('siteImage').value = editData.img || '';
            document.getElementById('siteLink').value = editData.link || '';
            
            const submitBtn = form.querySelector('button[type="submit"]');
            if(submitBtn) submitBtn.innerText = 'Update Project';
            
            if(editData.category) {
                selectCategory(editData.category);
            }
        } else {
            if (title) title.innerHTML = `List Your <span>Website</span>`;
            if (desc) desc.innerText = `Fill in the details to showcase your digital asset in our elite marketplace.`;
            if(form) {
                form.reset();
                document.getElementById('editWebsiteId').value = '';
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // Don't do anything for just "#"
            
            e.preventDefault();
            try {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } catch (err) {
                console.warn('Invalid selector:', href);
            }
        });
    });

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

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerText : 'Submit';
            
            if (submitBtn) {
                submitBtn.innerText = 'Submitting Inquiry...';
                submitBtn.disabled = true;
            }
            
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message'),
                status: 'New',
                createdAt: serverTimestamp()
            };
            
            try {
                // 1. Direct Firestore Save (Bypasses Vercel timeouts + works perfectly with Rules)
                await addDoc(collection(db, "inquiries"), data);
                
                // 2. Ping Vercel API purely for Email notification
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
                
                contactForm.innerHTML = `
                    <div style="text-align: center; padding: 40px; background: rgba(212, 175, 55, 0.1); border: 1px solid var(--primary-color); border-radius: 15px;">
                        <i data-lucide="check-circle" style="width: 60px; height: 60px; color: var(--primary-color); margin-bottom: 20px;"></i>
                        <h3 style="margin-bottom: 10px;">Success</h3>
                        <p style="color: var(--text-secondary);">Your inquiry has been submitted successfully. We will get back to you soon.</p>
                        <button onclick="location.reload()" class="btn btn-secondary" style="margin-top: 20px;">Send Another Inquiry</button>
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
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
            document.getElementById('blogModalTitle').innerHTML = 'Add <span>Blog Post</span>';
            blogPostForm.reset();
            document.getElementById('editPostId').value = '';
            blogPostModal.style.display = 'block';
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
            
            const name = document.getElementById('siteName').value;
            const category = document.getElementById('siteCategory').value;
            const price = document.getElementById('sitePrice').value;
            const desc = document.getElementById('siteDesc').value;
            const link = document.getElementById('siteLink').value;
            
            const img = document.getElementById('siteImage').value;
            const editId = document.getElementById('editWebsiteId').value;

            const submitBtn = addWebsiteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = editId ? 'Updating...' : 'Publishing...';
            submitBtn.disabled = true;

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
                document.getElementById('editWebsiteId').value = '';
                // Reset category selector
                const options = document.querySelectorAll('.category-option');
                options.forEach(opt => opt.classList.remove('active'));
                const hiddenInput = document.getElementById('siteCategory');
                if (hiddenInput) hiddenInput.value = '';

                if (addWebsiteModal) addWebsiteModal.style.display = 'none';
                
            } catch (error) {
                handleFirestoreError(error, OperationType.WRITE, 'marketplaceItems');
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
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
                const category = item.category || 'Other Services';
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
            const itemPrice = item.price || '0';
            const itemDesc = item.desc || 'No description available.';
            const itemCategory = item.category || 'Elite Website';
            const itemLink = item.link || '#';
            const safeImgUrl = getSafeImageUrl(item.img, itemName);
            
            const newItem = document.createElement('div');
            newItem.className = 'marketplace-item dynamic-item';
            const formattedPrice = !isNaN(Number(itemPrice)) ? Number(itemPrice).toLocaleString() : itemPrice;
            
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
                <img src="${safeImgUrl}" alt="${itemName}" onerror="this.src='https://placehold.co/800x500/1a1a1a/d4af37?text=Preview'" referrerPolicy="no-referrer">
                <div class="item-content">
                    <div class="item-header">
                        <div>
                            <h3 style="margin-bottom: 5px;">${itemName}</h3>
                            <span style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; letter-spacing: 1px;">${itemCategory}</span>
                        </div>
                        <span class="price-tag">KSh ${formattedPrice}</span>
                    </div>
                    <p>${itemDesc}</p>
                    <div class="item-footer">
                        <a href="contact.html?interest=${encodeURIComponent(itemName)}" class="btn btn-secondary btn-sm">Inquire Now</a>
                        <a href="${itemLink}" class="btn btn-primary btn-sm" target="_blank">Live Demo</a>
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

    // Load Portfolio items (Gallery style)
    let portfolioUnsubscribe = null;
    const loadPortfolioItems = () => {
        if (!portfolioGrid) return;
        
        if (portfolioUnsubscribe) {
            portfolioUnsubscribe();
            portfolioUnsubscribe = null;
        }
        
        const q = query(collection(db, 'marketplaceItems'), orderBy('createdAt', 'desc'));
        portfolioUnsubscribe = onSnapshot(q, (snapshot) => {
            portfolioGrid.innerHTML = '';
            
            if (snapshot.empty) {
                portfolioGrid.innerHTML = `
                    <div class="no-items-message" style="text-align: center; padding: 40px; opacity: 0.6;">
                        <p>Our latest masterpieces are currently being curated. Check back soon for new additions.</p>
                    </div>
                `;
                return;
            }

            // Group items by category
            const groupedItems = {};
            snapshot.forEach((docSnap) => {
                const item = docSnap.data();
                const category = item.category || 'Other Services';
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
                    renderPortfolioCategory(category, groupedItems[category], portfolioGrid);
                    delete groupedItems[category];
                }
            });

            // Render any remaining categories
            Object.keys(groupedItems).forEach(category => {
                renderPortfolioCategory(category, groupedItems[category], portfolioGrid);
            });
        }, (error) => {
            handleFirestoreError(error, OperationType.LIST, 'marketplaceItems');
        });
    };

    const renderPortfolioCategory = (category, items, container) => {
        const section = document.createElement('div');
        section.className = 'portfolio-category-section reveal';
        section.style.marginBottom = '60px';
        
        section.innerHTML = `
            <h3 class="category-title" style="font-size: 1.5rem; margin-bottom: 30px; border-left: 4px solid var(--primary-color); padding-left: 15px; color: white; font-weight: 600;">${category}</h3>
            <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;"></div>
        `;
        
        const grid = section.querySelector('.portfolio-grid');
        
        items.forEach(item => {
            const itemName = item.name || 'Unnamed Project';
            const itemCategory = item.category || 'Elite Website';
            const itemLink = item.link || '#';
            const safeImgUrl = getSafeImageUrl(item.img, itemName);
            
            const newItem = document.createElement('div');
            newItem.className = 'portfolio-item dynamic-item';
            
            const editBtnHtml = isAdmin ? `
                <button class="edit-portfolio-btn" data-id="${item.id}" title="Edit Website Details" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; border: 1px solid var(--primary-color); border-radius: 50%; width: 35px; height: 35px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;">
                    <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                </button>
            ` : '';

            newItem.innerHTML = `
                ${editBtnHtml}
                <img src="${safeImgUrl}" alt="${itemName}" referrerPolicy="no-referrer">
                <div class="portfolio-overlay">
                    <h3>${itemName}</h3>
                    <p>${itemCategory}</p>
                    <a href="${itemLink}" class="btn btn-primary btn-sm" target="_blank">View Live Site</a>
                </div>
            `;
            
            if (isAdmin) {
                const editBtn = newItem.querySelector('.edit-portfolio-btn');
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
                const itemCategory = item.category || 'Elite Website';
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

                newItem.innerHTML = `
                    <div class="featured-img" style="position: relative;">
                        ${editBtnHtml}
                        <img src="${safeImgUrl}" alt="${itemName}" referrerPolicy="no-referrer">
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
                        <a href="${itemLink}" class="btn btn-primary" target="_blank">Explore Project</a>
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
    const loadBlogPosts = () => {
        const blogGrid = document.getElementById('blog-grid');
        if (!blogGrid) return;

        const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            blogGrid.innerHTML = '';
            if (snapshot.empty) {
                blogGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.5;">No elite insights published yet. Check back soon.</p>';
                return;
            }

            snapshot.forEach((docSnap) => {
                const post = docSnap.data();
                const postId = docSnap.id;
                const article = document.createElement('article');
                article.className = 'blog-card reveal';
                
                const safeImg = getSafeImageUrl(post.img, post.title, 600, 400);
                
                article.innerHTML = `
                    <div class="blog-img">
                        <img src="${safeImg}" alt="${post.title}" referrerPolicy="no-referrer">
                        <div class="blog-category-badge">${post.category || 'Insights'}</div>
                    </div>
                    <div class="blog-content">
                        <span class="blog-date">${post.date}</span>
                        <h3>${post.title}</h3>
                        <p>${post.subtitle}</p>
                        <div style="display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap;">
                            <a href="blog-post.html?id=${postId}" class="btn btn-primary">Explore Article</a>
                            ${post.link ? `<a href="${post.link}" class="btn btn-secondary" target="_blank">Visit Site</a>` : ''}
                            ${isAdmin ? `
                                <button class="btn btn-secondary edit-post-btn" data-id="${postId}" style="padding: 8px 15px; font-size: 0.7rem;">Edit</button>
                                <button class="btn btn-primary delete-post-btn" data-id="${postId}" style="padding: 8px 15px; font-size: 0.7rem; background: #ff4444; border-color: #ff4444;">Delete</button>
                                <button class="btn btn-secondary share-post-btn" data-id="${postId}" data-title="${post.title}" style="padding: 8px 15px; font-size: 0.7rem; background: #25D366; border-color: #25D366; color: white;">Share</button>
                            ` : ''}
                        </div>
                    </div>
                `;
                blogGrid.appendChild(article);
            });

            // Add event listeners for edit/delete
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
                document.querySelectorAll('.share-post-btn').forEach(btn => {
                    btn.onclick = (e) => {
                        e.preventDefault();
                        const id = btn.getAttribute('data-id');
                        const title = btn.getAttribute('data-title');
                        
                        // Show the admin share prompt modal
                        showSharePrompt(id, title);
                    };
                });
            }

            if (window.lucide) window.lucide.createIcons();
        }, (error) => {
            handleFirestoreError(error, OperationType.LIST, 'blogPosts');
        });
    };

    const editBlogPost = async (id) => {
        try {
            const postRef = doc(db, 'blogPosts', id);
            const snapshot = await getDocs(query(collection(db, 'blogPosts'), where('__name__', '==', id)));
            if (!snapshot.empty) {
                const post = snapshot.docs[0].data();
                document.getElementById('blogModalTitle').innerHTML = 'Edit <span>Blog Post</span>';
                document.getElementById('editPostId').value = id;
                document.getElementById('postTitleInput').value = post.title;
                document.getElementById('postSubtitleInput').value = post.subtitle;
                document.getElementById('postImgInput').value = post.img;
                document.getElementById('postLinkInput').value = post.link || '';
                document.getElementById('postCategoryInput').value = post.category || 'Insights';
                document.getElementById('postContentInput').value = post.content;
                blogPostModal.style.display = 'block';
            }
        } catch (error) {
            handleFirestoreError(error, OperationType.GET, `blogPosts/${id}`);
        }
    };

    const deleteBlogPost = (id) => {
        showConfirm('Are you sure you want to delete this elite insight?', async () => {
            try {
                await deleteDoc(doc(db, 'blogPosts', id));
                showToast('Article removed from the digital ether.');
            } catch (error) {
                handleFirestoreError(error, OperationType.DELETE, `blogPosts/${id}`);
            }
        });
    };

    const showSharePrompt = (postId, postTitle) => {
        const url = encodeURIComponent(`${window.location.origin}/blog-post.html?id=${postId}`);
        const title = encodeURIComponent(postTitle);
        const rawUrl = `${window.location.origin}/blog-post.html?id=${postId}`;

        const overlay = document.createElement('div');
        overlay.className = 'modal active';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '10000';

        overlay.innerHTML = `
            <div class="modal-content" style="text-align: center; max-width: 400px; padding: 40px 30px;">
                <div style="width: 60px; height: 60px; background: rgba(37, 211, 102, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i data-lucide="check" style="color: #25D366; width: 30px; height: 30px;"></i>
                </div>
                <h3 style="margin-bottom: 10px;">Post Published! 🎉</h3>
                <p style="margin-bottom: 25px; font-size: 0.9rem; opacity: 0.8;">Share your elite insight with your network.</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" class="btn btn-primary" style="background: #1877F2; border-color: #1877F2; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="facebook"></i> Share on Facebook
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=${title}&url=${url}" target="_blank" class="btn btn-primary" style="background: #1DA1F2; border-color: #1DA1F2; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="twitter"></i> Share on Twitter (X)
                    </a>
                    <a href="https://api.whatsapp.com/send?text=${title}%20${url}" target="_blank" class="btn btn-primary" style="background: #25D366; border-color: #25D366; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="message-circle"></i> Share on WhatsApp
                    </a>
                    <button id="instagram-share-btn" class="btn btn-primary" style="background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border: none; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="instagram"></i> Copy Link for Instagram
                    </button>
                    <button id="tiktok-share-btn" class="btn btn-primary" style="background: #000000; border-color: #333333; color: white; display: flex; justify-content: center; gap: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg> Copy Link for TikTok
                    </button>
                </div>
                <button id="close-share-prompt" class="btn btn-secondary" style="margin-top: 25px; width: 100%;">Done</button>
            </div>
        `;

        document.body.appendChild(overlay);
        if (window.lucide) window.lucide.createIcons();

        overlay.querySelector('#tiktok-share-btn').onclick = () => {
            navigator.clipboard.writeText(rawUrl).then(() => {
                showToast('Link copied! Open TikTok to paste and share.');
                setTimeout(() => {
                    window.open('https://www.tiktok.com/', '_blank');
                }, 1500);
            });
        };

        overlay.querySelector('#instagram-share-btn').onclick = () => {
            navigator.clipboard.writeText(rawUrl).then(() => {
                showToast('Link copied! Open Instagram to paste in your bio/story.');
                setTimeout(() => {
                    window.open('https://www.instagram.com/', '_blank');
                }, 1500);
            });
        };

        const close = () => document.body.removeChild(overlay);
        overlay.querySelector('#close-share-prompt').onclick = close;
        overlay.onclick = (e) => { if (e.target === overlay) close(); };
    };

    if (blogPostForm) {
        blogPostForm.onsubmit = async (e) => {
            e.preventDefault();
            const editId = document.getElementById('editPostId').value;
            const img = document.getElementById('postImgInput').value;

            const submitBtn = blogPostForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Publishing...';
            submitBtn.disabled = true;

            try {
                const postData = {
                    title: document.getElementById('postTitleInput').value,
                    subtitle: document.getElementById('postSubtitleInput').value,
                    img: img,
                    link: document.getElementById('postLinkInput').value,
                    category: document.getElementById('postCategoryInput').value,
                    content: document.getElementById('postContentInput').value,
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
                const q = query(collection(db, 'blogPosts'), where('__name__', '==', postId));
                const snapshot = await getDocs(q);
                
                if (!snapshot.empty) {
                    const post = snapshot.docs[0].data();
                    // Update Metadata
                    document.title = `${post.title} | QuickSite Kenya`;
                    
                    // Update Header
                    const dateEl = document.getElementById('post-date');
                    const titleEl = document.getElementById('post-title');
                    const subtitleEl = document.getElementById('post-subtitle');
                    const imgContainer = document.getElementById('post-img-container');
                    const bodyEl = document.getElementById('post-body');

                    if (dateEl) dateEl.innerText = post.date;
                    if (titleEl) titleEl.innerText = post.title;
                    if (subtitleEl) subtitleEl.innerText = post.subtitle;
                    
                    // Update Image
                    if (imgContainer) {
                        const safeImg = getSafeImageUrl(post.img, post.title, 1200, 600);
                        imgContainer.innerHTML = `<img src="${safeImg}" alt="${post.title}" referrerPolicy="no-referrer">`;
                    }
                    
                    // Update Body
                    if (bodyEl) bodyEl.innerHTML = post.content;
                    
                    // Add Visit Site button if link exists
                    const navEl = document.querySelector('.post-navigation');
                    if (post.link && navEl) {
                        const visitBtn = document.createElement('a');
                        visitBtn.href = post.link;
                        visitBtn.className = 'btn btn-secondary';
                        visitBtn.target = '_blank';
                        visitBtn.innerText = 'Visit Site';
                        visitBtn.style.marginLeft = '10px';
                        navEl.appendChild(visitBtn);
                    }
                    
                    if (window.lucide) window.lucide.createIcons();
                } else {
                    // Handle post not found
                    const titleEl = document.getElementById('post-title');
                    const subtitleEl = document.getElementById('post-subtitle');
                    if (titleEl) titleEl.innerText = 'Article Not Found';
                    if (subtitleEl) subtitleEl.innerText = 'The requested article could not be located.';
                }
            } catch (error) {
                handleFirestoreError(error, OperationType.GET, `blogPosts/${postId}`);
            }
        }
    };

    loadBlogPosts();
    handleBlogParams();
});
