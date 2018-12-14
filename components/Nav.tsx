import { default as Link } from 'next/link';

export const Nav: React.SFC<{}> = () => (
  <nav style={{ backgroundColor: '#e4e4'  }}>
    <ul>
      <li>
        <Link href="/battle">
          <a>Battle!</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Home!</a>
        </Link>
      </li>
    </ul>
  </nav>
);
