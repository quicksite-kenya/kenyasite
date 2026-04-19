import { auth, db, signInWithEmail, signUpWithEmail, logOut } from './firebase.js';
import { collection, query, where, getDocs, addDoc, serverTimestamp, doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
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

    const updateDashboardUI = async (user) => {
        if (!user) {
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
            }
            return;
        }

        loginState.style.display = 'none';
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

                if (!isPaid) {
                    if (unpaidWarning) unpaidWarning.style.display = 'block';
                    if (previewLinkBox) previewLinkBox.style.opacity = '0.3';
                    if (amountDueDisplay) {
                        amountDueDisplay.innerText = plan.includes('Starter') ? 'KES 2,300' : (plan.includes('Growth') ? 'KES 2,800' : 'KES 3,500');
                    }
                    visitLinkBtn.classList.add('disabled');
                    visitLinkBtn.href = "#";
                    siteUrl.innerText = 'Activation Pending Payment...';
                } else {
                    if (unpaidWarning) unpaidWarning.style.display = 'none';
                    if (previewLinkBox) previewLinkBox.style.opacity = '1';
                    
                    let link;
                    if (data.status === 'Preview' && data.previewToken) {
                        const sub = data.subdomain || 'pending';
                        link = `https://${sub}.quicksitekenya.co.ke/preview?token=${data.previewToken}`;
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
                const costMap = {
                    'Starter Presence': 'KES 11,999',
                    'Business Growth': 'KES 14,999',
                    'Pro Conversion System': 'KES 19,999'
                };
                const cost = costMap[plan] || 'KES 11,499';

                if (billingAmount) billingAmount.innerText = isPaid ? 'KES 0' : cost;
                if (billingStatus) {
                    billingStatus.innerText = data.paymentStatus || 'Unpaid';
                    billingStatus.className = `status-badge ${isPaid ? 'status-published' : 'status-development'}`;
                }
                
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
                    clientEmail: document.getElementById('newClientEmail').value,
                    businessName: document.getElementById('newClientBusiness').value,
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
                await updateDoc(doc(db, 'clientSites', docId), {
                    featuresEnabled: ['Features', 'Pricing', 'Testimonials', 'CTA'],
                    features: [
                        { icon: 'shield', title: 'Bank-Grade Security', desc: 'State of the art protection.' },
                        { icon: 'zap', title: 'Lightning Fast', desc: 'Optimized for performance.' }
                    ],
                    cta: { title: 'Ready to Scale?', btn: 'Get Started' }
                });
                alert("Elite data injected.");
            } catch (err) { alert("Inject failed."); }
        });
    }

    const genLinkBtn = document.getElementById('generatePreviewLinkBtn');
    if (genLinkBtn) {
        genLinkBtn.addEventListener('click', async () => {
            const docId = document.getElementById('editClientId').value;
            const token = Math.random().toString(36).substring(7);
            try {
                await updateDoc(doc(db, 'clientSites', docId), { previewToken: token, status: 'Preview' });
                const sub = document.getElementById('editSubdomain').value || 'pending';
                document.getElementById('previewLinkOutput').value = `https://${sub}.quicksitekenya.co.ke/preview?token=${token}`;
                document.getElementById('previewLinkOutput').style.display = 'block';
            } catch (err) { alert("Link generation failed."); }
        });
    }

    // Authentication listeners
    onAuthStateChanged(auth, (user) => updateDashboardUI(user));

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                if (isSignUpMode) {
                    await signUpWithEmail(emailInput.value, passwordInput.value);
                } else {
                    await signInWithEmail(emailInput.value, passwordInput.value);
                }
            } catch (err) {
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
            const selectedPackage = e.target.getAttribute('data-package');
            const user = auth.currentUser;
            if (!user) return;
            try {
                await addDoc(collection(db, 'clientSites'), {
                    clientName: user.email.split('@')[0],
                    clientEmail: user.email,
                    plan: selectedPackage,
                    status: 'Draft',
                    paymentStatus: 'Unpaid',
                    createdAt: serverTimestamp()
                });
                updateDashboardUI(user);
            } catch (err) { console.error(err); }
        });
    });

    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(siteUrl.innerText);
            alert("Copied!");
        });
    }
});
