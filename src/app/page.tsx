import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import FloatingContactButton from '@/components/ui/FloatingContactButton';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      <FloatingContactButton />
    </>
  );
}
