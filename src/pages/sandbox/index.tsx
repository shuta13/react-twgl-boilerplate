import { Canvas } from '../../components/Canvas';
import { Link } from '../../components/Link';

const Sandbox: React.FC = () => {
  return (
    <>
      <header>
        <h1>Sandbox</h1>
      </header>
      <main>
        <Canvas />
      </main>
      <nav>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sandbox;
