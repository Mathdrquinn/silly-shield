import { default as Link } from 'next/link';
import { URL as SIGN_UP_URL } from '../pages/sign-up';
import { URL as BATTLE_URL } from '../pages/upcoming-battle';

export const Nav: React.SFC<{}> = () => (
  <nav style={{ backgroundColor: '#e4e4'  }}>
    <ul>
      <li>
        <Link href={BATTLE_URL}>
          <a>Battle!</a>
        </Link>
      </li>
      <li>
        <Link href={SIGN_UP_URL}>
          <a>Sign Up</a>
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
