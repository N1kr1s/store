import { Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to='/'
      className='hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-pink-700'
    >
      <Armchair className='w-8 h-8' />
    </Link>
  );
}
export default Logo;
