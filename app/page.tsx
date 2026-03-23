"use client";

import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/60123456789?text=${msg}`, '_blank');
  };

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            
            <span className="text-xl font-bold" style={{ color: '#3b82f6' }}>Stellar Digital Agency</span>
          </div>
          <div className="hidden md:flex gap-6">
            {['About', 'Services', 'Contact'].map((i) => (
              <button key={i} onClick={() => scroll(i.toLowerCase())} className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#1e293b' }}>{i}</button>
            ))}
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} style={{ color: '#1e293b' }} /> : <Menu size={24} style={{ color: '#1e293b' }} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2" style={{ backgroundColor: '#ffffff' }}>
            {['About', 'Services', 'Contact'].map((i) => (
              <button key={i} onClick={() => scroll(i.toLowerCase())} className="py-2 text-left font-medium" style={{ color: '#1e293b' }}>{i}</button>
            ))}
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#3b82f6' }}>Stellar Digital Agency</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: '#1e293b' }}>Transforming Ideas Into Digital Reality</p>
          <a href={`https://wa.me/60123456789`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#f59e0b' }}>
            <MessageCircle size={24} />WhatsApp Us
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#3b82f6' }}>About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <p className="text-lg leading-relaxed" style={{ color: '#1e293b' }}>Stellar Digital Agency is a full-service digital agency specializing in web development, branding, and digital marketing. Founded in 2020, we have helped over 100 businesses establish their online presence.</p>
            <div className="grid grid-cols-3 gap-4">
              <img src="https://placehold.co/400x300/e2e8f0/64748b?text=About+1" alt="About 1" className="rounded-lg shadow-lg w-full h-32 object-cover" />
              <img src="https://placehold.co/400x300/e2e8f0/64748b?text=About+2" alt="About 2" className="rounded-lg shadow-lg w-full h-32 object-cover" />
              <img src="https://placehold.co/400x300/e2e8f0/64748b?text=About+3" alt="About 3" className="rounded-lg shadow-lg w-full h-32 object-cover" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ t: 'Vision', d: 'To be the leading digital partner for businesses across Southeast Asia' }, { t: 'Mission', d: 'We deliver innovative digital solutions that drive growth and success' }, { t: 'Innovation', d: 'Our commitment to innovation' }, { t: 'Excellence', d: 'Our dedication to excellence' }].map((p, i) => (
              <div key={i} className="p-6 rounded-lg text-center shadow-lg border-l-4" style={{ backgroundColor: '#ffffff', borderLeftColor: '#f59e0b' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#3b82f6' }}>{p.t}</h3>
                <p style={{ color: '#1e293b' }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4" style={{ backgroundColor: '#3b82f608' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#3b82f6' }}>Our Products & Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[{ n: 'Web Development', d: 'Custom websites built with modern technologies', i: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' }, { n: 'Mobile Apps', d: 'iOS and Android applications', i: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400' }, { n: 'UI/UX Design', d: 'Beautiful user-centered designs', i: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400' }, { n: 'Digital Marketing', d: 'SEO, SEM and social media', i: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?w=400' }, { n: 'Branding', d: 'Logo and brand identity', i: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400' }].map((p, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#ffffff' }}>
                <img src={p.i} alt={p.n} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold mb-2" style={{ color: '#3b82f6' }}>{p.n}</h3>
                  <p className="text-sm" style={{ color: '#1e293b' }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#3b82f6' }}>Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: '#3b82f6' }}>Get in Touch</h3>
              <div className="flex items-start gap-4"><MapPin size={24} style={{ color: '#f59e0b' }} className="mt-1 flex-shrink-0" /><p style={{ color: '#1e293b' }}>Level 15, Menara XYZJalan Ampang50450 Kuala Lumpur</p></div>
              <div className="flex items-center gap-4"><Mail size={24} style={{ color: '#f59e0b' }} /><a href={`mailto:hello@stellardigital.com`} style={{ color: '#1e293b' }} className="hover:underline">hello@stellardigital.com</a></div>
              <div className="flex items-center gap-4"><Phone size={24} style={{ color: '#f59e0b' }} /><a href={`tel:+60 12-345 6789`} style={{ color: '#1e293b' }} className="hover:underline">+60 12-345 6789</a></div>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div><label className="block mb-2 font-medium" style={{ color: '#1e293b' }}>Name</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50" style={{ borderColor: '#3b82f6', backgroundColor: '#ffffff' }} /></div>
              <div><label className="block mb-2 font-medium" style={{ color: '#1e293b' }}>Email</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50" style={{ borderColor: '#3b82f6', backgroundColor: '#ffffff' }} /></div>
              <div><label className="block mb-2 font-medium" style={{ color: '#1e293b' }}>Message</label><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50" style={{ borderColor: '#3b82f6', backgroundColor: '#ffffff' }} /></div>
              <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#f59e0b' }}><Send size={20} />Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4" style={{ backgroundColor: '#3b82f6' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white">&copy; {new Date().getFullYear()} Stellar Digital Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://facebook.com/stellardigital" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">Facebook</a>
            <a href="https://instagram.com/stellardigital" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">Instagram</a>
            <a href={`https://wa.me/60123456789`} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
