import{f as B}from"./firebase-applet-config-Ck6_0kXN.js";import{initializeApp as z}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";import{initializeFirestore as P,doc as C,onSnapshot as R,query as T,collection as S,where as L,limit as H,getDocs as G}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";async function U(){try{const l=z(B),c=P(l,{experimentalForceLongPolling:!0},B.firestoreDatabaseId),f=new URLSearchParams(window.location.search),y=f.get("id"),M=f.get("preview")==="true",n=window.location.hostname;M&&(document.getElementById("previewBanner").style.display="block"),window.applyTemplate=e=>{const r=document.getElementById("templateStyles"),o=document.getElementById("dynamicFont");!r||!o||(e==="LUXURY_DARK"?(o.href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Montserrat:wght@300;400;600&display=swap",r.innerHTML+=`
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
                        `):e==="CORPORATE_CLEAN"?(o.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",r.innerHTML+=`
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
                        `):e==="STARTUP_MODERN"?(o.href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap",r.innerHTML+=`
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
                        `):e==="BOLD_FITNESS"?(o.href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto:wght@400;500&display=swap",r.innerHTML+=`
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
                         `):e==="Universal Professional"?(o.href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap",r.innerHTML+=`
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
                        `):e==="Legal & Consulting"&&(o.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;600&display=swap",r.innerHTML+=`
                            :root { 
                                --primary: #1a237e; --bg: #fdfdfd; --text: #1a1a1a; 
                                --card-bg: #fff; --radius-lg: 0px;
                            }
                            body { font-family: 'Montserrat', sans-serif; }
                            h1, h2, h3, .logo { font-family: 'Cormorant Garamond', serif; }
                            .hero { background: #1a237e; color: white; }
                            .btn-primary { background: #c5a059; border-radius: 0; }
                         `))},window.renderSite=e=>{var x,w,v,k,I,E;if(!e)return;document.title=`${e.businessName||"Business"} | Official Site`,document.getElementById("siteLogoText").innerText=e.businessName||"Business",document.getElementById("siteTitle").innerText=((x=e.hero)==null?void 0:x.title)||e.businessName||"Headline",document.getElementById("siteTagline").innerText=((w=e.hero)==null?void 0:w.subtitle)||e.tagline||"Leading Service Business in Nairobi",document.getElementById("aboutName").innerText=e.businessName||"Us",document.getElementById("aboutContent").innerText=e.aboutText||"We provide top-tier services to our clients with high attention to detail and professional excellence.",document.getElementById("footerName").innerText=e.businessName||"Business",document.getElementById("footerTagline").innerText=e.tagline||"",document.getElementById("copyName").innerText=e.businessName||"Business";const r=document.getElementById("siteHero");if((v=e.images)!=null&&v.hero?r.style.backgroundImage=`url('${e.images.hero}')`:r.style.background="linear-gradient(45deg, #111, #222)",(k=e.images)!=null&&k.about){const t=document.querySelector("#aboutImgContainer img");t&&(t.src=e.images.about)}const o=document.getElementById("servicesGrid");o.innerHTML="";const b=document.getElementById("servicesDynamicHeader");if(b&&b.remove(),(I=e.images)!=null&&I.services){const t=document.createElement("div");t.id="servicesDynamicHeader",t.style.width="100%",t.style.height="350px",t.style.borderRadius="var(--radius-lg)",t.style.marginBottom="40px",t.style.backgroundImage=`url('${e.images.services}')`,t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.border="1px solid var(--glass-border)",o.before(t)}if(e.services&&e.services.length>0&&e.services.forEach(t=>{const i=document.createElement("div");i.className="card",i.innerHTML=`<h3>${t.name||"Service"}</h3><p>${t.description||""}</p><span class="price">${t.price||""}</span>`,o.appendChild(i)}),e.contact){document.getElementById("contactAddressText").innerText=e.contact.address||"Nairobi, Kenya",document.getElementById("contactPhoneText").innerText=e.contact.phone||"+254 700 000000",document.getElementById("contactEmailText").innerText=e.contact.email||"contact@business.com",document.getElementById("callBtn").href=`tel:${e.contact.phone}`,document.getElementById("callBtnLink").href=`tel:${e.contact.phone}`;const t=(e.contact.whatsapp||e.contact.phone||"").toString().replace(/\+/g,"").replace(/\s/g,"");window.currentWaUrl=`https://wa.me/${t}`,document.getElementById("waBtn").href=window.currentWaUrl,document.getElementById("floatWaBtn").href=window.currentWaUrl,e.contact.mapUrl&&(document.getElementById("mapContainer").innerHTML=`<iframe src="${e.contact.mapUrl}" width="100%" height="100%" style="border:0; position: absolute; inset:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer"></iframe>`)}const A=e.featuresEnabled||[],a=(e.plan||e.subscriptionPlan||"Business Growth")==="Starter Presence",d=document.getElementById("features"),m=document.getElementById("pricing"),p=document.getElementById("testimonials"),s=document.getElementById("cta"),g=document.getElementById("gallery");if(d&&(d.style.display="none"),m&&(m.style.display="none"),p&&(p.style.display="none"),s&&(s.style.display="none"),g&&(g.style.display="none"),e.template==="Universal Professional"&&!a){const t=document.getElementById("featuresGrid");e.features&&e.features.length>0&&(d.style.display="block",t.innerHTML=e.features.map(i=>`
                                <div class="card" style="text-align: center;">
                                    <div style="width: 64px; height: 64px; background: rgba(var(--primary-rgb), 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--primary);">
                                        <i data-lucide="${i.icon||"check"}"></i>
                                    </div>
                                    <h3 style="font-size: 1.25rem;">${i.title}</h3>
                                    <p>${i.desc}</p>
                                </div>
                            `).join(""))}if(!a&&e.pricing&&e.pricing.length>0){const t=document.getElementById("pricingGrid");m.style.display="block",t.innerHTML=e.pricing.map(i=>`
                            <div class="card" style="display: flex; flex-direction: column;">
                                <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${i.plan}</h3>
                                <div style="font-size: 2rem; font-weight: 800; color: var(--primary); margin-bottom: 24px;">${i.price}</div>
                                <ul style="list-style: none; padding: 0; margin-bottom: 32px; flex-grow: 1;">
                                    ${i.features.map($=>`<li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: var(--text-muted);"><i data-lucide="check" style="width: 18px; color: var(--primary); flex-shrink: 0;"></i> ${$}</li>`).join("")}
                                </ul>
                                <a href="#contact" class="btn btn-primary" style="width: 100%; justify-content: center;">Choose Plan</a>
                            </div>
                        `).join("")}if(!a&&e.testimonials&&e.testimonials.length>0){const t=document.getElementById("testimonialsGrid");p.style.display="block",t.innerHTML=e.testimonials.map(i=>`
                            <div class="card">
                                <i data-lucide="quote" style="width: 32px; color: var(--primary); opacity: 0.3; margin-bottom: 20px;"></i>
                                <p style="font-style: italic; color: var(--text-muted); margin-bottom: 24px; font-size: 1.1rem;">"${i.quote}"</p>
                                <h4 style="font-weight: 700; color: var(--text);">${i.name}</h4>
                            </div>
                        `).join("")}!a&&e.cta&&(s.style.display="block",s.innerHTML=`
                            <div class="container" style="background: var(--primary); padding: 80px 40px; border-radius: var(--radius-lg); text-align: center; color: white; position: relative; overflow: hidden;">
                                <div style="position: relative; z-index: 2;">
                                    <h2 style="font-size: 3rem; margin-bottom: 24px; color: white;">${e.cta.title||"Ready to Start?"}</h2>
                                    <p style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto 40px;">Let's build your vision into reality. Professionalism and quality guaranteed.</p>
                                    <a href="#contact" class="btn" style="background: white; color: var(--primary); padding: 18px 48px; font-size: 1.1rem; font-weight: 700;">${e.cta.btn||"Get Started Now"}</a>
                                </div>
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 100%); z-index: 1;"></div>
                            </div>
                        `);const h=document.getElementById("galleryGrid");h.innerHTML="",!a&&((E=e.images)!=null&&E.gallery)&&e.images.gallery.length>0&&(g.style.display="block",e.images.gallery.forEach(t=>{const i=document.createElement("div");i.className="gallery-item",i.innerHTML=`<img src="${t}" alt="Gallery Image" referrerPolicy="no-referrer">`,h.appendChild(i)})),window.applyTemplate(e.template||"CORPORATE_CLEAN"),window.lucide&&window.lucide.createIcons()};const u=e=>{const r=C(c,"clientSites",e);R(r,o=>{o.exists()&&renderSite(o.data())},o=>{console.error("Site listener error:",o),o.code==="permission-denied"&&(document.getElementById("siteHero").innerHTML=`
                                    <div class="container" style="text-align: center; padding: 100px 20px;">
                                        <h1>Access Restricted</h1>
                                        <p>This website requires special permissions or is not currently live.</p>
                                    </div>
                                `)})},N=["quicksitekenya.co.ke","quicksite.co.ke","localhost","127.0.0.1","ais-dev-mxuldhpyhe7g4tmvbuamip-731127575238.europe-west2.run.app","ais-pre-mxuldhpyhe7g4tmvbuamip-731127575238.europe-west2.run.app"];if(y)u(y);else if(N.includes(n))document.getElementById("siteHero").innerHTML=`
                        <div class="container" style="text-align: center; padding: 100px 20px;">
                            <h1 style="color: #ff3b3b; font-size: 2.5rem; margin-bottom: 20px;">No Site Selected</h1>
                            <p style="font-size: 1.1rem; color: #aaa;">Please use a valid preview link or connect a domain.</p>
                        </div>
                    `;else{let e;if(n.includes("quicksitekenya.co.ke")||n.includes("quicksite.co.ke")){const r=n.split(".")[0];e=T(S(c,"clientSites"),L("subdomain","==",r),H(1))}else{const r=n.replace(/^www\./,"");e=T(S(c,"clientSites"),L("customDomain","==",r),H(1))}G(e).then(r=>{r.empty?document.getElementById("siteHero").innerHTML=`
                                <div class="container" style="text-align: center; padding: 100px 20px;">
                                    <h1 style="color: #ff3b3b; font-size: 2.5rem; margin-bottom: 20px;">Domain Not Connected</h1>
                                    <p style="font-size: 1.1rem; color: #aaa;">This domain is pointing to QuickSite Kenya but is not connected to any active project yet.<br><br>If you are the owner, please complete your portal activation.</p>
                                </div>
                            `:u(r.docs[0].id)}).catch(r=>{console.error("Domain lookup error",r)})}}catch(l){console.error("Initialization Error:",l)}}U();
