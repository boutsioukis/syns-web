import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Footer from '@/components/Footer';
import WaveBackground from '@/components/WaveBackground';

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative">
      <Hero />
      <WaveBackground startSection="problem" />
      <Problem />
      <Features />
      <HowItWorks />
      <UseCases />
      <Footer />
    </main>
  );
}
