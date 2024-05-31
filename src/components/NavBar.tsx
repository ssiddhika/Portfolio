import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dracula' ? 'cupcake' : 'dracula';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-md rounded-lg">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Siddhika</Link>
      </div>
      <div className="navbar-end flex items-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <button onClick={toggleTheme} className="btn btn-ghost ml-4">
          {theme === 'dracula' ? '🌙' : '☀️'}
        </button>
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
