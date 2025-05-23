import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Portfolio from './components/Portfolio';
import About from './pages/About';
import './App.css';

const services = [
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies.',
    icon: '🌐',
    details: [
      'Custom website development',
      'E-commerce solutions',
      'Content Management Systems',
      'Progressive Web Apps',
      'API integration',
      'Performance optimization'
    ],
    longDescription: "Our website development service covers everything from simple landing pages to complex web applications. We use the latest technologies to ensure your site is fast, secure, and scalable, tailored to your business needs."
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    details: [
      'Native iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'App store optimization',
      'Push notification integration',
      'Analytics and monitoring'
    ],
    longDescription: "We build high-performance mobile apps that deliver seamless user experiences on both iOS and Android. From concept to launch, our team ensures your app stands out in the crowded marketplace."
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Creative and professional design solutions for your brand.',
    icon: '🎨',
    details: [
      'Brand identity design',
      'Logo creation',
      'Marketing materials',
      'Social media graphics',
      'Print design',
      'Packaging design'
    ],
    longDescription: "Our graphic design team crafts visually stunning assets that communicate your brand's message and values. We help you stand out with unique, memorable designs for every platform."
  },
  {
    id: 'responsive-web',
    title: 'Responsive Web Design',
    description: 'Websites that look great on any device.',
    icon: '💻',
    details: [
      'Mobile-first approach',
      'Cross-browser compatibility',
      'Flexible layouts',
      'Optimized images',
      'Touch-friendly interfaces',
      'Performance optimization'
    ],
    longDescription: "We ensure your website looks and works perfectly on all devices. Our responsive designs adapt to any screen size, providing a consistent and engaging experience for every visitor."
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your business.',
    icon: '📈',
    details: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Pay-per-click Advertising',
      'Analytics and Reporting'
    ],
    longDescription: "Our digital marketing experts help you reach your target audience and achieve your business goals. We use data-driven strategies to maximize your online presence and ROI."
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: '🔒',
    details: [
      'Security audits',
      'Penetration testing',
      'Vulnerability assessment',
      'Security monitoring',
      'Incident response',
      'Security training'
    ],
    longDescription: "Protect your business from cyber threats with our end-to-end security services. We identify vulnerabilities, implement safeguards, and provide ongoing monitoring and support."
  },
  {
    id: 'ar-vr',
    title: 'AR/VR App Development',
    description: 'Immersive augmented and virtual reality experiences.',
    icon: '🎮',
    details: [
      'AR application development',
      'VR application development',
      '3D modeling',
      'Interactive experiences',
      'Training simulations',
      'Virtual tours'
    ],
    longDescription: "Step into the future with our AR/VR solutions. We create immersive experiences for training, marketing, and entertainment, helping you engage your audience in new ways."
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Innovative blockchain solutions for modern businesses.',
    icon: '⛓️',
    details: [
      'Smart contract development',
      'DApp development',
      'Blockchain integration',
      'Cryptocurrency solutions',
      'Supply chain tracking',
      'Decentralized identity'
    ],
    longDescription: "Leverage the power of blockchain for transparency, security, and efficiency. We develop custom blockchain solutions tailored to your business needs."
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'AI-powered solutions to automate and optimize your operations.',
    icon: '🤖',
    details: [
      'Machine Learning models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Chatbot development',
      'AI integration'
    ],
    longDescription: "Transform your business with AI. Our solutions automate processes, provide insights, and enhance customer experiences using the latest in artificial intelligence."
  }
];

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Visionary leader with 15+ years of experience in technology and business development.'
  },
  {
    id: 2,
    name: 'Sarah Smith',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww',
    description: 'Tech innovator specializing in AI and machine learning solutions.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Full-stack developer with expertise in modern web technologies.'
  },
  {
    id: 4,
    name: 'Emily Johnson',
    role: 'UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    description: 'Creative designer passionate about user-centered design and accessibility.'
  }
];

function App() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const { scrollY } = useViewportScroll();
  // Parallax for hero background
  const heroBgY = useTransform(scrollY, [0, 400], ["0%", "30%"]);
  const [bgZoom, setBgZoom] = useState(100);

  // Auto-rotate team carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Clamp zoom between 100% and 115%
      const zoom = 100 + Math.min(window.scrollY / 20, 15);
      setBgZoom(zoom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showServiceDetails = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="App">
      <Navbar />

      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeServiceDetails}>×</button>
            <div className="service-details-header">
              <div className="service-icon">{selectedService.icon}</div>
              <h1 className="service-title">{selectedService.title}</h1>
            </div>
            <p className="service-description">{selectedService.description}</p>
            <div className="service-details-features scrollable-features">
              {selectedService.details.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="service-details-feature"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
            <p className="service-long-description">{selectedService.longDescription}</p>
          </div>
        </div>
      )}

      <section
        className="hero-about-bg"
        id="home"
        style={{
          backgroundSize: `${bgZoom}%`,
          backgroundAttachment: 'fixed'
        }}
      >
        <motion.section 
          className="hero"
          style={{ backgroundPositionY: heroBgY }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div className="hero-content">
              <h1 className="hero-title">
                MacroSoar
              </h1>
              <p className="hero-welcome">
                Welcome to Macro Soar, your number one source for all products. We're dedicated to giving you the very best, with a focus on quality, versatility, reliability, trust and credibility. Founded in 2018, Macro Soar has come a long way from its beginnings in Islamabad. When we first started out, our passion for quality products drove us to do tons of research, so that Macro Soar can offer you the world's most advanced applications. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
              </p>
              <div className="hero-subtitle-box">
                <span className="hero-subtitle">
                  Transforming Ideas into Digital Excellence
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>
        <About id="about" />
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="services-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                className="service-card"
                onClick={() => showServiceDetails(service)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Section */}
      <Blog />

      {/* FAQ Section */}
      <FAQ />

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="team-title">Our Team</h2>
          <div className="team-carousel">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={`team-card ${index === currentTeamIndex ? 'active' : ''}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentTeamIndex ? 1 : 0,
                  x: index === currentTeamIndex ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="team-dots">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`team-dot ${index === currentTeamIndex ? 'active' : ''}`}
                  onClick={() => setCurrentTeamIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="form-textarea"
                required
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="submit-button"
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
