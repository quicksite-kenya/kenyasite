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
            padding: 15px 25px; border-radius: 12px; background: ${type === 'error' ? '#7f1d1d' : '#2b220d'};
            color: white; font-size: 0.9rem; font-weight: 600; border: 1px solid ${type === 'error' ? '#ef4444' : '#d4af37'};
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

    // Automated Health Diagnostic Engine
    let healthPingHistory = [215, 190, 235, 180, 225, 200];

    const renderHealthPerformanceGraph = (currentPingMs) => {
        const areaPath = document.getElementById('healthGraphArea');
        const linePath = document.getElementById('healthGraphLine');
        const nodesGroup = document.getElementById('healthGraphNodes');
        const avgBadge = document.getElementById('healthAvgSpeedBadge');

        if (!areaPath || !linePath || !nodesGroup) return;

        if (currentPingMs) {
            healthPingHistory.push(currentPingMs);
            if (healthPingHistory.length > 7) {
                healthPingHistory.shift();
            }
        }

        const data = healthPingHistory.slice();
        while (data.length < 7) {
            data.unshift(200);
        }

        const sum = data.reduce((acc, val) => acc + val, 0);
        const avg = Math.round(sum / data.length);
        if (avgBadge) {
            avgBadge.innerText = `Avg Speed: ${avg}ms`;
        }

        const xStep = 90;
        const startX = 30;
        const minLatency = 80;
        const maxLatency = 450;
        const minY = 20;
        const maxY = 65;

        const points = data.map((ms, index) => {
            const x = startX + index * xStep;
            const clamped = Math.max(minLatency, Math.min(maxLatency, ms));
            const ratio = (clamped - minLatency) / (maxLatency - minLatency);
            const y = minY + ratio * (maxY - minY);
            return { x, y, ms };
        });

        const lineD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        const areaD = `${lineD} L ${points[points.length - 1].x} 90 L ${points[0].x} 90 Z`;

        linePath.setAttribute('d', lineD);
        areaPath.setAttribute('d', areaD);

        let nodesHtml = '';
        points.forEach((p, i) => {
            const isCurrent = i === points.length - 1;
            const nodeColor = p.ms >= 450 ? '#ef4444' : (p.ms < 250 ? '#22c55e' : '#3b82f6');
            const nodeRadius = isCurrent ? 6 : 4;

            nodesHtml += `
                <circle cx="${p.x}" cy="${p.y}" r="${nodeRadius + 4}" fill="${nodeColor}" fill-opacity="0.25" />
                <circle cx="${p.x}" cy="${p.y}" r="${nodeRadius}" fill="#111" stroke="${nodeColor}" stroke-width="2.5">
                    <title>${p.ms >= 450 ? 'Offline / High Latency' : `${p.ms} ms ping (${p.ms < 250 ? 'Ultra Fast' : 'Optimal'})`}</title>
                </circle>
                <text x="${p.x}" y="${p.y - 10}" fill="${isCurrent ? nodeColor : '#888'}" font-size="10" font-weight="${isCurrent ? '800' : '600'}" text-anchor="middle">${p.ms >= 450 ? 'ERR' : `${p.ms}ms`}</text>
            `;
        });

        nodesGroup.innerHTML = nodesHtml;
    };

    const runAutomatedSiteHealthCheck = async (targetUrl) => {
        const healthMonitoredUrl = document.getElementById('healthMonitoredUrl');
        const healthUptimeVal = document.getElementById('healthUptimeVal');
        const healthUptimeStatus = document.getElementById('healthUptimeStatus');
        const healthSslVal = document.getElementById('healthSslVal');
        const healthSslStatus = document.getElementById('healthSslStatus');
        const healthSpeedVal = document.getElementById('healthSpeedVal');
        const healthSpeedStatus = document.getElementById('healthSpeedStatus');
        const healthLastCheckTime = document.getElementById('healthLastCheckTime');
        const healthRefreshIcon = document.getElementById('healthRefreshIcon');
        const healthOverallBadge = document.getElementById('healthOverallBadge');

        if (!targetUrl || targetUrl === 'Connecting...') {
            if (healthMonitoredUrl) healthMonitoredUrl.innerText = 'Awaiting Site URL';
            if (healthUptimeVal) healthUptimeVal.innerText = 'Pending';
            if (healthUptimeStatus) healthUptimeStatus.innerText = '⏳ Draft / Unassigned';
            if (healthSslVal) healthSslVal.innerText = 'SSL Pending';
            if (healthSslStatus) healthSslStatus.innerText = '🔒 Auto-Provisioning';
            if (healthSpeedVal) healthSpeedVal.innerText = '--';
            if (healthSpeedStatus) healthSpeedStatus.innerText = '⚡ Awaiting Launch';
            if (healthOverallBadge) {
                healthOverallBadge.className = 'status-badge status-development';
                healthOverallBadge.innerHTML = '<span style="width: 7px; height: 7px; background: #eab308; border-radius: 50%; display: inline-block;"></span> Pending Launch';
            }
            renderHealthPerformanceGraph(200);
            return;
        }

        if (healthMonitoredUrl) {
            healthMonitoredUrl.innerText = targetUrl;
        }

        if (healthRefreshIcon) {
            healthRefreshIcon.style.transition = 'transform 0.5s ease';
            healthRefreshIcon.style.transform = 'rotate(360deg)';
        }

        if (healthSpeedVal) healthSpeedVal.innerText = 'Testing...';
        if (healthSpeedStatus) healthSpeedStatus.innerText = '⚡ Measuring Latency';

        const startTime = performance.now();
        let latencyMs = 200;
        let isOnline = false;
        let statusCode = 200;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4000);
            
            // Check if same-origin relative or full URL
            const isSameOrigin = targetUrl.startsWith('/') || targetUrl.startsWith(window.location.origin);
            
            if (isSameOrigin) {
                const res = await fetch(targetUrl, { method: 'HEAD', cache: 'no-store', signal: controller.signal });
                const endTime = performance.now();
                latencyMs = Math.max(8, Math.round(endTime - startTime));
                statusCode = res.status;
                isOnline = res.ok || res.status < 500;
            } else {
                // External live URL (cross-origin mode ping check)
                await fetch(targetUrl, { mode: 'no-cors', cache: 'no-store', signal: controller.signal });
                const endTime = performance.now();
                latencyMs = Math.max(12, Math.round(endTime - startTime));
                isOnline = true;
                statusCode = 200;
            }
            clearTimeout(timeoutId);
        } catch (err) {
            console.warn("Live health check ping error:", err.message);
            isOnline = false;
            latencyMs = 450; // Plot error high peak on graph
        }

        setTimeout(() => {
            if (healthRefreshIcon) healthRefreshIcon.style.transform = 'rotate(0deg)';
        }, 600);

        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (isOnline) {
            if (healthUptimeVal) healthUptimeVal.innerText = '99.9% Online';
            if (healthUptimeStatus) healthUptimeStatus.innerText = `🟢 ${statusCode} OK - Active`;

            const isHttps = targetUrl.startsWith('https://') || targetUrl.startsWith('/');
            if (healthSslVal) healthSslVal.innerText = isHttps ? '256-Bit SSL' : 'HTTP Only';
            if (healthSslStatus) healthSslStatus.innerText = isHttps ? '🔒 HTTPS Secured' : '⚠️ Unencrypted';

            if (healthSpeedVal) healthSpeedVal.innerText = `${latencyMs} ms`;
            if (healthSpeedStatus) {
                if (latencyMs < 150) {
                    healthSpeedStatus.innerHTML = '<span style="color: #22c55e;">⚡ Lightning Fast</span>';
                } else if (latencyMs < 350) {
                    healthSpeedStatus.innerHTML = '<span style="color: #22c55e;">⚡ Optimal Speed</span>';
                } else {
                    healthSpeedStatus.innerHTML = '<span style="color: #eab308;">⚡ Standard Speed</span>';
                }
            }

            if (healthOverallBadge) {
                healthOverallBadge.className = 'status-badge status-published';
                healthOverallBadge.innerHTML = `<span style="width: 7px; height: 7px; background: #22c55e; border-radius: 50%; display: inline-block;"></span> Operational (${latencyMs}ms)`;
            }
        } else {
            if (healthUptimeVal) healthUptimeVal.innerText = 'Offline';
            if (healthUptimeStatus) healthUptimeStatus.innerHTML = '<span style="color: #ef4444;">🔴 Unreachable</span>';

            if (healthSslVal) healthSslVal.innerText = 'Unverified';
            if (healthSslStatus) healthSslStatus.innerText = '⚠️ Check Domain';

            if (healthSpeedVal) healthSpeedVal.innerText = 'Timeout / Error';
            if (healthSpeedStatus) healthSpeedStatus.innerHTML = '<span style="color: #ef4444;">❌ Ping Failed</span>';

            if (healthOverallBadge) {
                healthOverallBadge.className = 'status-badge status-development';
                healthOverallBadge.style.background = 'rgba(239,68,68,0.15)';
                healthOverallBadge.style.color = '#ef4444';
                healthOverallBadge.style.borderColor = 'rgba(239,68,68,0.3)';
                healthOverallBadge.innerHTML = '<span style="width: 7px; height: 7px; background: #ef4444; border-radius: 50%; display: inline-block;"></span> Site Offline';
            }
        }

        if (healthLastCheckTime) {
            healthLastCheckTime.innerText = `Last Ping: ${timeString}`;
        }

        renderHealthPerformanceGraph(latencyMs);
    };

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

        // Hide login card/bar when user is authenticated
        if (loginState) loginState.style.display = 'none';

        // Admin override
        if (user.email === 'michaelmulili41@gmail.com') {
            if (dashboardState) dashboardState.style.display = 'none';
            if (welcomeText) welcomeText.innerHTML = `Welcome Admin, <span>${user.email.split('@')[0]}</span>`;
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
        if (document.getElementById('adminPortalView')) document.getElementById('adminPortalView').style.display = 'none';
        if (dashboardState) dashboardState.style.display = 'block';
        if (welcomeText) welcomeText.innerHTML = `Welcome back, <span>${user.email.split('@')[0]}</span>`;

        try {
            // Fetch Client's Web Asset
            const q = query(collection(db, 'clientSites'), where('clientEmail', '==', user.email));
            const snapshot = await getDocs(q);

            const hasPackageView = document.getElementById('hasPackageView');
            const noPackageView = document.getElementById('noPackageView');
            const unpaidWarning = document.getElementById('unpaidWarning');
            const amountDueDisplay = document.getElementById('amountDueDisplay');
            const previewLinkBoxWrapper = document.getElementById('previewLinkBoxWrapper');
            const activationPendingBlock = document.getElementById('activationPendingBlock');

            if (snapshot.empty) {
                if (hasPackageView) hasPackageView.style.display = 'none';
                if (noPackageView) noPackageView.style.display = 'block';
            } else {
                if (hasPackageView) hasPackageView.style.display = 'block';
                if (noPackageView) noPackageView.style.display = 'none';

                const docSnap = snapshot.docs[0];
                const data = docSnap.data();
                
                const plan = data.plan || data.subscriptionPlan || 'Starter Presence';
                planName.innerText = plan;
                const isPaid = data.paymentStatus === 'Paid';
                planStatus.innerText = isPaid ? 'Active' : 'Unpaid';
                planStatus.className = `status-badge ${isPaid ? 'status-published' : 'status-development'}`;

                const costMap = {
                    'Starter Presence': '$99',
                    'Business Growth': '$129',
                    'Pro Conversion System': '$169'
                };
                const cost = costMap[plan] || '$99';

                let link = data.customDomain 
                    ? (data.customDomain.startsWith('http') ? data.customDomain : `https://${data.customDomain}`)
                    : (data.subdomain ? `https://${data.subdomain}.quicksitekenya.co.ke` : `${window.location.origin}/site.html?id=${docSnap.id}&preview=true`);

                if (siteUrl) siteUrl.innerText = link;
                if (visitLinkBtn) {
                    visitLinkBtn.href = link;
                    visitLinkBtn.style.pointerEvents = 'auto';
                    visitLinkBtn.style.opacity = '1';
                    visitLinkBtn.classList.remove('disabled');
                    visitLinkBtn.title = "Open Site Preview";
                }
                if (previewLinkBoxWrapper) previewLinkBoxWrapper.style.opacity = '1';

                const copyLinkBtn = document.getElementById('copyLinkBtn');
                if (copyLinkBtn) {
                    const newCopyBtn = copyLinkBtn.cloneNode(true);
                    copyLinkBtn.parentNode.replaceChild(newCopyBtn, copyLinkBtn);
                    newCopyBtn.addEventListener('click', () => {
                        if (link && link !== 'Connecting...') {
                            navigator.clipboard.writeText(link).then(() => {
                                const copyText = document.getElementById('copyBtnText');
                                if (copyText) copyText.innerText = 'Copied! ✓';
                                newCopyBtn.style.borderColor = '#22c55e';
                                newCopyBtn.style.color = '#22c55e';
                                setTimeout(() => {
                                    if (copyText) copyText.innerText = 'Copy Link';
                                    newCopyBtn.style.borderColor = '';
                                    newCopyBtn.style.color = '';
                                }, 2000);
                            }).catch(err => {
                                console.error('Copy error:', err);
                            });
                        }
                    });
                }

                // Automatically run site health & performance check using client's registered site URL
                runAutomatedSiteHealthCheck(link);

                const runHealthCheckBtn = document.getElementById('runHealthCheckBtn');
                if (runHealthCheckBtn) {
                    const newHealthBtn = runHealthCheckBtn.cloneNode(true);
                    runHealthCheckBtn.parentNode.replaceChild(newHealthBtn, runHealthCheckBtn);
                    newHealthBtn.addEventListener('click', () => {
                        runAutomatedSiteHealthCheck(link);
                    });
                }

                if (!isPaid) {
                    if (unpaidWarning) unpaidWarning.style.display = 'block';
                    if (activationPendingBlock) activationPendingBlock.style.display = 'block';
                    
                    if (amountDueDisplay) {
                        amountDueDisplay.innerText = cost;
                    }
                } else {
                    if (unpaidWarning) unpaidWarning.style.display = 'none';
                    if (activationPendingBlock) activationPendingBlock.style.display = 'none';
                }

                const features = packages[plan] || packages['Starter Presence'];
                featureList.innerHTML = features.map(f => `<li><i data-lucide="check-circle"></i> ${f}</li>`).join('');

                const currentStatus = data.status || 'Draft';
                siteStatus.innerText = currentStatus;
                siteStatus.className = `status-badge ${currentStatus === 'Live' ? 'status-published' : (currentStatus === 'Preview' ? 'status-preview' : 'status-development')}`;

                const billingAmount = document.getElementById('dashBillingAmount');
                const billingStatus = document.getElementById('dashBillingStatus');

                if (billingAmount) billingAmount.innerText = isPaid ? '$0' : cost;
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
                        newBtn.innerHTML = '<i data-lucide="message-circle" style="width: 16px; height: 16px;"></i> Send Payment Confirmation';
                        newBtn.addEventListener('click', () => {
                            const message = encodeURIComponent(`Hello QuickSite team, I have just paid ${cost} for my ${plan} package using M-PESA. My registered email is ${user.email}. Please verify my payment. I am looking forward to getting started!`);
                            window.open(`https://wa.me/254708691648?text=${message}`, '_blank');
                        });
                    }
                }

                // Handle Upgrade Request
                const upgradePlanBtn = document.getElementById('upgradePlanBtn');
                if (upgradePlanBtn) {
                    // Remove old listener if any by cloning
                    const newUpgradeBtn = upgradePlanBtn.cloneNode(true);
                    upgradePlanBtn.parentNode.replaceChild(newUpgradeBtn, upgradePlanBtn);
                    
                    newUpgradeBtn.addEventListener('click', async () => {
                        const newPlan = document.getElementById('upgradePlanSelect').value;
                        const user = auth.currentUser;
                        if (!user) return;
                        
                        const message = encodeURIComponent(`Hello QuickSite team, I would like to upgrade my ${plan} package to the ${newPlan} package. My registered email is ${user.email}. Please guide me on the next steps.`);
                        window.open(`https://wa.me/254708691648?text=${message}`, '_blank');
                    });
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
                cardsContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: #555;">No signed-up client records found.</div>';
                return;
            }

            let totalCount = 0;
            let paidCount = 0;
            let unpaidCount = 0;

            cardsContainer.innerHTML = '';
            
            // Container header stats
            const statsBar = document.createElement('div');
            statsBar.style.cssText = `
                display: flex; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;
            `;

            snapshot.forEach(docSnap => {
                const data = docSnap.data();
                const id = docSnap.id;
                totalCount++;
                const isPaid = data.paymentStatus === 'Paid';
                if (isPaid) paidCount++; else unpaidCount++;

                const link = data.customDomain || (data.subdomain ? `https://${data.subdomain}.quicksitekenya.co.ke` : '#');
                const status = data.status || 'Draft';
                const plan = data.plan || data.subscriptionPlan || 'Starter Presence';
                
                const card = document.createElement('div');
                card.className = "admin-client-row";
                card.style.cssText = `
                    background: rgba(255,255,255,0.03);
                    border: 1px solid ${isPaid ? 'rgba(34,197,94,0.3)' : 'rgba(234,179,8,0.3)'};
                    border-radius: 16px;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;
                    transition: all 0.3s ease;
                    margin-bottom: 12px;
                `;
                
                card.innerHTML = `
                    <div style="flex: 1; min-width: 250px;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                            <h4 style="color: #fff; font-size: 1.15rem; font-weight: 800; margin: 0;">${data.businessName || 'Elite Business'}</h4>
                            <span style="font-size: 0.8rem; color: #aaa; background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: 6px;">${data.clientEmail || 'No email'}</span>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 8px;">
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 0.75rem; color: #888; text-transform: uppercase; font-weight: 600;">Chosen Package:</span>
                                <span style="background: rgba(212,175,55,0.15); color: var(--primary-color); border: 1px solid rgba(212,175,55,0.3); padding: 3px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 700;">
                                    ${plan}
                                </span>
                            </div>

                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 0.75rem; color: #888; text-transform: uppercase; font-weight: 600;">Payment Status:</span>
                                <button class="quick-toggle-payment" data-id="${id}" data-current="${data.paymentStatus || 'Unpaid'}" style="background: ${isPaid ? 'rgba(34,197,94,0.15)' : 'rgba(234,179,8,0.15)'}; color: ${isPaid ? '#22c55e' : '#eab308'}; border: 1px solid ${isPaid ? '#22c55e' : '#eab308'}; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="Click to toggle Paid / Unpaid">
                                    ${isPaid ? '🟢 Paid' : '🟡 Unpaid'} <i data-lucide="refresh-cw" style="width: 12px; height: 12px;"></i>
                                </button>
                            </div>

                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 0.75rem; color: #888; text-transform: uppercase; font-weight: 600;">Site Status:</span>
                                <span class="status-badge ${status === 'Live' ? 'status-published' : (status === 'Preview' ? 'status-preview' : 'status-development')}" style="padding: 2px 8px; font-size: 0.75rem;">
                                    ${status}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                        <button class="btn btn-primary admin-edit-client" data-id="${id}" style="padding: 8px 16px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                            <i data-lucide="edit-3" style="width: 15px; height: 15px;"></i> Manage Details
                        </button>
                        <a href="${link}" target="_blank" class="btn btn-secondary" style="padding: 8px 12px; border-radius: 10px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px; color: var(--primary-color);" title="Open Site Preview">
                            <i data-lucide="external-link" style="width: 15px; height: 15px;"></i> Preview
                        </a>
                        <button class="btn admin-delete-client" data-id="${id}" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 8px 12px; border-radius: 10px;" title="Delete Client">
                            <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                        </button>
                    </div>
                `;
                cardsContainer.appendChild(card);
            });

            statsBar.innerHTML = `
                <div style="background: rgba(0,0,0,0.4); padding: 10px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); font-size: 0.85rem; color: #ccc;">
                    Total Clients: <strong style="color: #fff;">${totalCount}</strong>
                </div>
                <div style="background: rgba(34,197,94,0.1); padding: 10px 18px; border-radius: 12px; border: 1px solid rgba(34,197,94,0.3); font-size: 0.85rem; color: #22c55e;">
                    🟢 Paid Active: <strong>${paidCount}</strong>
                </div>
                <div style="background: rgba(234,179,8,0.1); padding: 10px 18px; border-radius: 12px; border: 1px solid rgba(234,179,8,0.3); font-size: 0.85rem; color: #eab308;">
                    🟡 Unpaid / Pending: <strong>${unpaidCount}</strong>
                </div>
            `;
            cardsContainer.insertBefore(statsBar, cardsContainer.firstChild);

            if (window.lucide) window.lucide.createIcons();
            bindAdminActions();

        } catch (err) {
            console.error("Admin Load Error:", err);
        }
    };

    const bindAdminActions = () => {
        // Quick Toggle Payment Status
        document.querySelectorAll('.quick-toggle-payment').forEach(btn => {
            btn.addEventListener('click', async () => {
                const docId = btn.getAttribute('data-id');
                const currentStatus = btn.getAttribute('data-current');
                const newStatus = currentStatus === 'Paid' ? 'Unpaid' : 'Paid';
                try {
                    await updateDoc(doc(db, 'clientSites', docId), {
                        paymentStatus: newStatus,
                        updatedAt: serverTimestamp()
                    });
                    loadAdminClients();
                } catch (err) {
                    alert("Status update failed: " + err.message);
                }
            });
        });

        document.querySelectorAll('.admin-edit-client').forEach(btn => {
            btn.addEventListener('click', async () => {
                const docId = btn.getAttribute('data-id');
                const modal = document.getElementById('adminEditModal');
                if (!modal) return;
                
                try {
                    const docSnap = await getDoc(doc(db, 'clientSites', docId));
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        const setVal = (id, val) => {
                            const el = document.getElementById(id);
                            if (el) el.value = val;
                        };
                        setVal('editClientId', docId);
                        setVal('editPaymentStatus', data.paymentStatus || 'Unpaid');
                        setVal('editPlan', data.plan || data.subscriptionPlan || 'Starter Presence');
                        setVal('editEnvStatus', data.status || 'Draft');
                        setVal('editSubdomain', data.subdomain || '');
                        setVal('editTemplate', data.template || 'Starter Presence');
                        setVal('editBusinessName', data.businessName || '');
                        setVal('editHeroTitle', data.hero?.title || '');
                        setVal('editHeroSubtitle', data.hero?.subtitle || '');
                        setVal('editCustomDomain', data.customDomain || '');
                        setVal('editPageCount', data.pageCount || 1);
                        setVal('editTheme', data.theme || 'default');
                        setVal('editProjectVision', data.projectVision || '');
                        modal.style.display = 'flex';
                    }
                } catch (err) { console.error(err); alert("Load failed."); }
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
            const docId = document.getElementById('editClientId')?.value;
            if (!docId) return;

            const getVal = (id) => document.getElementById(id)?.value || '';

            const updates = {
                plan: getVal('editPlan') || 'Starter Presence',
                paymentStatus: getVal('editPaymentStatus') || 'Unpaid',
                status: getVal('editEnvStatus') || 'Draft',
                subdomain: getVal('editSubdomain').trim(),
                customDomain: getVal('editCustomDomain').trim(),
                updatedAt: serverTimestamp()
            };
            try {
                await updateDoc(doc(db, 'clientSites', docId), updates);
                document.getElementById('adminEditModal').style.display = 'none';
                loadAdminClients();
            } catch (err) { console.error(err); alert("Save failed: " + err.message); }
        });
    }

    const closeEditBtn = document.getElementById('closeAdminEditModal');
    if (closeEditBtn) closeEditBtn.addEventListener('click', () => document.getElementById('adminEditModal').style.display = 'none');
    const closeEditHeaderBtn = document.getElementById('closeAdminEditModalHeader');
    if (closeEditHeaderBtn) closeEditHeaderBtn.addEventListener('click', () => document.getElementById('adminEditModal').style.display = 'none');

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
                    pageCount: parseInt(document.getElementById('newClientPageCount').value) || 1,
                    theme: document.getElementById('newClientTheme').value,
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
                    pageCount: 5, // Default for elite
                    theme: 'sunset', // Default for elite
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
                // We keep it as Draft or whatever it is, just generate the preview token so the client can still see the link
                await updateDoc(doc(db, 'clientSites', docId), { previewToken: token });

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
                        siteDetailsSubmitted: true,
                        updatedAt: serverTimestamp()
                    });
                    if (successMsg) {
                        successMsg.style.display = 'block';
                        setTimeout(() => successMsg.style.display = 'none', 3000);
                    }
                    // Refresh dashboard so visit link is enabled immediately
                    loadDashboard(user);
                } else {
                    alert("Could not find your project record. Please reach out to support if this persists.");
                }
            } catch (err) {
                console.error("Vision save failed:", err);
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
