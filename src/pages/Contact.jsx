import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Contact Me</h2>
      <div className="text-center text-lg space-y-2">
        <p>📧 Email: <a href="mailto:thisisraginithorat@gmail.com" className="text-pink-300">thisisraginithorat@gmail.com</a></p>
        <p>🌐 GitHub: <a href="https://github.com/theragini" className="text-pink-300" target="_blank" rel="noreferrer">theragini</a></p>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/ragini-thorat" className="text-pink-300" target="_blank" rel="noreferrer">ragini-thorat</a></p>
        <p>📝 Resume: <span className="text-pink-300">[https://drive.google.com/file/d/11eMH-_0J-Ze05FDpPmx544NLwGx4FuRM/view?usp=drive_link]</span></p>
      </div>
    </section>
  );
}

export default Contact;
