import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as T}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";import{initializeFirestore as B,doc as L,onSnapshot as S,query as h,collection as b,where as m,getDocs as x}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";async function z(){try{const u=await(await fetch("./firebase-applet-config.json")).json(),n=T(u),y=B(n,{experimentalForceLongPolling:!0},u.firestoreDatabaseId),f=new URLSearchParams(window.location.search),l=f.get("id");if(f.get("preview")==="true"&&(document.getElementById("previewBanner").style.display="block"),window.applyTemplate=e=>{const t=document.getElementById("templateStyles"),i=document.getElementById("dynamicFont");!t||!i||(e==="Salon & Beauty"?(i.href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Montserrat:wght@300;400&display=swap",t.innerHTML+=`
                            :root { --primary: #e8aeba; --bg: #fff5f6; --text: #4a4a4a; --card-bg: #ffffff; }
                            body { font-family: 'Montserrat', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Playfair Display', serif; }
                            .logo { color: #d48d9a; }
                            .hero { color: white; }
                            .card { box-shadow: 0 10px 30px rgba(212,141,154,0.1); border: none; }
                            .whatsapp-float { background: #e8aeba; }
                        `):e==="Fitness & Gym"?(i.href="https://fonts.googleapis.com/css2?family=Teko:wght@500;700&family=Inter:wght@400;700&display=swap",t.innerHTML+=`
                            :root { --primary: #ff3e3e; --bg: #111111; --text: #ffffff; --card-bg: #1a1a1a; }
                            body { font-family: 'Inter', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Teko', sans-serif; text-transform: uppercase; letter-spacing: 1px; }
                            .btn { border-radius: 4px; }
                            .card { border-left: 4px solid var(--primary); }
                        `):e==="Restaurant & Cafe"?(i.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Lato:wght@400&display=swap",t.innerHTML+=`
                            :root { --primary: #c5a059; --bg: #1c1c1c; --text: #f4f4f4; --card-bg: #2a2a2a; }
                            body { font-family: 'Lato', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Cormorant Garamond', serif; }
                            .hero { background-color: #000; }
                       `):e==="Medical & Health"?(i.href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&family=Playfair+Display:wght@700&display=swap",t.innerHTML+=`
                            :root { --primary: #2ecc71; --bg: #f5fcf9; --text: #2c3e50; --card-bg: #ffffff; }
                            body { font-family: 'Source Sans Pro', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Playfair Display', serif; }
                            .logo { color: #27ae60; }
                            .card { border-top: 5px solid var(--primary); box-shadow: 0 5px 20px rgba(46,204,113,0.1); }
                            .hero { background: #2ecc71; color: white; }
                       `):e==="Legal & Consulting"?(i.href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Raleway:wght@400;600&display=swap",t.innerHTML+=`
                            :root { --primary: #2c3e50; --bg: #fdfdfd; --text: #2c3e50; --card-bg: #ffffff; }
                            body { font-family: 'Raleway', sans-serif; color: #333; }
                            h1, h2, h3, .logo { font-family: 'Cinzel', serif; font-weight: 700; color: #1a252f; }
                            .nav-content { border-bottom: 2px solid #2c3e50; padding-bottom: 10px; }
                            .hero { background: #2c3e50; color: white; }
                            .btn-primary { background: #2c3e50; color: white; border-radius: 0; }
                            .card { border: 1px solid #eee; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
                       `):e==="Universal Professional"&&(i.href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",document.body.style.fontFamily="'Plus Jakarta Sans', sans-serif",t.innerHTML=`
                            :root {
                                --primary: #4f46e5;
                                --primary-dark: #4338ca;
                                --secondary: #0f172a;
                                --bg: #ffffff;
                                --surface: #f8fafc;
                                --text: #0f172a;
                                --text-muted: #64748b;
                                --border: #e2e8f0;
                            }
                            body { background: var(--bg); color: var(--text); }
                            .navbar { background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); }
                            .hero { background: white; padding-top: 100px; padding-bottom: 80px; text-align: left; }
                            .hero h1 { font-size: 4rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: var(--secondary); }
                            .hero p { font-size: 1.25rem; color: var(--text-muted); max-width: 600px; margin-bottom: 30px; }
                            .btn-primary { background: var(--primary); color: white; border-radius: 12px; padding: 14px 28px; font-weight: 600; box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3); }
                            .section-title { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 50px; text-align: center; }
                            .card { background: white; border: 1px solid var(--border); border-radius: 20px; padding: 30px; transition: all 0.3s ease; }
                            .card:hover { border-color: var(--primary); transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05); }
                            .price { color: var(--primary); font-family: monospace; font-weight: 700; font-size: 1.2rem; }
                            .pill { background: #eef2ff; color: #4f46e5; padding: 6px 16px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; display: inline-block; }
                        `))},window.renderSite=e=>{var w,v;if(!e)return;document.title=`${e.businessName||"Business"} | Official Site`,document.getElementById("siteLogoText").innerText=e.businessName||"Business",document.getElementById("siteTitle").innerText=e.businessName||"Headline",document.getElementById("siteTagline").innerText=e.tagline||"Leading Service Business in Nairobi",document.getElementById("aboutName").innerText=e.businessName||"Us",document.getElementById("aboutContent").innerText=e.aboutText||"We provide top-tier services to our clients with high attention to detail and professional excellence.",document.getElementById("footerName").innerText=e.businessName||"Business",document.getElementById("footerTagline").innerText=e.tagline||"",document.getElementById("copyName").innerText=e.businessName||"Business";const t=document.getElementById("siteHero");(w=e.images)!=null&&w.hero?t.style.backgroundImage=`url('${e.images.hero}')`:t.style.backgroundColor="#1a1a1a";const i=document.getElementById("servicesGrid");if(i.innerHTML="",e.services&&e.services.length>0?e.services.forEach(s=>{const o=document.createElement("div");o.className="card",o.innerHTML=`
                                <h3>${s.name||"Service"}</h3>
                                <p>${s.description||""}</p>
                                <span class="price">${s.price||""}</span>
                            `,i.appendChild(o)}):i.innerHTML="<p>Check back soon for our full list of services.</p>",e.contact){document.getElementById("contactAddress").innerText=`📍 ${e.contact.address||"Nairobi, Kenya"}`,document.getElementById("contactPhone").innerText=`📞 ${e.contact.phone||"+254 700 000000"}`,document.getElementById("contactEmail").innerText=`📧 ${e.contact.email||"contact@business.com"}`,document.getElementById("callBtn").href=`tel:${e.contact.phone}`;const s=(e.contact.whatsapp||e.contact.phone||"").toString().replace(/\+/g,"").replace(/\s/g,"");window.currentWaUrl=`https://wa.me/${s}?text=Hello ${e.businessName||""}, I would like to inquire about your services.`,document.getElementById("waBtn").href=window.currentWaUrl,document.getElementById("floatWaBtn").href=window.currentWaUrl;const o=document.getElementById("mapContainer");e.contact.mapUrl?o.innerHTML=`<iframe src="${e.contact.mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer"></iframe>`:o.innerHTML='<div style="display:flex; align-items:center; justify-content:center; height:100%; opacity:0.5;">Map Preview Unavailable</div>'}const r=document.getElementById("galleryGrid");r.innerHTML="",(v=e.images)!=null&&v.gallery&&e.images.gallery.length>0?(document.getElementById("gallery").style.display="block",e.images.gallery.forEach(s=>{const o=document.createElement("div");o.className="gallery-item",o.innerHTML=`<img src="${s}" alt="Gallery Image" referrerPolicy="no-referrer">`,r.appendChild(o)})):document.getElementById("gallery").style.display="none",window.applyTemplate(e.template);const c=e.featuresEnabled||[],d=e.subscriptionPlan||"Starter Presence";if(e.template==="Universal Professional"){d!=="Starter Presence"&&e.hero&&(e.hero.title&&(document.getElementById("siteTitle").innerText=e.hero.title),e.hero.subtitle&&(document.getElementById("siteTagline").innerText=e.hero.subtitle));const s=document.getElementById("features"),o=document.getElementById("featuresGrid");(d!=="Starter Presence"||c.includes("Features"))&&e.features&&e.features.length>0?(s.style.display="block",o.innerHTML=e.features.map(a=>`
                                <div class="card" style="text-align: center;">
                                    <div style="width: 60px; height: 60px; background: #eef2ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #4f46e5;">
                                        <i data-lucide="${a.icon||"check"}"></i>
                                    </div>
                                    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 10px;">${a.title}</h3>
                                    <p style="font-size: 0.9rem; color: #64748b;">${a.desc}</p>
                                </div>
                            `).join("")):s.style.display="none";const k=document.getElementById("pricing"),P=document.getElementById("pricingGrid");(d.includes("Pro")||d.includes("Enterprise")||c.includes("Pricing"))&&e.pricing&&e.pricing.length>0?(k.style.display="block",P.innerHTML=e.pricing.map((a,H)=>`
                                <div class="card" style="position: relative; ${H===1?"border-color: var(--primary);":""}">
                                    <div class="pill" style="margin-bottom: 20px;">${a.plan}</div>
                                    <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 20px;">${a.price}</div>
                                    <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
                                        ${a.features.map(M=>`<li style="margin-bottom: 10px; font-size: 0.9rem; opacity: 0.8; display: flex; align-items: center; gap: 10px;"><i data-lucide="check-circle-2" style="width: 14px; color: #22c55e;"></i> ${M}</li>`).join("")}
                                    </ul>
                                    <a href="${window.currentWaUrl||"#"}" class="btn btn-primary" style="width: 100%; text-align: center;">Choose Plan</a>
                                </div>
                            `).join("")):k.style.display="none";const I=document.getElementById("testimonials"),$=document.getElementById("testimonialsGrid");(d!=="Starter Presence"||c.includes("Testimonials"))&&e.testimonials&&e.testimonials.length>0?(I.style.display="block",$.innerHTML=e.testimonials.map(a=>`
                                <div class="card">
                                    <p style="font-style: italic; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">"${a.quote}"</p>
                                    <div style="font-weight: 700;">${a.name}</div>
                                    <div style="font-size: 0.8rem; opacity: 0.5;">Verified Client</div>
                                </div>
                            `).join("")):I.style.display="none";const E=document.getElementById("cta");(d!=="Starter Presence"||c.includes("CTA"))&&e.cta?(E.style.display="block",e.cta.title&&(document.getElementById("ctaTitle").innerText=e.cta.title),e.cta.btn&&(document.getElementById("ctaBtn").innerText=e.cta.btn)):E.style.display="none"}else document.getElementById("features").style.display="none",document.getElementById("pricing").style.display="none",document.getElementById("testimonials").style.display="none",document.getElementById("cta").style.display="none";window.lucide&&window.lucide.createIcons()},l){console.log("Loading Site ID:",l);const e=L(y,"clientSites",l);S(e,t=>{console.log("Snapshot received. Exists:",t.exists()),t.exists()?renderSite(t.data()):document.body.innerHTML=`
                                <div style="padding: 100px; text-align:center; color:white; font-family:sans-serif;">
                                    <h1 style="color:var(--primary, #d4af37);">404 | Site Not Found</h1>
                                    <p style="opacity:0.7;">The website you are looking for does not exist or has been removed.</p>
                                    <div style="margin-top:20px;">
                                        <a href="index.html" style="color:var(--primary, #d4af37);">Return to Home</a>
                                    </div>
                                    <p style="margin-top:40px; font-size:0.7rem; opacity:0.3;">ID: ${l}</p>
                                </div>`},t=>{console.error("Firestore error:",t),document.body.innerHTML=`
                            <div style="padding: 100px; text-align:center; color:white; font-family:sans-serif;">
                                <h1 style="color:#ff4444;">Connection Error</h1>
                                <p>${t.message}</p>
                                <p style="opacity:0.5; font-size:0.8rem;">Please check your internet connection or ad-blocker settings.</p>
                                <div style="margin-top:20px;">
                                    <a href="index.html" style="color:white; opacity:0.7;">Return to Home</a>
                                </div>
                            </div>`})}else console.log("No Site ID found. Attempting Domain Lookup..."),window.domainLookup&&window.domainLookup()}catch(g){console.error("Initialization Error:",g),document.body.innerHTML=`<div style="padding: 100px; text-align:center; color:white;"><h1>System Initialization Failed</h1><p>${g.message}</p></div>`}}z();async function N(){if(new URLSearchParams(window.location.search).get("id"))return;const n=window.location.hostname;console.log("[Domain Lookup] Evaluating host:",n);try{const f=await(await fetch("./firebase-applet-config.json")).json(),l=T(f),p=B(l,{experimentalForceLongPolling:!0},f.firestoreDatabaseId),e=h(b(p,"clientSites"),m("status","==","Live"),m("custom_domains","array-contains",n));let t=await x(e);if(t.empty){const i=h(b(p,"clientSites"),m("status","==","Live"),m("customDomain","==",n));t=await x(i)}if(t.empty&&(n.includes(".quicksitekenya.co.ke")||n.includes(".quicksite.co.ke"))){const r=n.split(".")[0];if(r!=="www"&&r!=="quicksitekenya"&&r!=="quicksite"){console.log("[Domain Lookup] Trying subdomain match:",r);const c=h(b(p,"clientSites"),m("status","==","Live"),m("subdomain","==",r));t=await x(c)}}if(t.empty)console.warn("[Domain Lookup] No matching client found for:",n),document.title="Site Not Found | QuickSite Kenya",document.body.innerHTML=`
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px; background: #0f172a; color: white;">
                            <div style="font-size: 5rem; font-weight: 800; color: #4f46e5; margin-bottom: 20px;">404</div>
                            <h1 style="font-size: 1.5rem; margin-bottom: 10px;">Website Not Found</h1>
                            <p style="opacity: 0.6; max-width: 400px; line-height: 1.6;">The domain <strong>${n}</strong> is not associated with an active QuickSite project.</p>
                            <a href="https://quicksitekenya.co.ke" style="margin-top: 30px; background: #4f46e5; color: white; padding: 12px 24px; border-radius: 12px; text-decoration: none; font-weight: 600;">Back to QuickSite</a>
                        </div>
                    `;else{const i=t.docs[0];console.log("[Domain Lookup] Match found:",i.id),S(L(p,"clientSites",i.id),r=>{window.renderSite&&window.renderSite(r.data())})}}catch(y){console.error("[Domain Lookup] Error:",y)}}window.domainLookup=N;
