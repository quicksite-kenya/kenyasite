import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * UniversalTemplate Props Structure
 */
export interface UniversalData {
  businessName?: string;
  tagline?: string;
  template?: string;
  hero?: {
    title?: string;
    subtitle?: string;
    cta?: string;
  };
  aboutText?: string;
  services?: Array<{
    name: string;
    description: string;
    price: string;
  }>;
  features?: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
  images?: {
    hero?: string;
    logo?: string;
    gallery?: string[];
  };
  testimonials?: Array<{
    name: string;
    quote: string;
  }>;
  pricing?: Array<{
    plan: string;
    price: string;
    features: string[];
  }>;
  contact?: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    address?: string;
    mapUrl?: string;
  };
  cta?: {
    title?: string;
    btn?: string;
  };
}

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (LucideIcons as any)[name.charAt(0).toUpperCase() + name.slice(1)] || LucideIcons.Check;
  return <LucideIcon className={className || "w-6 h-6"} />;
};

export const UniversalTemplate: React.FC<{ data: UniversalData }> = ({ data }) => {
  if (!data) return <div className="p-10 text-center">No Data Provided</div>;

  const waUrl = data.contact?.phone 
    ? `https://wa.me/${data.contact.phone.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello ${data.businessName || ''}, I am interested in your services.` 
    : '#';

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            {data.businessName || 'Business'}
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            {data.services?.length > 0 && <a href="#services" className="hover:text-indigo-600 transition">Services</a>}
            {data.features?.length > 0 && <a href="#features" className="hover:text-indigo-600 transition">Features</a>}
            {data.pricing?.length > 0 && <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>}
            <a href={waUrl} className="bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {data.hero && (
        <section className="relative overflow-hidden pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-900 mb-6">
                {data.hero.title || data.businessName}
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                {data.hero.subtitle || data.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={waUrl} className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-xl shadow-indigo-200">
                  {data.hero.cta || 'Contact Us Now'}
                </a>
                {data.contact?.phone && (
                  <a href={`tel:${data.contact.phone}`} className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition">
                    <Icon name="phone" className="w-5 h-5" />
                    Call Us
                  </a>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl skew-y-1">
                <img 
                  src={data.images?.hero || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'} 
                  alt="Hero" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Icon name="check" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Verified Quality</div>
                    <div className="text-xs text-slate-500">Premium Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        </section>
      )}

      {/* About Section */}
      {data.aboutText && (
        <section id="about" className="py-24 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">About {data.businessName}</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "{data.aboutText}"
            </p>
          </div>
        </section>
      )}

      {/* Features Section */}
      {data.features?.length > 0 && (
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-slate-600">The standards we maintain to ensure your success.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {data.features.map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition group">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition">
                    <Icon name={feature.icon} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {data.services?.length > 0 && (
        <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4 text-indigo-400">Our Services</h2>
              <p className="text-slate-400">Professional solutions tailored for your business needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((service, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <span className="text-indigo-400 font-mono font-bold tracking-tight">{service.price}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  <a href={waUrl} className="text-xs uppercase tracking-widest font-bold text-indigo-400 flex items-center gap-2 hover:gap-4 transition-all">
                    Inquire <Icon name="arrow-right" className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)] -z-0"></div>
        </section>
      )}

      {/* Gallery Section */}
      {data.images?.gallery?.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Visual Showcase</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {data.images.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {data.pricing?.length > 0 && (
        <section id="pricing" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-slate-600">Choose the perfect plan for your business scale.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {data.pricing.map((tier, i) => (
                <div key={i} className={`p-10 rounded-3xl bg-white border ${i === 1 ? 'border-indigo-600 ring-4 ring-indigo-50 shadow-2xl relative' : 'border-slate-100 shadow-xl'}`}>
                  {i === 1 && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-500 mb-2">{tier.plan}</h3>
                    <div className="text-4xl font-black text-slate-900">{tier.price}</div>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-600 text-sm">
                        <Icon name="check-circle-2" className="w-4 h-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={waUrl} className={`block text-center py-4 rounded-xl font-bold transition ${i === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                    Choose {tier.plan}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {data.testimonials?.length > 0 && (
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Loved by Clients</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.testimonials.map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-100 border border-slate-50 relative">
                  <div className="text-indigo-600 mb-6"><Icon name="quote" className="w-10 h-10 opacity-20" /></div>
                  <p className="text-xl leading-relaxed text-slate-700 mb-8 italic">"{t.quote}"</p>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-slate-400 text-sm">Verified Client</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {data.cta && (
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-700 to-violet-800 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">
              {data.cta.title || 'Ready to evolve your business?'}
            </h2>
            <a href={waUrl} className="inline-block bg-white text-indigo-700 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition relative z-10 shadow-massive">
              {data.cta.btn || 'Get Started Now'}
            </a>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-bold text-slate-900 mb-4">{data.businessName}</div>
            <p className="text-slate-500 leading-relaxed mb-6">{data.tagline}</p>
            <div className="flex gap-4">
              {data.contact?.whatsapp && <a href={waUrl} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition"><Icon name="message-circle" /></a>}
              {data.contact?.phone && <a href={`tel:${data.contact.phone}`} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition"><Icon name="phone" /></a>}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="space-y-4">
              {data.contact?.address && <div className="flex items-center gap-3 text-slate-500"><Icon name="map-pin" className="w-4 h-4" /> {data.contact.address}</div>}
              {data.contact?.email && <div className="flex items-center gap-3 text-slate-500"><Icon name="mail" className="w-4 h-4" /> {data.contact.email}</div>}
            </div>
          </div>
          <div>
             <h4 className="font-bold mb-6">Quick Links</h4>
             <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                <a href="#services" className="hover:text-indigo-600">Services</a>
                <a href="#about" className="hover:text-indigo-600">About</a>
                <a href="#features" className="hover:text-indigo-600">Features</a>
                <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          © 2026 {data.businessName}. Powered by QuickSite Kenya.
        </div>
      </footer>
    </div>
  );
};

export default UniversalTemplate;
