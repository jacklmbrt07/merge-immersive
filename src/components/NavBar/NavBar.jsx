import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';

// const NavBar = (props) => {
//   let nav = props.user ? (
//     <div>
//       <Link to="" onClick={props.handleLogout}>
//         {" "}
//         LOG OUT
//       </Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//       <span>WELCOME, {props.user.name}</span>
//     </div>
//   ) : (
//       <nav className="navbar">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/login">LOG IN</Link>
//           &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//           <Link to="/signup">SIGN UP</Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   return <div>{nav}</div>;
// };

const NavBar = (props) => {
  let nav = props.user ? (
    <NavMenu>
      <NavItem icon={<CaretIcon />} />
    </NavMenu>
  ) : (
      <div class="header">
        <div class="left-nav">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
        </div>
        <NavMenu>
          <Link to="/signup">SIGN UP</Link>
          <Link to="/login">LOG IN</Link>
          <NavItem icon={<CaretIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </NavMenu>
      </div>
    );
  return <div>{nav}</div>;
};


function NavMenu(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link to="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</Link>
      {/* <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a> */}

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>

    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}



export default NavBar;
