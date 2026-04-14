import * as THREE from 'three';
import { db, auth, logOut, signInWithEmail, signUpWithEmail, serverTimestamp, storage } from './firebase.js';
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
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: text,
                    history: chatHistory 
                })
            });

            if (!response.ok) throw new Error('Server response was not ok');
            
            const data = await response.json();
            const responseText = data.text;
            
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
            addMessage("I apologize, but my digital pathways are currently congested. Please try again or use our contact form.", 'bot');
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

    const openAddWebsiteModal = (preSelectedCategory = null) => {
        const modal = document.getElementById('addWebsiteModal');
        if (!modal) return;
        
        modal.style.display = 'block';
        if (preSelectedCategory) {
            selectCategory(preSelectedCategory);
        } else {
            // Reset if no category provided
            const options = document.querySelectorAll('.category-option');
            options.forEach(opt => opt.classList.remove('active'));
            const hiddenInput = document.getElementById('siteCategory');
            if (hiddenInput) hiddenInput.value = '';
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
        hamburger.addEventListener('click', () => {
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

        if (serviceParam) {
            const serviceSelect = document.getElementById('contactService');
            if (serviceSelect) {
                serviceSelect.value = serviceParam;
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
                await addDoc(collection(db, 'inquiries'), data);
                
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
                    // Play a subtle sound if possible or just the toast
                }
            }
            isInitialLoad = false;
        }, (error) => {
            console.error("Global Inquiries Listener Error:", error);
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
        
        // Update navbar link
        if (adminNavLi) {
            adminNavLi.style.display = isAdmin ? 'block' : 'none';
        }

        if (manageBlogBtn) {
            manageBlogBtn.style.display = isAdmin ? 'inline-flex' : 'none';
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
                userIndicator.innerText = `Logged in as: ${userEmail || 'Administrator'}`;
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
                console.log("Admin access granted for:", userEmail);
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
                        console.error("Auto-signup failed:", signupErr);
                        isLoggingIn = false;
                        if (loadingOverlay) loadingOverlay.style.display = 'none';
                        showToast('Sign In failed: Invalid email or password.', 'error');
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

    // Helper to upload files to Firebase Storage
    const uploadFile = async (file, path) => {
        if (!file) return null;
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    };

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
            
            const mainImageFile = document.getElementById('siteImageFile').files[0];
            const galleryFiles = document.getElementById('siteGalleryFiles').files;

            const submitBtn = addWebsiteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Uploading...';
            submitBtn.disabled = true;

            try {
                if (!mainImageFile) {
                    showToast('Please select a preview image.', 'error');
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                    return;
                }

                // Upload main image
                const mainImgUrl = await uploadFile(mainImageFile, `marketplace/${Date.now()}_main_${mainImageFile.name}`);
                
                // Upload gallery images
                const galleryUrls = [];
                for (let i = 0; i < galleryFiles.length; i++) {
                    const url = await uploadFile(galleryFiles[i], `marketplace/${Date.now()}_gallery_${i}_${galleryFiles[i].name}`);
                    if (url) galleryUrls.push(url);
                }

                await addDoc(collection(db, 'marketplaceItems'), {
                    name,
                    category,
                    price,
                    desc,
                    img: mainImgUrl,
                    galleryImages: galleryUrls,
                    link,
                    createdAt: serverTimestamp()
                });

                addWebsiteForm.reset();
                // Reset category selector
                const options = document.querySelectorAll('.category-option');
                options.forEach(opt => opt.classList.remove('active'));
                const hiddenInput = document.getElementById('siteCategory');
                if (hiddenInput) hiddenInput.value = '';

                if (addWebsiteModal) addWebsiteModal.style.display = 'none';
                
                showToast('Website submitted successfully!');
                
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
            
            newItem.innerHTML = `
                <img src="${safeImgUrl}" alt="${itemName}" referrerPolicy="no-referrer">
                <div class="portfolio-overlay">
                    <h3>${itemName}</h3>
                    <p>${itemCategory}</p>
                    <a href="${itemLink}" class="btn btn-primary btn-sm" target="_blank">View Live Site</a>
                </div>
            `;
            
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
                
                newItem.innerHTML = `
                    <div class="featured-img">
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
            let siteImgUrl = null;
            let siteGallery = [];
            try {
                const q = query(collection(db, 'marketplaceItems'), where('name', '==', siteName), limit(1));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const data = querySnapshot.docs[0].data();
                    siteImgUrl = data.img;
                    siteGallery = data.galleryImages || [];
                }
            } catch (error) {
                console.error("Error fetching site details:", error);
            }

            const seed = encodeURIComponent(siteName.replace(/\s+/g, ''));
            const fallbackImg = getSafeImageUrl(`https://placehold.co/800x500/1a1a1a/d4af37?text=Preview`, seed, 800, 500);
            
            let galleryData = [];
            
            if (siteGallery && siteGallery.length > 0) {
                galleryData = siteGallery.map((url, index) => ({
                    url: getSafeImageUrl(url, siteName),
                    cap: index === 0 ? 'Homepage Overview' : `Feature Highlight ${index}`
                }));
            } else {
                const img1 = siteImgUrl ? getSafeImageUrl(siteImgUrl, siteName) : fallbackImg;
                galleryData = [
                    { url: img1, cap: 'Homepage Overview' },
                    { url: img1, cap: 'Core Features' },
                    { url: img1, cap: 'User Dashboard' },
                    { url: img1, cap: 'Mobile Responsive View' }
                ];
            }

            if (galleryData) {
                const gallerySection = document.createElement('section');
                gallerySection.className = 'site-gallery-section';
                gallerySection.innerHTML = `
                    <div class="container">
                        <div class="section-header">
                            <h2>Project <span>Gallery</span></h2>
                            <p>Visual highlights of the ${siteName} digital experience.</p>
                        </div>
                        <div class="gallery-grid">
                            ${galleryData.map(img => `
                                <div class="gallery-item">
                                    <img src="${img.url}" alt="${img.cap}" referrerPolicy="no-referrer">
                                    <div class="gallery-caption">${img.cap}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                
                // Insert after the page header
                const pageHeader = document.querySelector('.page-header');
                if (pageHeader && pageHeader.parentNode) {
                    pageHeader.parentNode.insertBefore(gallerySection, pageHeader.nextSibling);
                }
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
                        <div style="display: flex; gap: 10px; margin-top: 20px;">
                            <a href="blog-post.html?id=${postId}" class="btn btn-primary">Explore Article</a>
                            ${isAdmin ? `
                                <button class="btn btn-secondary edit-post-btn" data-id="${postId}" style="padding: 8px 15px; font-size: 0.7rem;">Edit</button>
                                <button class="btn btn-primary delete-post-btn" data-id="${postId}" style="padding: 8px 15px; font-size: 0.7rem; background: #ff4444; border-color: #ff4444;">Delete</button>
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
                const fileInput = document.getElementById('postImgFile');
                if (fileInput) {
                    fileInput.dataset.oldUrl = post.img;
                    fileInput.required = false; // Not required when editing
                }
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

    if (blogPostForm) {
        blogPostForm.onsubmit = async (e) => {
            e.preventDefault();
            const editId = document.getElementById('editPostId').value;
            const featuredImageFile = document.getElementById('postImgFile').files[0];
            const oldImgUrl = document.getElementById('postImgFile').dataset.oldUrl;

            const submitBtn = blogPostForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Uploading...';
            submitBtn.disabled = true;

            try {
                let featuredImgUrl = oldImgUrl;
                if (featuredImageFile) {
                    featuredImgUrl = await uploadFile(featuredImageFile, `blog/${Date.now()}_${featuredImageFile.name}`);
                }

                if (!featuredImgUrl && !editId) {
                    showToast('Please select a featured image.', 'error');
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                    return;
                }

                const postData = {
                    title: document.getElementById('postTitleInput').value,
                    subtitle: document.getElementById('postSubtitleInput').value,
                    img: featuredImgUrl,
                    category: document.getElementById('postCategoryInput').value,
                    content: document.getElementById('postContentInput').value,
                    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                    createdAt: serverTimestamp()
                };

                if (editId) {
                    await updateDoc(doc(db, 'blogPosts', editId), postData);
                    showToast('Insight updated successfully.');
                } else {
                    await addDoc(collection(db, 'blogPosts'), postData);
                    showToast('New elite insight published.');
                }
                blogPostModal.style.display = 'none';
                blogPostForm.reset();
                document.getElementById('postImgFile').required = true; // Reset requirement
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
