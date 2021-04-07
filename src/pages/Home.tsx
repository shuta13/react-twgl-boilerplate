import { Link } from '../components/Link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>This is Home.</h1>
      <p>
        <Link href="/health">health</Link>
      </p>
    </div>
  );
};

export default Home;
