import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (result.success) {
      setStatus('Message sent successfully!');
    } else {
      setStatus('Error sending message.');
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Head>
        <title>Contact | Siddhika&apos;s Portfolio</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen py-8 px-4 lg:px-12">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Contact Me
            </h1>
            <p className="text-lg lg:text-xl text-base-content mb-4">
              Want to get in touch? Feel free to complete the form below! 😁
            </p>
          </div>
          <div className="bg-base-100 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label text-neutral">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label text-neutral">
                  <span className="label-text text-lg font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label text-neutral">
                  <span className="label-text text-lg font-semibold">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="Your Message"
                  required
                  rows={4}
                ></textarea>
              </div>
              <div className="form-control mb-4">
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
              </div>
            </form>
            {status && <p className="mt-4 text-neutral text-center">{status}</p>}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg lg:text-xl text-base-content mb-4">
              Wanna connect? Add me on LinkedIn!
            </p>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/siddhika-prasad/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
