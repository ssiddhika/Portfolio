import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-100 text-neutral py-4 ">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/siddhika-prasad/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-neutral">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/ssiddhika" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-neutral-content">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-base-content">&copy; {new Date().getFullYear()} Siddhika Prasad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;