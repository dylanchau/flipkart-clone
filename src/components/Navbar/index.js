import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

export const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
