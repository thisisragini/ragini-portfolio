import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-20 px-6 bg-gray-800"
    >
      <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Contact Me</h2>
      <div className="text-center text-lg space-y-2 mb-6">
        <p>📧 Email: <a href="mailto:thisisraginithorat@gmail.com" className="text-pink-300">thisisraginithorat@gmail.com</a></p>
        <p>🌐 GitHub: <a href="https://github.com/theragini" className="text-pink-300" target="_blank" rel="noreferrer">theragini</a></p>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/ragini-thorat" className="text-pink-300" target="_blank" rel="noreferrer">ragini-thorat</a></p>
        <p>📝 Resume: <a href="https://drive.google.com/file/d/1Tb7S-nnXkpqEhAFZxkY6oSM7n5WRzGUd/view?usp=sharing" className="text-pink-300 underline" target="_blank" rel="noreferrer">View Resume</a></p>
      </div>
      <div className="flex justify-center gap-6 text-pink-400 text-2xl">
        <a href="mailto:thisisraginithorat@gmail.com"><FaEnvelope /></a>
        <a href="https://github.com/theragini" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/ragini-thorat" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://drive.google.com/file/d/1Tb7S-nnXkpqEhAFZxkY6oSM7n5WRzGUd/view?usp=sharing" target="_blank" rel="noreferrer"><FaFilePdf /></a>
      </div>
    </section>
  );
}

export default Contact;
