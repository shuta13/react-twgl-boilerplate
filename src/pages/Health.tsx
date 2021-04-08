import { Link } from '../components/Link';

const Health: React.FC = () => (
  <div>
    <header>
      <h1>Health</h1>
    </header>
    <section>
      <h2>OK</h2>
    </section>
    <nav>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Health;
