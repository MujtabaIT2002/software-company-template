import { motion } from 'framer-motion';

function About({ id }: { id?: string }) {
  return (
    <section className="about" id={id}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="about-grid"
        >
          <div>
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              MacroSoar is a leading technology company dedicated to delivering innovative digital solutions. 
              We combine creativity with technical expertise to help businesses thrive in the digital age.
            </p>
            <div className="about-features">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="feature-card"
              >
                <h3>Our Mission</h3>
                <p>To empower businesses with cutting-edge technology solutions that drive growth and innovation.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="feature-card"
              >
                <h3>Our Vision</h3>
                <p>To be the global leader in digital transformation, setting new standards in technological excellence.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="feature-card"
              >
                <h3>Our Values</h3>
                <p>Innovation, Excellence, Integrity, and Customer Success drive everything we do.</p>
              </motion.div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://i.pinimg.com/originals/ab/28/6b/ab286b43dad5d7d542199f4365821e3d.gif" alt="About MacroSoar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 8px 24px 0 rgba(255,107,0,0.15)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 