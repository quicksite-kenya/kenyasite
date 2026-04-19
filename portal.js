import { auth, db, signInWithEmail, signUpWithEmail, logOut } from './firebase.js';
import { collection, query, where, getDocs, addDoc, serverTimestamp, doc, updateDoc, getDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    // Re-initialize Lucide Icons
    if (window.lucide) window.lucide.createIcons();

    // DOM Elements
    const loginState = document.getElementById('portalLoginState');
    const dashboardState = document.getElementById('portalDashboardState');
    const loginForm = document.getElementById('clientLoginForm');
    const emailInput = document.getElementById('clientEmail');
    const passwordInput = document.getElementById('clientPassword');
    const logoutBtn = document.getElementById('clientLogoutBtn');
    
    // Auth Toggle Elements
    const formTitle = document.getElementById('formTitle');
    const formDesc = document.getElementById('formDesc');
    const submitBtn = document.getElementById('submitBtn');
    const toggleModeText = document.getElementById('toggleModeText');
    const toggleModeBtn = document.getElementById('toggleModeBtn');
    
    let isSignUpMode = false;
    
    // --- Ad-Blocker Proactive Detection ---
    // --- Elite Security Sentinel ---
    const logSecurityAlert = async (type, severity, details, email = 'unknown') => {
        try {
            await addDoc(collection(db, 'security_logs'), {
                type,
                severity,
                details,
                email,
                timestamp: serverTimestamp(),
                userAgent: navigator.userAgent
            });
            if (severity === 'high' || severity === 'critical') {
                showSecurityToast(`SECURITY ALERT: ${type} detected!`, 'error');
            }
        } catch (err) { console.warn("Sentinel failed to log:", err); }
    };

    const loadSecurityLogs = async () => {
        const feed = document.getElementById('securityLogFeed');
        const alertCount = document.getElementById('securityAlertCount');
        if (!feed) return;

        try {
            const q = query(collection(db, 'security_logs'));
            const snap = await getDocs(q);
            
            if (snap.empty) {
                feed.innerHTML = '<div style="text-align: center; padding: 40px; color: #555;">No suspicious activity detected. Systems are green.</div>';
                if (alertCount) alertCount.style.display = 'none';
                return;
            }

            const logs = snap.docs.map(d => ({id: d.id, ...d.data()})).sort((a,b) => (b.timestamp?.toMillis() || 0) - (a.timestamp?.toMillis() || 0));
            
            if (alertCount) {
                alertCount.innerText = logs.length;
                alertCount.style.display = 'inline-block';
            }

            feed.innerHTML = logs.map(log => `
                <div style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; gap: 15px; align-items: flex-start;">
                    <div style="width: 10px; height: 10px; border-radius: 50%; margin-top: 5px; background: ${log.severity === 'high' || log.severity === 'critical' ? '#ff4d4d' : '#ffc107'}; box-shadow: 0 0 10px ${log.severity === 'high' ? '#ff4d4d' : '#ffc107'}; flex-shrink: 0;"></div>
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <strong style="color: white; font-size: 0.85rem;">${log.type}</strong>
                            <span style="color: #666; font-size: 0.7rem;">${log.timestamp ? new Date(log.timestamp.toMillis()).toLocaleString() : 'Just now'}</span>
                        </div>
                        <p style="color: #aaa; font-size: 0.8rem; margin: 0;">${log.details}</p>
                        <p style="color: #555; font-size: 0.65rem; margin-top: 4px;">Email Key: ${log.email}</p>
                    </div>
                </div>
            `).join('');

        } catch (err) { console.error("Logs load failed:", err); }
    };

    const showSecurityToast = (msg, type = 'info') => {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 9999;
            padding: 15px 25px; border-radius: 12px; background: ${type === 'error' ? '#7f1d1d' : '#1e3a8a'};
            color: white; font-size: 0.9rem; font-weight: 600; border: 1px solid ${type === 'error' ? '#ef4444' : '#3b82f6'};
            box-shadow: 0 10px 25px rgba(0,0,0,0.5); transform: translateX(150%); transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex; align-items: center; gap: 10px;
        `;
        toast.innerHTML = `<i data-lucide="${type === 'error' ? 'shield-alert' : 'info'}" style="width: 20px;"></i> ${msg}`;
        document.body.appendChild(toast);
        if (window.lucide) window.lucide.createIcons();
        requestAnimationFrame(() => toast.style.transform = 'translateX(0)');
        setTimeout(() => {
            toast.style.transform = 'translateX(150%)';
            setTimeout(() => toast.remove(), 600);
        }, 5000);
    };

    // Admin Tab Switching
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            document.querySelectorAll('.admin-tab-content').forEach(c => c.style.display = 'none');
            document.querySelectorAll('.admin-tab-btn').forEach(b => {
                b.classList.remove('active');
                b.style.color = '#888';
                b.style.background = 'transparent';
            });
            
            document.getElementById(`admin-${target}`).style.display = 'block';
            btn.classList.add('active');
            btn.style.color = 'white';
            btn.style.background = 'rgba(255,255,255,0.05)';
            
            if (target === 'security-tab') loadSecurityLogs();
            if (target === 'clients-tab') loadAdminClients();
        });
    });

    const clearLogsBtn = document.getElementById('clearSecurityLogsBtn');
    if (clearLogsBtn) {
        clearLogsBtn.addEventListener('click', async () => {
            if (confirm("Clear all security audit logs?")) {
                try {
                    const snap = await getDocs(collection(db, 'security_logs'));
                    const promises = snap.docs.map(d => deleteDoc(doc(db, 'security_logs', d.id)));
                    await Promise.all(promises);
                    loadSecurityLogs();
                } catch (err) { alert("Failed to clear logs."); }
            }
        });
    }

    const checkAdBlocker = async () => {
        const domains = [
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
            'https://securetoken.googleapis.com/v1/token',
            'https://firebaseinstallations.googleapis.com/v1/projects/'
        ];
        try {
            await Promise.all(domains.map(url => 
                fetch(url, { method: 'HEAD', mode: 'no-cors' }).catch(e => { throw e; })
            ));
        } catch (err) {
            console.warn("AD-BLOCKER ALERT: Critical security domains are blocked.");
            const networkNote = document.getElementById('authNetworkNote');
            if (networkNote) {
                networkNote.style.display = 'block';
            }
        }
    };
    checkAdBlocker();

    if (toggleModeBtn) {
        toggleModeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            isSignUpMode = !isSignUpMode;
            if (isSignUpMode) {
                formTitle.innerText = 'Create Account';
                formDesc.innerText = 'Register to track your QuickSite order and assets.';
                submitBtn.innerText = 'Sign Up';
                toggleModeText.innerText = 'Already have an account?';
                toggleModeBtn.innerText = 'Sign In';
            } else {
                formTitle.innerText = 'Client Sign In';
                formDesc.innerText = 'Please sign in to access your digital assets and subscription details.';
                submitBtn.innerText = 'Access Dashboard';
                toggleModeText.innerText = 'Don\'t have an account?';
                toggleModeBtn.innerText = 'Sign Up';
            }
        });
    }
    
    // Dashboard Elements
    const welcomeText = document.getElementById('welcomeText');
    const planName = document.getElementById('dashPlanName');
    const planStatus = document.getElementById('dashPlanStatus');
    const siteStatus = document.getElementById('dashSiteStatus');
    const siteUrl = document.getElementById('dashSiteUrl');
    const featureList = document.getElementById('dashFeatures');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const visitLinkBtn = document.getElementById('visitLinkBtn');

    // Packages Definition System
    const packages = {
        'Starter Presence': [
            '1-page automated business website',
            'Free subdomain',
            'WhatsApp integration',
            'SSL + secure hosting'
        ],
        'Business Growth': [
            '5–7 page business website',
            'Custom domain support',
            'Lead capture database',
            'WhatsApp + email automation',
            'SEO setup + Google Maps'
        ],
        'Pro Conversion System': [
            'Booking system setup',
            'CRM customer tracking',
            'Analytics dashboard',
            'AI-generated content'
        ]
    };

    // Global Sentinel Listener for Admins
    let securityListener = null;

    const updateDashboardUI = async (user) => {
        if (!user) {
            if (securityListener) {
                securityListener();
                securityListener = null;
            }
            loginState.style.display = 'block';
            dashboardState.style.display = 'none';
            if (document.getElementById('adminPortalView')) document.getElementById('adminPortalView').style.display = 'none';
            return;
        }

        // Admin override
        if (user.email === 'michaelmulili41@gmail.com') {
            loginState.style.display = 'none';
            dashboardState.style.display = 'none';
            welcomeText.innerHTML = `Welcome Admin, <span>${user.email.split('@')[0]}</span>`;
            const adminView = document.getElementById('adminPortalView');
            if (adminView) {
                adminView.style.display = 'block';
                loadAdminClients();
                loadSecurityLogs();
                
                // Active Sentinel Monitoring
                if (!securityListener) {
                    const qLogs = query(collection(db, 'security_logs'));
                    securityListener = onSnapshot(qLogs, (snap) => {
                        const newLogs = snap.docChanges().filter(change => change.type === 'added');
                        if (newLogs.length > 0 && !snap.metadata.hasPendingWrites) {
                            loadSecurityLogs();
                            // Only notify for fresh alerts from others
                            newLogs.forEach(change => {
                                const log = change.doc.data();
                                if (log.severity === 'high' || log.severity === 'critical') {
                                    showSecurityToast(`REAL-TIME ALERT: ${log.type} detected!`, 'error');
                                }
                            });
                        }
                    });
                }
            }
            return;
        }
        dashboardState.style.display = 'block';
        welcomeText.innerHTML = `Welcome back, <span>${user.email.split('@')[0]}</span>`;

        try {
            // Fetch Client's Web Asset
            const q = query(collection(db, 'clientSites'), where('clientEmail', '==', user.email));
            const snapshot = await getDocs(q);

            const hasPackageView = document.getElementById('hasPackageView');
            const noPackageView = document.getElementById('noPackageView');
            const unpaidWarning = document.getElementById('unpaidWarning');
            const amountDueDisplay = document.getElementById('amountDueDisplay');
            const previewLinkBox = document.querySelector('.preview-link-box');

            if (snapshot.empty) {
                if (hasPackageView) hasPackageView.style.display = 'none';
                if (noPackageView) noPackageView.style.display = 'block';
            } else {
                if (hasPackageView) hasPackageView.style.display = 'block';
                if (noPackageView) noPackageView.style.display = 'none';

                const docSnap = snapshot.docs[0];
                const data = docSnap.data();
                
                const plan = data.plan || 'Starter Presence';
                planName.innerText = plan;
                const isPaid = data.paymentStatus === 'Paid';
                planStatus.innerText = isPaid ? 'Active' : 'Unpaid';
                planStatus.className = `status-badge ${isPaid ? 'status-published' : 'status-development'}`;

                const costMap = {
                    'Starter Presence': 'KES 11,999',
                    'Business Growth': 'KES 14,999',
                    'Pro Conversion System': 'KES 19,999'
                };
                const cost = costMap[plan] || 'KES 11,999';

                if (!isPaid) {
                    if (unpaidWarning) unpaidWarning.style.display = 'block';
                    if (previewLinkBox) previewLinkBox.style.opacity = '0.3';
                    if (amountDueDisplay) {
                        amountDueDisplay.innerText = cost;
                    }
                    visitLinkBtn.classList.add('disabled');
                    visitLinkBtn.href = "#";
                    siteUrl.innerText = 'Activation Pending Payment...';
                } else {
                    if (unpaidWarning) unpaidWarning.style.display = 'none';
                    if (previewLinkBox) previewLinkBox.style.opacity = '1';
                    
                    let link;
                    if (data.status === 'Preview') {
                        link = `${window.location.origin}/site.html?id=${docSnap.id}&preview=true`;
                    } else {
                        link = data.customDomain || (data.subdomain ? `${data.subdomain}.quicksitekenya.co.ke` : 'Pending Generation');
                    }
                    
                    siteUrl.innerText = link;
                    visitLinkBtn.href = link.startsWith('http') ? link : `https://${link}`;
                    visitLinkBtn.classList.remove('disabled');
                }

                const features = packages[plan] || packages['Starter Presence'];
                featureList.innerHTML = features.map(f => `<li><i data-lucide="check-circle"></i> ${f}</li>`).join('');

                siteStatus.innerText = data.status || 'Development';
                siteStatus.className = `status-badge ${data.status === 'Live' ? 'status-published' : 'status-preview'}`;

                const billingAmount = document.getElementById('dashBillingAmount');
                const billingStatus = document.getElementById('dashBillingStatus');

                if (billingAmount) billingAmount.innerText = isPaid ? 'KES 0' : cost;
                if (billingStatus) {
                    billingStatus.innerText = data.paymentStatus || 'Unpaid';
                    billingStatus.className = `status-badge ${isPaid ? 'status-published' : 'status-development'}`;
                }
                
                const projectVisionText = document.getElementById('clientProjectVision');
                if (projectVisionText) projectVisionText.value = data.projectVision || '';

                const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
                if (confirmPaymentBtn) {
                    const newBtn = confirmPaymentBtn.cloneNode(true);
                    confirmPaymentBtn.parentNode.replaceChild(newBtn, confirmPaymentBtn);
                    
                    if (isPaid) {
                        newBtn.innerText = 'Payment Complete';
                        newBtn.disabled = true;
                    } else {
                        newBtn.innerHTML = '<i data-lucide="message-circle" style="width: 16px; height: 16px;"></i> Verify Payment';
                        newBtn.addEventListener('click', () => {
                            const message = encodeURIComponent(`Hello, I paid ${cost} for my ${plan}. Email: ${user.email}`);
                            window.open(`https://wa.me/254708691648?text=${message}`, '_blank');
                        });
                    }
                }
            }
            if (window.lucide) window.lucide.createIcons();
        } catch (error) {
            console.error("Dashboard error:", error);
        }
    };

    // --- Admin Functionality ---
    const loadAdminClients = async () => {
        const cardsContainer = document.getElementById('adminClientCards');
        if (!cardsContainer) return;

        try {
            const q = query(collection(db, 'clientSites'));
            const snapshot = await getDocs(q);

            if (snapshot.empty) {
                cardsContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: #555;">No records found.</div>';
                return;
            }

            cardsContainer.innerHTML = '';
            snapshot.forEach(docSnap => {
                const data = docSnap.data();
                const id = docSnap.id;
                const link = data.customDomain || (data.subdomain ? `https://${data.subdomain}.quicksitekenya.co.ke` : '#');
                const status = data.status || 'Draft';
                const plan = data.plan || 'Starter Presence';
                
                const card = document.createElement('div');
                card.className = "client-card"; // Added class for potential styling
                card.style.cssText = `
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 16px;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                    margin-bottom: 12px;
                `;
                
                card.innerHTML = `
                    <div>
                        <h4 style="color: var(--primary-color); font-size: 1.1rem; font-weight: 700; margin-bottom: 4px;">${data.businessName || 'Elite Business'} <span style="font-weight: normal; color: #777; font-size: 0.8rem;">(${data.clientEmail?.split('@')[0]})</span></h4>
                        <p style="color: #888; font-size: 0.8rem; margin-bottom: 10px;">${plan} | ${data.template || 'Default'}</p>
                        <div style="display: flex; gap: 6px;">
                            <span style="background: rgba(212,175,55,0.1); color: var(--primary-color); padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700;">${plan}</span>
                            <span style="background: rgba(255,255,255,0.05); color: #aaa; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem;">${status}</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <a href="${link}" target="_blank" class="btn btn-icon" style="background: rgba(255,255,255,0.05); width: 40px; height: 40px; padding: 0; display: flex; align-items: center; justify-content: center; border-radius: 8px; color: var(--primary-color);">
                            <i data-lucide="external-link" style="width: 18px;"></i>
                        </a>
                        <button class="btn btn-primary admin-edit-client" data-id="${id}" style="padding: 8px 16px; border-radius: 8px; font-size: 0.85rem;">Manage</button>
                        <button class="btn admin-delete-client" data-id="${id}" style="background: rgba(239, 68, 68, 0.2); color: #ef4444; border: none; padding: 10px; border-radius: 8px;">
                            <i data-lucide="trash-2" style="width: 18px;"></i>
                        </button>
                    </div>
                `;
                cardsContainer.appendChild(card);
            });

            if (window.lucide) window.lucide.createIcons();
            bindAdminActions();

        } catch (err) {
            console.error("Admin Load Error:", err);
        }
    };

    const bindAdminActions = () => {
        document.querySelectorAll('.admin-edit-client').forEach(btn => {
            btn.addEventListener('click', async () => {
                const docId = btn.getAttribute('data-id');
                const modal = document.getElementById('adminEditModal');
                if (!modal) return;
                
                try {
                    const docSnap = await getDoc(doc(db, 'clientSites', docId));
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        document.getElementById('editClientId').value = docId;
                        document.getElementById('editPaymentStatus').value = data.paymentStatus || 'Unpaid';
                        document.getElementById('editPlan').value = data.plan || 'Starter Presence';
                        document.getElementById('editEnvStatus').value = data.status || 'Draft';
                        document.getElementById('editSubdomain').value = data.subdomain || '';
                        document.getElementById('editTemplate').value = data.template || '';
                        document.getElementById('editBusinessName').value = data.businessName || '';
                        document.getElementById('editHeroTitle').value = data.hero?.title || '';
                        document.getElementById('editHeroSubtitle').value = data.hero?.subtitle || '';
                        document.getElementById('editCustomDomain').value = data.customDomain || '';
                        const editVision = document.getElementById('editProjectVision');
                        if (editVision) editVision.value = data.projectVision || '';
                        modal.style.display = 'flex';
                    }
                } catch (err) { alert("Load failed."); }
            });
        });

        document.querySelectorAll('.admin-delete-client').forEach(btn => {
            btn.addEventListener('click', async () => {
                if (confirm("Delete this client environment?")) {
                    await deleteDoc(doc(db, 'clientSites', btn.getAttribute('data-id')));
                    loadAdminClients();
                }
            });
        });
    };

    // Bind Admin Control Buttons
    const saveEditBtn = document.getElementById('saveAdminEditBtn');
    if (saveEditBtn) {
        saveEditBtn.addEventListener('click', async () => {
            const docId = document.getElementById('editClientId').value;
            const updates = {
                paymentStatus: document.getElementById('editPaymentStatus').value,
                plan: document.getElementById('editPlan').value,
                status: document.getElementById('editEnvStatus').value,
                subdomain: document.getElementById('editSubdomain').value,
                template: document.getElementById('editTemplate').value,
                businessName: document.getElementById('editBusinessName').value,
                customDomain: document.getElementById('editCustomDomain').value,
                hero: {
                    title: document.getElementById('editHeroTitle').value,
                    subtitle: document.getElementById('editHeroSubtitle').value
                },
                projectVision: document.getElementById('editProjectVision')?.value || '',
                updatedAt: serverTimestamp()
            };
            try {
                await updateDoc(doc(db, 'clientSites', docId), updates);
                document.getElementById('adminEditModal').style.display = 'none';
                loadAdminClients();
            } catch (err) { alert("Save failed."); }
        });
    }

    const closeEditBtn = document.getElementById('closeAdminEditModal');
    if (closeEditBtn) closeEditBtn.addEventListener('click', () => document.getElementById('adminEditModal').style.display = 'none');

    const addClientBtn = document.getElementById('addNewClientBtn');
    if (addClientBtn) addClientBtn.addEventListener('click', () => document.getElementById('createClientModal').style.display = 'flex');

    const closeCreateBtn = document.getElementById('closeCreateClientModal');
    if (closeCreateBtn) closeCreateBtn.addEventListener('click', () => document.getElementById('createClientModal').style.display = 'none');

    const createForm = document.getElementById('createClientForm');
    if (createForm) {
        createForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                await addDoc(collection(db, 'clientSites'), {
                    clientName: document.getElementById('newClientEmail').value.split('@')[0],
                    clientEmail: document.getElementById('newClientEmail').value,
                    businessName: document.getElementById('newClientBusiness').value,
                    template: 'Default',
                    plan: document.getElementById('newClientPlan').value,
                    status: 'Draft',
                    paymentStatus: 'Unpaid',
                    createdAt: serverTimestamp()
                });
                createForm.reset();
                document.getElementById('createClientModal').style.display = 'none';
                loadAdminClients();
            } catch (err) { alert("Create failed."); }
        });
    }

    // Modal behavior for Elite Data Injection
    const injectBtn = document.getElementById('injectEliteDataBtn');
    if (injectBtn) {
        injectBtn.addEventListener('click', async () => {
            const docId = document.getElementById('editClientId').value;
            if (!docId) return;
            try {
                // Ensure required base fields are present for security rules validation
                await updateDoc(doc(db, 'clientSites', docId), {
                    featuresEnabled: ['Features', 'Pricing', 'Testimonials', 'CTA'],
                    features: [
                        { icon: 'shield', title: 'Bank-Grade Security', desc: 'Secure high-performance hosting on global CDNs.' },
                        { icon: 'zap', title: 'Lightning Performance', desc: 'Optimized Vercel deployment for instant load times.' },
                        { icon: 'smartphone', title: 'Mobile First', desc: 'Flawless experience on every device size.' },
                        { icon: 'message-circle', title: 'WhastApp CRM', desc: 'Instant customer connection via WhatsApp.' }
                    ],
                    cta: { title: 'Ready to Transform Your Business?', btn: 'Secure Your Slot' },
                    template: 'Universal Professional', // Inject elite template too
                    updatedAt: serverTimestamp()
                });
                alert("Elite data injected successfully.");
            } catch (err) { alert("Inject failed."); }
        });
    }

    const genLinkBtn = document.getElementById('generatePreviewLinkBtn');
    const shareWhatsAppBtn = document.getElementById('shareWhatsAppBtn');
    const previewOutput = document.getElementById('previewLinkOutput');

    if (genLinkBtn) {
        genLinkBtn.addEventListener('click', async () => {
            const docId = document.getElementById('editClientId').value;
            const token = Math.random().toString(36).substring(7);
            const originalText = genLinkBtn.innerHTML;
            
            genLinkBtn.innerHTML = '<i data-lucide="loader" class="spin" style="width: 14px;"></i> Generating...';
            genLinkBtn.disabled = true;

            try {
                await updateDoc(doc(db, 'clientSites', docId), { previewToken: token, status: 'Preview' });

                const finalLink = `${window.location.origin}/site.html?id=${docId}&preview=true`;
                
                if (previewOutput) {
                    previewOutput.value = finalLink;
                    previewOutput.style.display = 'block';
                }
                
                if (shareWhatsAppBtn) {
                    shareWhatsAppBtn.style.display = 'flex';
                    shareWhatsAppBtn.onclick = () => {
                        const businessName = document.getElementById('editBusinessName').value || 'your website';
                        const message = encodeURIComponent(`Hello! Your elite preview for ${businessName} is ready for review: ${finalLink}\n\nNote: This link is temporary.`);
                        window.open(`https://wa.me/?text=${message}`, '_blank');
                    };
                }

                if (window.lucide) window.lucide.createIcons();
            } catch (err) { 
                console.error("Link gen failed:", err);
                alert("Link generation failed."); 
            } finally {
                genLinkBtn.innerHTML = originalText;
                genLinkBtn.disabled = false;
                if (window.lucide) window.lucide.createIcons();
            }
        });
    }

    const saveVisionBtn = document.getElementById('saveVisionBtn');
    if (saveVisionBtn) {
        saveVisionBtn.addEventListener('click', async () => {
            const user = auth.currentUser;
            if (!user) return;
            
            const vision = document.getElementById('clientProjectVision').value;
            const successMsg = document.getElementById('visionSuccess');
            
            try {
                const q = query(collection(db, 'clientSites'), where('clientEmail', '==', user.email));
                const snap = await getDocs(q);
                if (!snap.empty) {
                    const docId = snap.docs[0].id;
                    await updateDoc(doc(db, 'clientSites', docId), { 
                        projectVision: vision,
                        updatedAt: serverTimestamp()
                    });
                    if (successMsg) {
                        successMsg.style.display = 'block';
                        setTimeout(() => successMsg.style.display = 'none', 3000);
                    }
                } else {
                    alert("Could not find your project record. Please reach out to support if this persists.");
                }
            } catch (err) {
                console.error("Vision save failed:", err);
                // Reveal more info for debugging
                const errMsg = err.message || "Unknown error";
                alert(`Failed to save project brief. Details: ${errMsg}`);
            }
        });
    }

    // Authentication listeners
    onAuthStateChanged(auth, (user) => updateDashboardUI(user));

    if (loginForm) {
        let authFailures = 0;
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = emailInput.value;
            try {
                if (isSignUpMode) {
                    await signUpWithEmail(email, passwordInput.value);
                } else {
                    await signInWithEmail(email, passwordInput.value);
                }
                authFailures = 0; // Reset on success
            } catch (err) {
                authFailures++;
                const severity = authFailures >= 3 ? 'high' : 'medium';
                logSecurityAlert('Failed Authentication', severity, `Login failure for ${email}. Error: ${err.code}`, email);
                
                alert("Auth Error: " + err.message);
                if (err.code === 'auth/network-request-failed') window.open(window.location.href, '_blank');
            }
        });
    }

    if (logoutBtn) logoutBtn.addEventListener('click', () => logOut());
    const adminLogoutBtn = document.getElementById('adminPortalLogoutBtn');
    if (adminLogoutBtn) adminLogoutBtn.addEventListener('click', () => logOut());

    // Package Selection (For Clients)
    const packageBtns = document.querySelectorAll('.select-package-btn');
    packageBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const selectedPackage = btn.getAttribute('data-package');
            const user = auth.currentUser;
            if (!user) return;
            
            const originalText = btn.innerText;
            btn.innerText = 'Initializing...';
            btn.disabled = true;

            try {
                // Security rules require: clientName, businessName, template, plan, status, createdAt
                await addDoc(collection(db, 'clientSites'), {
                    clientName: user.email.split('@')[0],
                    clientEmail: user.email,
                    businessName: `${user.email.split('@')[0]}'s Elite Site`,
                    template: 'Universal Professional', // Default template for client-initiated setup
                    plan: selectedPackage,
                    status: 'Draft',
                    paymentStatus: 'Unpaid',
                    createdAt: serverTimestamp()
                });
                updateDashboardUI(user);
            } catch (err) { 
                console.error("Setup failed:", err);
                btn.innerText = 'Setup Failed';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3000);
            }
        });
    });

    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(siteUrl.innerText);
            alert("Copied!");
        });
    }
});
