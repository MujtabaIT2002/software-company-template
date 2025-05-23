import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const services = [
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies.',
    icon: '🌐',
    details: `Our website development service combines cutting-edge technologies with creative design to deliver exceptional web experiences. We specialize in:
    • Custom website development
    • E-commerce solutions
    • Content Management Systems
    • Progressive Web Apps
    • API integration
    • Performance optimization`
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    details: `Transform your ideas into powerful mobile applications with our comprehensive mobile development services:
    • Native iOS and Android development
    • Cross-platform solutions
    • UI/UX design
    • App store optimization
    • Push notification integration
    • Analytics and monitoring`
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Creative and professional design solutions for your brand.',
    icon: '🎨',
    details: `Elevate your brand with our professional graphic design services:
    • Brand identity design
    • Logo creation
    • Marketing materials
    • Social media graphics
    • Print design
    • Packaging design`
  },
  {
    id: 'responsive-web',
    title: 'Responsive Web Design',
    description: 'Websites that look great on any device.',
    icon: '💻',
    details: `Ensure your website looks perfect on every device with our responsive design services:
    • Mobile-first approach
    • Cross-browser compatibility
    • Flexible layouts
    • Optimized images
    • Touch-friendly interfaces
    • Performance optimization`
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your business.',
    icon: '📈',
    details: `Grow your online presence with our comprehensive digital marketing services:
    • Search Engine Optimization (SEO)
    • Social Media Marketing
    • Content Marketing
    • Email Marketing
    • Pay-per-click Advertising
    • Analytics and Reporting`
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: '🔒',
    details: `Protect your digital assets with our comprehensive security solutions:
    • Security audits
    • Penetration testing
    • Vulnerability assessment
    • Security monitoring
    • Incident response
    • Security training`
  },
  {
    id: 'ar-vr',
    title: 'AR/VR App Development',
    description: 'Immersive augmented and virtual reality experiences.',
    icon: '🎮',
    details: `Create immersive experiences with our AR/VR development services:
    • AR application development
    • VR application development
    • 3D modeling
    • Interactive experiences
    • Training simulations
    • Virtual tours`
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Innovative blockchain solutions for modern businesses.',
    icon: '⛓️',
    details: `Leverage blockchain technology with our expert solutions:
    • Smart contract development
    • DApp development
    • Blockchain integration
    • Cryptocurrency solutions
    • Supply chain tracking
    • Decentralized identity`
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'AI-powered solutions to automate and optimize your operations.',
    icon: '🤖',
    details: `Harness the power of AI with our innovative solutions:
    • Machine Learning models
    • Natural Language Processing
    • Computer Vision
    • Predictive Analytics
    • Chatbot development
    • AI integration`
  }
];

function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container">
        <h2>Service not found</h2>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <section className="service-detail">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="service-header">
            <div className="service-icon">{service.icon}</div>
            <h1 className="service-title">{service.title}</h1>
          </div>
          <p className="service-description">{service.description}</p>
          <div className="service-content">
            <h2>Service Details</h2>
            <div className="service-features">
              {service.details.split('\n').map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
          <Link to="/services" className="back-button">
            Back to Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceDetail; 