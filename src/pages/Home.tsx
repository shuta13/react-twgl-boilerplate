import { Link } from '../components/Link';

const Home: React.FC = () => {
  return (
    <>
      <header>
        <h1>react-twgl-boilerplate</h1>
      </header>
      <section>
        <h2>This is boilerplate includes React, TWGL.js & sandbox of WebGL</h2>
      </section>
      <nav>
        <ul>
          <li>
            <Link href="/health">health</Link>
          </li>
          <li>
            <Link href="/sandbox">sandbox</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
