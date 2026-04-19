import{f as u}from"./firebase-applet-config-Ck6_0kXN.js";import{initializeApp as w}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";import{initializeFirestore as v,doc as k,onSnapshot as E}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";async function I(){try{const a=w(u),h=v(a,{experimentalForceLongPolling:!0},u.firestoreDatabaseId),s=new URLSearchParams(window.location.search),l=s.get("id");if(s.get("preview")==="true"&&(document.getElementById("previewBanner").style.display="block"),window.applyTemplate=e=>{const t=document.getElementById("templateStyles"),o=document.getElementById("dynamicFont");!t||!o||(e==="LUXURY_DARK"?(o.href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Montserrat:wght@300;400;600&display=swap",t.innerHTML+=`
                            :root { 
                                --primary: #e63946; 
                                --primary-rgb: 230, 57, 70; 
                                --bg: #0a0a0a; --text: #f1faee; 
                                --text-muted: #a8dadc; --card-bg: #1d3557; 
                                --glass-border: rgba(230, 57, 70, 0.2);
                                --radius-lg: 12px;
                            }
                            body { font-family: 'Montserrat', sans-serif; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); color: var(--text); }
                            h1, h2, h3, .logo { font-family: 'Cinzel', serif; text-transform: uppercase; letter-spacing: 2px;}
                            .hero::before { background: radial-gradient(circle at 50% 50%, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.95) 100%); }
                            .card { box-shadow: 0 20px 40px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.05); }
                            .btn-primary { background: var(--primary); color: white; border-radius: 4px; border: 1px solid #e63946; }
                            .btn-primary:hover { background: #c1121f; }
                        `):e==="CORPORATE_CLEAN"?(o.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",t.innerHTML+=`
                            :root { 
                                --primary: #00509e; --bg: #ffffff; --text: #333333; 
                                --text-muted: #666666; --card-bg: #f8f9fa; 
                                --glass-border: #e9ecef; --radius-lg: 8px; --radius-md: 4px;
                            }
                            body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); }
                            h1, h2, h3, .logo { font-weight: 700; color: #001d3d; }
                            .hero { background: #fdfdfd; padding: 140px 0 100px; text-align: center;}
                            .hero h1 { color: #001d3d; }
                            .hero::before { background: none; }
                            .card { border: 1px solid var(--glass-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                            .btn-primary { border-radius: 4px; background: var(--primary); color: white; }
                        `):e==="STARTUP_MODERN"?(o.href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap",t.innerHTML+=`
                            :root {
                                --primary: #7209b7; --primary-rgb: 114, 9, 183;
                                --bg: #f8f9fa; --text: #212529; --text-muted: #495057;
                                --card-bg: rgba(255, 255, 255, 0.7); --glass-border: rgba(114, 9, 183, 0.1);
                            }
                            body { background: var(--bg); color: var(--text); font-family: 'Poppins', sans-serif; }
                            nav { background: rgba(255, 255, 255, 0.8); }
                            .hero { background: linear-gradient(135deg, #4cc9f0 0%, #7209b7 100%); color: white; border-radius: 0 0 50px 50px; }
                            .hero::before { background: none; }
                            .hero h1, .hero p, .hero .section-title h2 { color: white; }
                            .card { border-radius: 24px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                            .card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(114, 9, 183, 0.15); }
                            .btn-primary { background: #f72585; border-radius: 50px; color: white; }
                        `):e==="BOLD_FITNESS"?(o.href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto:wght@400;500&display=swap",t.innerHTML+=`
                            :root { 
                                --primary: #ccff00; --bg: #111111; --text: #ffffff; 
                                --text-muted: #aaaaaa; --card-bg: #1a1a1a; 
                                --glass-border: #333333; --radius-lg: 0px; --radius-md: 0px;
                            }
                            body { font-family: 'Roboto', sans-serif; text-transform: none; }
                            h1, h2, h3, .logo { font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 1px; color: white; }
                            .hero { background: #000; }
                            .hero::before { background: radial-gradient(circle at center, rgba(204,255,0,0.1) 0%, #000 80%); }
                            .card { border: 2px solid #222; }
                            .card:hover { border-color: var(--primary); }
                            .btn-primary { background: var(--primary); color: black; border-radius: 0; font-weight: 700; text-transform: uppercase; transform: skewX(-10deg); }
                            .btn-primary:hover { transform: skewX(-10deg) scale(1.05); }
                         `):e==="Universal Professional"?(o.href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap",t.innerHTML+=`
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
                        `):e==="Legal & Consulting"&&(o.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;600&display=swap",t.innerHTML+=`
                            :root { 
                                --primary: #1a237e; --bg: #fdfdfd; --text: #1a1a1a; 
                                --card-bg: #fff; --radius-lg: 0px;
                            }
                            body { font-family: 'Montserrat', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Cormorant Garamond', serif; }
                            .hero { background: #1a237e; color: white; }
                            .btn-primary { background: #c5a059; border-radius: 0; }
                         `))},window.renderSite=e=>{var m,g,p,f,y,b;if(!e)return;document.title=`${e.businessName||"Business"} | Official Site`,document.getElementById("siteLogoText").innerText=e.businessName||"Business",document.getElementById("siteTitle").innerText=((m=e.hero)==null?void 0:m.title)||e.businessName||"Headline",document.getElementById("siteTagline").innerText=((g=e.hero)==null?void 0:g.subtitle)||e.tagline||"Leading Service Business in Nairobi",document.getElementById("aboutName").innerText=e.businessName||"Us",document.getElementById("aboutContent").innerText=e.aboutText||"We provide top-tier services to our clients with high attention to detail and professional excellence.",document.getElementById("footerName").innerText=e.businessName||"Business",document.getElementById("footerTagline").innerText=e.tagline||"",document.getElementById("copyName").innerText=e.businessName||"Business";const t=document.getElementById("siteHero");if((p=e.images)!=null&&p.hero?t.style.backgroundImage=`url('${e.images.hero}')`:t.style.background="linear-gradient(45deg, #111, #222)",(f=e.images)!=null&&f.about){const r=document.querySelector("#aboutImgContainer img");r&&(r.src=e.images.about)}const o=document.getElementById("servicesGrid");o.innerHTML="";const c=document.getElementById("servicesDynamicHeader");if(c&&c.remove(),(y=e.images)!=null&&y.services){const r=document.createElement("div");r.id="servicesDynamicHeader",r.style.width="100%",r.style.height="350px",r.style.borderRadius="var(--radius-lg)",r.style.marginBottom="40px",r.style.backgroundImage=`url('${e.images.services}')`,r.style.backgroundSize="cover",r.style.backgroundPosition="center",r.style.border="1px solid var(--glass-border)",o.before(r)}if(e.services&&e.services.length>0&&e.services.forEach(r=>{const i=document.createElement("div");i.className="card",i.innerHTML=`<h3>${r.name||"Service"}</h3><p>${r.description||""}</p><span class="price">${r.price||""}</span>`,o.appendChild(i)}),e.contact){document.getElementById("contactAddress").innerText=`📍 ${e.contact.address||"Nairobi, Kenya"}`,document.getElementById("contactPhone").innerText=`📞 ${e.contact.phone||"+254 700 000000"}`,document.getElementById("contactEmail").innerText=`📧 ${e.contact.email||"contact@business.com"}`,document.getElementById("callBtn").href=`tel:${e.contact.phone}`;const r=(e.contact.whatsapp||e.contact.phone||"").toString().replace(/\+/g,"").replace(/\s/g,"");window.currentWaUrl=`https://wa.me/${r}`,document.getElementById("waBtn").href=window.currentWaUrl,document.getElementById("floatWaBtn").href=window.currentWaUrl,e.contact.mapUrl&&(document.getElementById("mapContainer").innerHTML=`<iframe src="${e.contact.mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer"></iframe>`)}const d=document.getElementById("galleryGrid");d.innerHTML="",(b=e.images)!=null&&b.gallery&&e.images.gallery.length>0&&(document.getElementById("gallery").style.display="block",e.images.gallery.forEach(r=>{const i=document.createElement("div");i.className="gallery-item",i.innerHTML=`<img src="${r}" alt="Gallery Image" referrerPolicy="no-referrer">`,d.appendChild(i)})),window.applyTemplate(e.template);const T=e.featuresEnabled||[],L=e.subscriptionPlan||"Starter Presence";if(e.template==="Universal Professional"){const r=document.getElementById("features"),i=document.getElementById("featuresGrid");e.features&&e.features.length>0&&(r.style.display="block",i.innerHTML=e.features.map(n=>`
                                <div class="card" style="text-align: center;">
                                    <div style="width: 64px; height: 64px; background: rgba(var(--primary-rgb), 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--primary);">
                                        <i data-lucide="${n.icon||"check"}"></i>
                                    </div>
                                    <h3 style="font-size: 1.25rem;">${n.title}</h3>
                                    <p>${n.desc}</p>
                                </div>
                            `).join(""))}if(e.pricing&&e.pricing.length>0){const r=document.getElementById("pricing"),i=document.getElementById("pricingGrid");r.style.display="block",i.innerHTML=e.pricing.map(n=>`
                            <div class="card" style="display: flex; flex-direction: column;">
                                <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${n.plan}</h3>
                                <div style="font-size: 2rem; font-weight: 800; color: var(--primary); margin-bottom: 24px;">${n.price}</div>
                                <ul style="list-style: none; padding: 0; margin-bottom: 32px; flex-grow: 1;">
                                    ${n.features.map(x=>`<li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: var(--text-muted);"><i data-lucide="check" style="width: 18px; color: var(--primary); flex-shrink: 0;"></i> ${x}</li>`).join("")}
                                </ul>
                                <a href="#contact" class="btn btn-primary" style="width: 100%; justify-content: center;">Choose Plan</a>
                            </div>
                        `).join("")}if(e.testimonials&&e.testimonials.length>0){const r=document.getElementById("testimonials"),i=document.getElementById("testimonialsGrid");r.style.display="block",i.innerHTML=e.testimonials.map(n=>`
                            <div class="card">
                                <i data-lucide="quote" style="width: 32px; color: var(--primary); opacity: 0.3; margin-bottom: 20px;"></i>
                                <p style="font-style: italic; color: var(--text-muted); margin-bottom: 24px; font-size: 1.1rem;">"${n.quote}"</p>
                                <h4 style="font-weight: 700; color: var(--text);">${n.name}</h4>
                            </div>
                        `).join("")}if(e.cta){const r=document.getElementById("cta");r.style.display="block",r.innerHTML=`
                            <div class="container" style="background: var(--primary); padding: 80px 40px; border-radius: var(--radius-lg); text-align: center; color: white; position: relative; overflow: hidden;">
                                <div style="position: relative; z-index: 2;">
                                    <h2 style="font-size: 3rem; margin-bottom: 24px; color: white;">${e.cta.title||"Ready to Start?"}</h2>
                                    <p style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto 40px;">Let's build your vision into reality. Professionalism and quality guaranteed.</p>
                                    <a href="#contact" class="btn" style="background: white; color: var(--primary); padding: 18px 48px; font-size: 1.1rem; font-weight: 700;">${e.cta.btn||"Get Started Now"}</a>
                                </div>
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 100%); z-index: 1;"></div>
                            </div>
                        `}window.lucide&&window.lucide.createIcons()},l){const e=k(h,"clientSites",l);E(e,t=>{t.exists()&&renderSite(t.data())},t=>{console.error("Site listener error:",t),t.code==="permission-denied"&&(document.getElementById("siteHero").innerHTML=`
                                    <div class="container" style="text-align: center; padding: 100px 20px;">
                                        <h1>Access Restricted</h1>
                                        <p>This website requires special permissions or is not currently live.</p>
                                    </div>
                                `)})}}catch(a){console.error("Initialization Error:",a)}}I();
