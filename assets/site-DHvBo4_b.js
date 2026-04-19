import{f as b}from"./firebase-applet-config-Ck6_0kXN.js";import{initializeApp as v}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";import{initializeFirestore as w,doc as I,onSnapshot as B}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";async function E(){try{const s=v(b),h=w(s,{experimentalForceLongPolling:!0},b.firestoreDatabaseId),a=new URLSearchParams(window.location.search),l=a.get("id");if(a.get("preview")==="true"&&(document.getElementById("previewBanner").style.display="block"),window.applyTemplate=e=>{const i=document.getElementById("templateStyles"),o=document.getElementById("dynamicFont");!i||!o||(e==="Salon & Beauty"?(o.href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",i.innerHTML+=`
                            :root { 
                                --primary: #d48d9a; 
                                --primary-rgb: 212, 141, 154; 
                                --bg: #fff8f9; --text: #3d3436; 
                                --text-muted: #7a6a6d; --card-bg: #ffffff; 
                                --glass-border: rgba(212, 141, 154, 0.15);
                                --radius-lg: 40px;
                            }
                            body { font-family: 'Plus Jakarta Sans', sans-serif; background: var(--bg); color: var(--text); }
                            h1, h2, h3, .logo { font-family: 'Playfair Display', serif; }
                            .hero::before { background: linear-gradient(to bottom, rgba(255,248,249,0.1), rgba(255,248,249,0.95)); }
                            .card { box-shadow: 0 20px 40px rgba(212,141,154,0.1); }
                            .btn-primary { border-radius: 999px; }
                        `):e==="Fitness & Gym"?(o.href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;900&display=swap",i.innerHTML+=`
                            :root { 
                                --primary: #ff3e3e; --bg: #0a0a0a; --text: #ffffff; 
                                --card-bg: #141414; --radius-lg: 0px; --radius-md: 0px;
                            }
                            body { font-family: 'Inter', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Anton', sans-serif; text-transform: uppercase; letter-spacing: 0.05em; }
                            .card { border-left: 8px solid var(--primary); }
                            .btn-primary { border-radius: 0; font-style: italic; }
                        `):e==="Universal Professional"?(o.href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap",i.innerHTML+=`
                            :root {
                                --primary: #4f46e5; --primary-rgb: 79, 70, 229;
                                --bg: #ffffff; --text: #0f172a; --text-muted: #64748b;
                                --card-bg: #f8fafc; --glass-border: #e2e8f0;
                            }
                            body { background: var(--bg); color: var(--text); }
                            .hero { background: white; text-align: left; padding: 180px 0 140px; }
                            .hero::before { background: radial-gradient(circle at 100% 0%, #eef2ff 0%, transparent 60%); }
                            .hero h1 { color: #0f172a; letter-spacing: -0.04em; }
                            .card { border-radius: 24px; background: white; border: 1px solid #e2e8f0; }
                            .card:hover { border-color: var(--primary); }
                        `):e==="Legal & Consulting"&&(o.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;600&display=swap",i.innerHTML+=`
                            :root { 
                                --primary: #1a237e; --bg: #fdfdfd; --text: #1a1a1a; 
                                --card-bg: #fff; --radius-lg: 0px;
                            }
                            body { font-family: 'Montserrat', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Cormorant Garamond', serif; }
                            .hero { background: #1a237e; color: white; }
                            .btn-primary { background: #c5a059; border-radius: 0; }
                         `))},window.renderSite=e=>{var m,g,f,p,y,u;if(!e)return;document.title=`${e.businessName||"Business"} | Official Site`,document.getElementById("siteLogoText").innerText=e.businessName||"Business",document.getElementById("siteTitle").innerText=((m=e.hero)==null?void 0:m.title)||e.businessName||"Headline",document.getElementById("siteTagline").innerText=((g=e.hero)==null?void 0:g.subtitle)||e.tagline||"Leading Service Business in Nairobi",document.getElementById("aboutName").innerText=e.businessName||"Us",document.getElementById("aboutContent").innerText=e.aboutText||"We provide top-tier services to our clients with high attention to detail and professional excellence.",document.getElementById("footerName").innerText=e.businessName||"Business",document.getElementById("footerTagline").innerText=e.tagline||"",document.getElementById("copyName").innerText=e.businessName||"Business";const i=document.getElementById("siteHero");if((f=e.images)!=null&&f.hero?i.style.backgroundImage=`url('${e.images.hero}')`:i.style.background="linear-gradient(45deg, #111, #222)",(p=e.images)!=null&&p.about){const t=document.querySelector("#aboutImgContainer img");t&&(t.src=e.images.about)}const o=document.getElementById("servicesGrid");o.innerHTML="";const c=document.getElementById("servicesDynamicHeader");if(c&&c.remove(),(y=e.images)!=null&&y.services){const t=document.createElement("div");t.id="servicesDynamicHeader",t.style.width="100%",t.style.height="350px",t.style.borderRadius="var(--radius-lg)",t.style.marginBottom="40px",t.style.backgroundImage=`url('${e.images.services}')`,t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.border="1px solid var(--glass-border)",o.before(t)}if(e.services&&e.services.length>0&&e.services.forEach(t=>{const r=document.createElement("div");r.className="card",r.innerHTML=`<h3>${t.name||"Service"}</h3><p>${t.description||""}</p><span class="price">${t.price||""}</span>`,o.appendChild(r)}),e.contact){document.getElementById("contactAddress").innerText=`📍 ${e.contact.address||"Nairobi, Kenya"}`,document.getElementById("contactPhone").innerText=`📞 ${e.contact.phone||"+254 700 000000"}`,document.getElementById("contactEmail").innerText=`📧 ${e.contact.email||"contact@business.com"}`,document.getElementById("callBtn").href=`tel:${e.contact.phone}`;const t=(e.contact.whatsapp||e.contact.phone||"").toString().replace(/\+/g,"").replace(/\s/g,"");window.currentWaUrl=`https://wa.me/${t}`,document.getElementById("waBtn").href=window.currentWaUrl,document.getElementById("floatWaBtn").href=window.currentWaUrl,e.contact.mapUrl&&(document.getElementById("mapContainer").innerHTML=`<iframe src="${e.contact.mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer"></iframe>`)}const d=document.getElementById("galleryGrid");d.innerHTML="",(u=e.images)!=null&&u.gallery&&e.images.gallery.length>0&&(document.getElementById("gallery").style.display="block",e.images.gallery.forEach(t=>{const r=document.createElement("div");r.className="gallery-item",r.innerHTML=`<img src="${t}" alt="Gallery Image" referrerPolicy="no-referrer">`,d.appendChild(r)})),window.applyTemplate(e.template);const k=e.featuresEnabled||[],$=e.subscriptionPlan||"Starter Presence";if(e.template==="Universal Professional"){const t=document.getElementById("features"),r=document.getElementById("featuresGrid");e.features&&e.features.length>0&&(t.style.display="block",r.innerHTML=e.features.map(n=>`
                                <div class="card" style="text-align: center;">
                                    <div style="width: 64px; height: 64px; background: rgba(var(--primary-rgb), 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--primary);">
                                        <i data-lucide="${n.icon||"check"}"></i>
                                    </div>
                                    <h3 style="font-size: 1.25rem;">${n.title}</h3>
                                    <p>${n.desc}</p>
                                </div>
                            `).join(""))}if(e.pricing&&e.pricing.length>0){const t=document.getElementById("pricing"),r=document.getElementById("pricingGrid");t.style.display="block",r.innerHTML=e.pricing.map(n=>`
                            <div class="card" style="display: flex; flex-direction: column;">
                                <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${n.plan}</h3>
                                <div style="font-size: 2rem; font-weight: 800; color: var(--primary); margin-bottom: 24px;">${n.price}</div>
                                <ul style="list-style: none; padding: 0; margin-bottom: 32px; flex-grow: 1;">
                                    ${n.features.map(x=>`<li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: var(--text-muted);"><i data-lucide="check" style="width: 18px; color: var(--primary); flex-shrink: 0;"></i> ${x}</li>`).join("")}
                                </ul>
                                <a href="#contact" class="btn btn-primary" style="width: 100%; justify-content: center;">Choose Plan</a>
                            </div>
                        `).join("")}if(e.testimonials&&e.testimonials.length>0){const t=document.getElementById("testimonials"),r=document.getElementById("testimonialsGrid");t.style.display="block",r.innerHTML=e.testimonials.map(n=>`
                            <div class="card">
                                <i data-lucide="quote" style="width: 32px; color: var(--primary); opacity: 0.3; margin-bottom: 20px;"></i>
                                <p style="font-style: italic; color: var(--text-muted); margin-bottom: 24px; font-size: 1.1rem;">"${n.quote}"</p>
                                <h4 style="font-weight: 700; color: var(--text);">${n.name}</h4>
                            </div>
                        `).join("")}if(e.cta){const t=document.getElementById("cta");t.style.display="block",t.innerHTML=`
                            <div class="container" style="background: var(--primary); padding: 80px 40px; border-radius: var(--radius-lg); text-align: center; color: white; position: relative; overflow: hidden;">
                                <div style="position: relative; z-index: 2;">
                                    <h2 style="font-size: 3rem; margin-bottom: 24px; color: white;">${e.cta.title||"Ready to Start?"}</h2>
                                    <p style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto 40px;">Let's build your vision into reality. Professionalism and quality guaranteed.</p>
                                    <a href="#contact" class="btn" style="background: white; color: var(--primary); padding: 18px 48px; font-size: 1.1rem; font-weight: 700;">${e.cta.btn||"Get Started Now"}</a>
                                </div>
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 100%); z-index: 1;"></div>
                            </div>
                        `}window.lucide&&window.lucide.createIcons()},l){const e=I(h,"clientSites",l);B(e,i=>{i.exists()&&renderSite(i.data())},i=>{console.error("Site listener error:",i),i.code==="permission-denied"&&(document.getElementById("siteHero").innerHTML=`
                                    <div class="container" style="text-align: center; padding: 100px 20px;">
                                        <h1>Access Restricted</h1>
                                        <p>This website requires special permissions or is not currently live.</p>
                                    </div>
                                `)})}}catch(s){console.error("Initialization Error:",s)}}E();
