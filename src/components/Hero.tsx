import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import { Button } from './ui/button';
function Hero() {
  return (
    <section className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We are changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Master cleanse selfies bruh truffaut post-ironic butcher. Fixie
          marxism keffiyeh gentrify VHS heirloom bicycle rights hexagon
          thundercats. Authentic lumbersexual pitchfork, kitsch tumblr gastropub
          palo santo put a bird on it grailed.
        </p>

        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Our Products</Link>
        </Button>
      </div>
      {/* hero carousel */}
      <HeroCarousel />
    </section>
  );
}
export default Hero;
