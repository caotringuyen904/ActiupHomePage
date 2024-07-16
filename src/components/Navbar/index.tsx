import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setIsOpen(isOpen === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown: string) => {
    setIsOpen(dropdown);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
  };

  return (
    <nav className=" fixed w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center ">
        {/* Logo */}
        <div className="text-2 font-bold">
          <a href="#">
            <img src="https://beta-uat.actiup.net/images/icons/logo.svg" alt="Logo" className="h-9" />
          </a>
        </div>
        {/* Navigation elements */}
        <div className="hidden md:flex ml-20 space-x-4">
          <a href="#" className="hover:text-gray-700">The thao</a>
          <a href="#" className="hover:text-gray-700">Giai tri</a>
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('dichVu')} 
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="hover:text-gray-700 flex items-center" 
              onClick={() => toggleDropdown('dichVu')}
            >
              Dich vu
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            {isOpen === 'dichVu' && (
              <div className="absolute mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Ky mien tru trach nhiem</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Bao hiem</a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-700">Blog</a>
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('hoTro')} 
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="hover:text-gray-700 flex items-center" 
              onClick={() => toggleDropdown('hoTro')}
            >
              Ho tro
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            {isOpen === 'hoTro' && (
              <div className="absolute mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Trung tam ho tro</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Giai phap CNTT</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Danh cho nha to chuc su kien</a>
              </div>
            )}
          </div>
        </div>
        {/* Right side elements */}
        <div className="flex items-center space-x-2">
          <a href="#" className="hover:text-gray-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
              <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
            </svg>
            Ve cua toi
          </a>
          <hr /> |
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('language')} 
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="hover:text-gray-700 flex items-center" 
              onClick={() => toggleDropdown('language')}
            >
              Language
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            {isOpen === 'language' && (
              <div className="absolute mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Vietnam</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">English</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
