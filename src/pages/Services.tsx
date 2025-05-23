import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies.',
    icon: '🌐'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Creative and professional design solutions for your brand.',
    icon: '🎨'
  },
  {
    id: 'responsive-web',
    title: 'Responsive Web Design',
    description: 'Websites that look great on any device.',
    icon: '💻'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your business.',
    icon: '📈'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: '🔒'
  },
  {
    id: 'ar-vr',
    title: 'AR/VR App Development',
    description: 'Immersive augmented and virtual reality experiences.',
    icon: '🎮'
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Innovative blockchain solutions for modern businesses.',
    icon: '⛓️'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'AI-powered solutions to automate and optimize your operations.',
    icon: '🤖'
  }
];

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="service-card"
            >
              <Link to={`/services/${service.id}`} className="service-link">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 