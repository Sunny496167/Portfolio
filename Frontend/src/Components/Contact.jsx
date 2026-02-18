// Contact Section Component
import { Mail, MapPin, Github, Linkedin, Send, MessageSquare, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import SpotlightCard from "../animations/SpotlightCard";
import resumeData from "../data/resumeData.json";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' | 'error' | 'loading' | ''
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: 'success',
        message: 'Thank you for connecting! I really appreciate you reaching out and will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsLoading(false);
      // Auto-clear status after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: resumeData.personalInfo.email,
      href: `mailto:${resumeData.personalInfo.email}`,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: resumeData.personalInfo.phone,
      href: `tel:${resumeData.personalInfo.phone}`,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, India",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: resumeData.personalInfo.profiles.github,
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: resumeData.personalInfo.profiles.linkedin,
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get In <span className="text-orange-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4 text-lg">
              Let's collaborate and build something amazing together
            </p>
          </div>
        </FadeContent>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Illustration */}
          <AnimatedContent
            distance={60}
            direction="horizontal"
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={0.2}
          >
            <div className="space-y-8">
              {/* Developer Illustration */}
              <SpotlightCard className="glass-card rounded-3xl p-8 relative overflow-hidden border-orange-glow">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

                <div className="text-center">
                  {/* Waving Developer Avatar */}
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] flex items-center justify-center text-5xl font-bold text-white shadow-2xl orange-glow">
                      👋
                    </div>
                    {/* Chat Bubble */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500/40 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-[#ff6b35] animate-bounce" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Let's Talk!</h3>
                  <p className="text-[#a0a0a0]">I'm always open to discussing new projects and opportunities</p>
                </div>
              </SpotlightCard>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <AnimatedContent
                    key={index}
                    distance={40}
                    direction="horizontal"
                    duration={1}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    delay={0.3 + (index * 0.1)}
                  >
                    {info.href ? (
                      <SpotlightCard className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-1">
                        <a href={info.href} className="flex items-center gap-4 w-full">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <info.icon className="w-6 h-6 text-[#ff6b35]" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-[#a0a0a0]">{info.label}</p>
                            <p className="text-white font-medium group-hover:text-orange-gradient transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </SpotlightCard>
                    ) : (
                      <SpotlightCard className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:border-orange-glow transition-all duration-300">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-20 flex items-center justify-center`}>
                          <info.icon className="w-6 h-6 text-[#ff6b35]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-[#a0a0a0]">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </SpotlightCard>
                    )}
                  </AnimatedContent>
                ))}
              </div>

              {/* Social Links */}
              <SpotlightCard className="glass-card rounded-xl p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#ff6b35]" />
                  Connect on Social Media
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#ff6b35] hover:bg-orange-500/30 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-6 orange-glow-hover ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </AnimatedContent>

          {/* Right Side - Contact Form */}
          <AnimatedContent
            distance={60}
            direction="horizontal"
            reverse
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={0.4}
          >
            <SpotlightCard className="glass-card rounded-3xl p-8 relative overflow-hidden border-orange-glow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-orange-500/30 text-white placeholder-[#a0a0a0] focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-orange-500/30 text-white placeholder-[#a0a0a0] focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-orange-500/30 text-white placeholder-[#a0a0a0] focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${status.type === 'success'
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                      }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}

                {/* Submit Button with Glow */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform group ${isLoading
                    ? 'opacity-70 cursor-not-allowed scale-100'
                    : 'hover:from-[#ff8c42] hover:to-[#ff6b35] hover:scale-105 orange-glow-hover'
                    }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>

      {/* Custom CSS for Input Animations */}
      <style jsx>{`
        input:focus,
        textarea:focus {
          animation: inputGlow 0.3s ease-in-out;
        }

        @keyframes inputGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.4);
          }
          100% {
            box-shadow: 0 0 0 4px rgba(255, 107, 53, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;