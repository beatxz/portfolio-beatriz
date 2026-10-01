import Intro from './Intro.jsx';
import Role from './Role.jsx';
import Architecture from './Architecture.jsx';
import Features from './Features.jsx';
import Showcase from './Showcase.jsx';
import BehindTheCode from './BehindTheCode.jsx';

// Seção principal do portfólio. Para reordenar os blocos, mude a ordem abaixo.
export default function GestorNF() {
  return (
    <section id="gestornf" aria-labelledby="gnf-title" className="relative overflow-x-clip">
      <Intro />
      <Role />
      <Architecture />
      <Features />
      <Showcase />
      <BehindTheCode />
    </section>
  );
}
