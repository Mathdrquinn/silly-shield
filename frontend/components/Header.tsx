import { Nav } from './Nav';

export const Header = () => (
  <header style={{ border: '1px solid #e4e', padding: '1em' }}>
    <div className="bar">
      <a href="/">Silly Shield</a>
      <Nav />
    </div>
  </header>
);
