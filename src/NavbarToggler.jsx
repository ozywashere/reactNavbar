import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';
function NavbarToggler({ isOpen, setIsOpen }) {
  return (
    <button
      className='inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 '
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <AiOutlineClose size={24} onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <AiOutlineMenu size={24} onClick={() => setIsOpen(!isOpen)} />
      )}
    </button>
  );
}

NavbarToggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default NavbarToggler;
