import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="hero">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="hero-content">
          <h1 className="hero-title">
            MacroSoar
          </h1>
          <p className="hero-subtitle">
            Transforming Ideas into Digital Excellence
          </p>
          <div className="stats-grid">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="stat-card"
            >
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Projects Completed</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="stat-card"
            >
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="stat-card"
            >
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Team Members</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home; 