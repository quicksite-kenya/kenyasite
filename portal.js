import { auth, db, signInWithEmail, signUpWithEmail, logOut } from './firebase.js';
import { collection, query, where, getDocs, addDoc, serverTimestamp, doc, updateDoc, getDoc } from 'firebase/firestore';
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
            document.getElementById('adminPortalView').style.display = 'block';
            loadAdminClients();
            return;
        }

        loginState.style.display = 'none';
        dashboardState.style.display = 'block';
        welcomeText.innerHTML = `Welcome back, <span>${user.email.split('@')[0]}</span>`;

        try {
            // Fetch Client's Web Asset using relationship logic
            const q = query(collection(db, 'clientSites'), where('clientEmail', '==', user.email));
            const snapshot = await getDocs(q);

            const hasPackageView = document.getElementById('hasPackageView');
            const noPackageView = document.getElementById('noPackageView');
            const unpaidWarning = document.getElementById('unpaidWarning');
            const amountDueDisplay = document.getElementById('amountDueDisplay');
            const previewLinkBox = document.querySelector('.preview-link-box');

            if (snapshot.empty) {
                // No site assigned yet, show selection view
                if (hasPackageView) hasPackageView.style.display = 'none';
                if (noPackageView) noPackageView.style.display = 'block';
            } else {
                if (hasPackageView) hasPackageView.style.display = 'block';
                if (noPackageView) noPackageView.style.display = 'none';

                const docSnap = snapshot.docs[0];
                const data = docSnap.data();
                
                // Package Data
                const plan = data.plan || 'Starter Presence';
                planName.innerText = plan;
                const isPaid = data.paymentStatus === 'Paid';
                planStatus.innerText = isPaid ? 'Active' : 'Unpaid';
                planStatus.className = `status-badge ${isPaid ? 'status-published' : 'status-development'}`;

                // Unpaid logic
                if (!isPaid) {
                    if (unpaidWarning) unpaidWarning.style.display = 'block';
                    if (previewLinkBox) previewLinkBox.style.opacity = '0.3';
                    if (amountDueDisplay) {
                        amountDueDisplay.innerText = plan.includes('Starter') ? 'KES 2,299' 
                            : (plan.includes('Growth') ? 'KES 5,799' : 'KES 11,499');
                    }
                    visitLinkBtn.classList.add('disabled');
                    visitLinkBtn.href = "#";
                    siteUrl.innerText = 'Activation Pending Payment...';
                } else {
                    if (unpaidWarning) unpaidWarning.style.display = 'none';
                    if (previewLinkBox) previewLinkBox.style.opacity = '1';
                    
                    const link = data.customDomain || (data.subdomain ? `${data.subdomain}.quicksitekenya.co.ke` : 'Pending Generation');
                    siteUrl.innerText = link;
                    visitLinkBtn.href = link.startsWith('http') ? link : `https://${link}`;
                    visitLinkBtn.classList.remove('disabled');
                }

                // Render Features
                const features = packages[plan] || packages['Starter Presence'];
                featureList.innerHTML = features.map(f => `<li><i data-lucide="check-circle"></i> ${f}</li>`).join('');

                siteStatus.innerText = data.status || 'Development';
                siteStatus.className = `status-badge ${data.status === 'Live' ? 'status-published' : 'status-preview'}`;

                // Billing Logic
                const billingAmount = document.getElementById('dashBillingAmount');
                const billingStatus = document.getElementById('dashBillingStatus');
                const billingMpesaAmt = document.getElementById('dashBillingMpesaAmount');
                const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
                const billingMpesaInstructions = document.getElementById('billingMpesaInstructions');

                const costMap = {
                    'Starter Presence': 'KES 2,299',
                    'Business Growth': 'KES 5,799',
                    'Pro Conversion System': 'KES 11,499'
                };
                const cost = costMap[plan] || 'KES 11,499';

                if (billingAmount) billingAmount.innerText = isPaid ? 'KES 0' : cost;
                if (billingStatus) {
                    billingStatus.innerText = data.paymentStatus || 'Unpaid';
                    billingStatus.className = `status-badge ${isPaid ? 'status-published' : 'status-development'}`;
                }
                
                if (billingMpesaInstructions) {
                    billingMpesaInstructions.style.display = isPaid ? 'none' : 'block';
                }

                if (billingMpesaAmt) billingMpesaAmt.innerText = cost;

                if (confirmPaymentBtn) {
                    // Remove existing listeners if necessary by cloning (clean way here)
                    const newBtn = confirmPaymentBtn.cloneNode(true);
                    confirmPaymentBtn.parentNode.replaceChild(newBtn, confirmPaymentBtn);
                    
                    if (isPaid) {
                        newBtn.innerText = 'Payment Complete';
                        newBtn.disabled = true;
                        newBtn.classList.add('disabled');
                    } else {
                        newBtn.innerHTML = '<i data-lucide="message-circle" style="width: 16px; height: 16px;"></i> Verify Payment';
                        newBtn.disabled = false;
                        newBtn.classList.remove('disabled');
                        newBtn.addEventListener('click', () => {
                            const message = encodeURIComponent(`Hello QuickSite team, I have just paid ${cost} for my ${plan} package using M-PESA. My registered email is ${user.email}. Please verify my payment.`);
                            window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
                        });
                    }
                }
            }

            if (window.lucide) window.lucide.createIcons();

        } catch (error) {
            console.error("Error fetching client data:", error);
            planName.innerText = 'Connection Error';
        }
    };

    // --- Admin Functionality ---
    const loadAdminClients = async () => {
        const tableBody = document.getElementById('adminClientTableBody');
        if (!tableBody) return;

        try {
            const q = query(collection(db, 'clientSites'));
            const snapshot = await getDocs(q);

            if (snapshot.empty) {
                tableBody.innerHTML = '<tr><td colspan="6" style="padding: 20px; text-align: center; color: #aaa;">No clients registered yet.</td></tr>';
                return;
            }

            tableBody.innerHTML = '';
            snapshot.forEach(docSnap => {
                const data = docSnap.data();
                const id = docSnap.id;
                
                const link = data.customDomain || (data.subdomain ? `${data.subdomain}.quicksitekenya.co.ke` : 'Pending');
                const isPaid = data.paymentStatus === 'Paid';
                
                const tr = document.createElement('tr');
                tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
                
                tr.innerHTML = `
                    <td style="padding: 15px 10px; color: white;">
                        <strong>${data.clientName || 'Client'}</strong><br>
                        <span style="font-size: 0.75rem; color: #ccc;">${data.clientEmail}</span>
                    </td>
                    <td style="padding: 15px 10px; color: #ccc;">${data.plan || 'N/A'}</td>
                    <td style="padding: 15px 10px;">
                        <span class="status-badge ${isPaid ? 'status-published' : 'status-development'}" style="font-size: 0.6rem;">
                            ${data.paymentStatus || 'Unpaid'}
                        </span>
                    </td>
                    <td style="padding: 15px 10px;">
                        <span class="status-badge ${data.status === 'Live' ? 'status-published' : 'status-preview'}" style="font-size: 0.6rem;">
                            ${data.status || 'Draft'}
                        </span>
                    </td>
                    <td style="padding: 15px 10px; color: var(--primary-color); font-family: monospace;">${link}</td>
                    <td style="padding: 15px 10px;">
                        <button class="btn btn-secondary admin-edit-client" data-id="${id}" style="padding: 5px 10px; font-size: 0.7rem;">Manage</button>
                    </td>
                `;
                tableBody.appendChild(tr);
            });

            // Re-bind Action buttons
            document.querySelectorAll('.admin-edit-client').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const docId = e.target.getAttribute('data-id');
                    const modal = document.getElementById('adminEditModal');
                    if (!modal) return;
                    
                    e.target.innerText = 'Loading...';
                    
                    try {
                        const docRef = doc(db, 'clientSites', docId);
                        const docSnap = await getDoc(docRef);
                        
                        if (docSnap.exists()) {
                            const data = docSnap.data();
                            
                            // Populate Modal
                            document.getElementById('editClientId').value = docId;
                            document.getElementById('editPaymentStatus').value = data.paymentStatus || 'Unpaid';
                            document.getElementById('editEnvStatus').value = data.status || 'Draft';
                            document.getElementById('editSubdomain').value = data.subdomain || '';
                            
                            // Reset Link Output
                            const output = document.getElementById('previewLinkOutput');
                            if(output) {
                                output.style.display = 'none';
                                output.value = '';
                            }
                            
                            modal.style.display = 'flex';
                        }
                    } catch (err) {
                        alert("Error fetching client data.");
                        console.error(err);
                    } finally {
                         e.target.innerText = 'Manage';
                    }
                });
            });

            // Bind Modal Close
            const closeBtn = document.getElementById('closeAdminEditModal');
            const modal = document.getElementById('adminEditModal');
            if (closeBtn && modal) {
                // Remove old listeners to prevent duplicates
                const newCloseBtn = closeBtn.cloneNode(true);
                closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
                newCloseBtn.addEventListener('click', () => modal.style.display = 'none');
            }
            
            // Bind Save
            const saveBtn = document.getElementById('saveAdminEditBtn');
            if (saveBtn) {
                const newSaveBtn = saveBtn.cloneNode(true);
                saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
                newSaveBtn.addEventListener('click', async () => {
                    const docId = document.getElementById('editClientId').value;
                    if (!docId) return;
                    
                    newSaveBtn.innerText = 'Saving...';
                    newSaveBtn.disabled = true;
                    
                    try {
                         const updates = {
                             paymentStatus: document.getElementById('editPaymentStatus').value,
                             status: document.getElementById('editEnvStatus').value,
                             subdomain: document.getElementById('editSubdomain').value
                         };
                         const docRef = doc(db, 'clientSites', docId);
                         await updateDoc(docRef, updates);
                         modal.style.display = 'none';
                         loadAdminClients(); // Refresh table
                    } catch(err) {
                         alert("Error saving: " + err.message);
                    } finally {
                         newSaveBtn.innerText = 'Save Changes';
                         newSaveBtn.disabled = false;
                    }
                });
            }

            // Bind Generate Preview Link
            const genLinkBtn = document.getElementById('generatePreviewLinkBtn');
            if (genLinkBtn) {
                 const newGenBtn = genLinkBtn.cloneNode(true);
                 genLinkBtn.parentNode.replaceChild(newGenBtn, genLinkBtn);
                 newGenBtn.addEventListener('click', async () => {
                     const docId = document.getElementById('editClientId').value;
                     const output = document.getElementById('previewLinkOutput');
                     if (!docId || !output) return;
                     
                     newGenBtn.innerText = 'Generating...';
                     newGenBtn.disabled = true;
                     
                     try {
                         // Generate a secure token and a 25 min expiry stamp
                         const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                         const expiryMs = Date.now() + (25 * 60 * 1000); // 25 minutes
                         
                         const docRef = doc(db, 'clientSites', docId);
                         await updateDoc(docRef, {
                             previewToken: token,
                             previewExpiresAt: expiryMs,
                             status: 'Preview' // Auto-update status to preview
                         });
                         
                         document.getElementById('editEnvStatus').value = 'Preview';
                         
                         const sub = document.getElementById('editSubdomain').value || 'pending';
                         const link = `https://${sub}.quicksitekenya.co.ke/preview?token=${token}`;
                         
                         output.value = link;
                         output.style.display = 'block';
                         
                         // Copy automatically
                         navigator.clipboard.writeText(link);
                         newGenBtn.innerText = 'Copied to Clipboard!';
                         setTimeout(() => newGenBtn.innerText = 'Generate Link', 3000);
                         
                     } catch(err) {
                         alert("Error generating link: " + err.message);
                         newGenBtn.innerText = 'Generate Link';
                     } finally {
                         newGenBtn.disabled = false;
                     }
                 });
            }

        } catch (err) {
            console.error("Error loading admin clients:", err);
            tableBody.innerHTML = `<tr><td colspan="6" style="padding: 20px; text-align: center; color: #ff4d4d;">Failed to load clients.</td></tr>`;
        }
    };

    const adminLogoutBtn = document.getElementById('adminPortalLogoutBtn');
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', async () => {
            try {
                await logOut();
            } catch (err) {
                console.error("Logout error", err);
            }
        });
    }

    // Auth Listener
    onAuthStateChanged(auth, (user) => {
        updateDashboardUI(user);
    });

    // Login / Sign Up Form
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Authenticating...';
            submitBtn.disabled = true;

            try {
                if (isSignUpMode) {
                    await signUpWithEmail(emailInput.value, passwordInput.value);
                } else {
                    await signInWithEmail(emailInput.value, passwordInput.value);
                }
                // Listener will update UI
            } catch (err) {
                if (err.code === 'auth/network-request-failed') {
                    const networkNote = document.getElementById('authNetworkNote');
                    if (networkNote) {
                        networkNote.style.display = 'block';
                        networkNote.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    alert("⚠️ FIREBASE BLOCKED BY BROWSER ⚠️\n\nYou are inside an iframe and your browser's privacy shields are blocking the login.\n\nWe will now explicitly break out of the iframe and auto-open the application in a new tab for you to log in securely. Please hit Sign In on the new tab.");
                    window.open(window.location.href, '_blank');
                } else {
                    alert((isSignUpMode ? "Sign-Up Failed: " : "Sign-In Failed: ") + err.message);
                }
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                await logOut();
            } catch (err) {
                console.error("Logout error", err);
            }
        });
    }

    // Package Selection
    const packageBtns = document.querySelectorAll('.select-package-btn');
    packageBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const selectedPackage = e.target.getAttribute('data-package');
            const user = auth.currentUser;
            if (!user) return;
            
            const originalText = e.target.innerText;
            e.target.innerText = 'Setting up...';
            e.target.disabled = true;

            try {
                // Determine template based on package (basic default)
                let template = 'Default';
                if (selectedPackage === 'Starter Presence') template = 'Universal Professional';
                
                await addDoc(collection(db, 'clientSites'), {
                    clientName: user.email.split('@')[0], // Base off email for now
                    clientEmail: user.email,
                    plan: selectedPackage,
                    template: template,
                    businessName: 'My Business',
                    status: 'Draft',
                    paymentStatus: 'Unpaid',
                    createdAt: serverTimestamp()
                });
                
                // Immediately refresh view
                updateDashboardUI(user);
            } catch (err) {
                console.error("Error creating setup:", err);
                e.target.innerText = 'Setup Failed!';
                setTimeout(() => {
                    e.target.innerText = originalText;
                    e.target.disabled = false;
                }, 3000);
            }
        });
    });

    // Copy Link
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            if (siteUrl.innerText && !siteUrl.innerText.includes('Pending')) {
                navigator.clipboard.writeText(siteUrl.innerText);
                const icon = copyLinkBtn.querySelector('i');
                const oldIcon = icon.getAttribute('data-lucide');
                icon.setAttribute('data-lucide', 'check');
                window.lucide.createIcons();
                
                setTimeout(() => {
                    icon.setAttribute('data-lucide', oldIcon);
                    window.lucide.createIcons();
                }, 2000);
            }
        });
    }
});
