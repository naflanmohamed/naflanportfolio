import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import Button from './Button';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');


    if (form.current) {
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setStatus('success');
          if (form.current) form.current.reset();
        }, (error) => {
          console.log(error.text);
          setStatus('error');
        })
        .finally(() => {
          setLoading(false);
          setTimeout(() => setStatus('idle'), 5000);
        });
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-6">

        <div className="border border-zinc-800 bg-zinc-900/30 p-1">
          {/* Terminal Header */}
          <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-zinc-500">user@naflan-portfolio: ~/contact</span>
          </div>

          <div className="p-8 md:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8">INITIATE_PROTOCOL</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-mono text-brand-300 mb-6"> System ready for new inquiries...</p>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  I'm currently available for freelance projects and full-time roles. If you're looking for someone to build scalable, high-performance web applications, execute the command below.
                </p>

                <div className="space-y-4">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center gap-4 text-zinc-400 hover:text-white group"
                    >
                      <span className="font-mono text-brand-300 opacity-0 group-hover:opacity-100"></span>
                      <span className="uppercase tracking-widest text-sm border-b border-transparent group-hover:border-brand-300 pb-0.5 transition-all">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-1">
                  <label className="font-mono text-xs text-brand-300 uppercase" htmlFor="user_name">input_name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white focus:outline-none focus:border-brand-300 font-mono text-sm"
                    placeholder="_"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs text-brand-300 uppercase" htmlFor="user_email">input_email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white focus:outline-none focus:border-brand-300 font-mono text-sm"
                    placeholder="_"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs text-brand-300 uppercase" htmlFor="message">input_message</label>
                  <textarea
                    name="message"
                    rows={4}
                    id="message"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white focus:outline-none focus:border-brand-300 font-mono text-sm"
                    placeholder="_"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SENDING...
                    </span>
                  ) : (
                    'EXECUTE SEND'
                  )}
                </Button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 font-mono text-sm bg-green-400/10 p-3 border border-green-400/20">
                    <CheckCircle size={16} />
                    <span>Message transmitted successfully.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 font-mono text-sm bg-red-400/10 p-3 border border-red-400/20">
                    <AlertCircle size={16} />
                    <span>Transmission failed. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;