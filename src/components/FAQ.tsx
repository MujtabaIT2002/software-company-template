import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including web development, mobile app development, digital marketing, and business consulting. Our team of experts is dedicated to delivering high-quality solutions tailored to your specific needs."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects could take several months. We'll provide you with a detailed timeline during our initial consultation."
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on your specific requirements. We offer competitive rates and provide detailed quotes after understanding your project needs. We also offer flexible payment plans for larger projects."
  },
  {
    id: 4,
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support and maintenance services. Our team is available to help with updates, troubleshooting, and any questions you may have after project completion."
  },
  {
    id: 5,
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices and maintain strict quality control processes. Each project goes through multiple review stages, and we conduct thorough testing before delivery. We also gather feedback throughout the development process."
  }
];

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${activeId === item.id ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                {item.question}
                <span className="faq-icon">
                  {activeId === item.id ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 