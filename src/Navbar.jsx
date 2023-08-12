import Logo from './Logo';
import NavbarList from './NavbarList';
import NavbarToggler from './NavbarToggler';
import { useState } from 'react';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Logo />
        <NavbarToggler isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <NavbarList />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
