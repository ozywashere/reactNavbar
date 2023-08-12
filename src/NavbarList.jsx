import { links } from './utils/links';
function NavbarList() {
  return (
    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
      {links.map((link, index) => (
        <li key={index} className='md:py-4 md:px-6 py-2'>
          <a href={link.url} className='text-gray-600 hover:text-gray-900 capitalize'>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavbarList;
