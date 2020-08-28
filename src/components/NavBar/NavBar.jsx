import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
// import { ReactComponent as CogIcon } from '../../icons/cog.svg';
// import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg'
import { ReactComponent as UserIcon } from '../../icons/user.svg'
import { CSSTransition } from 'react-transition-group';

const NavBar = (props) => {
  let nav = props.user ? (
    <div className="header">
      <div className="left-nav">
        <Link to="/">Home</Link>
        {/* <Link to="/allusers">Students</Link> */}
        <span className="header-username">WELCOME, {props.user.name.toUpperCase()}</span>
      </div>
      <NavMenu>
        <Link className="nav-link-right" to="" onClick={props.handleLogout}>
          {" "}
          LOG OUT
        </Link>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </NavMenu>
    </div>
  ) : (
      <div className="header">
        <div className="left-nav">
          <Link to="/">Home</Link>
          {/* <Link to="/allusers">Students</Link> */}
        </div>
        <NavMenu>
          <Link className="nav-link-right" to="/signup">SIGN UP</Link>
          <Link className="nav-link-right" to="/login">LOG IN</Link>
        </NavMenu>
      </div>
    );
  return <div>{nav}</div>;
};


function NavMenu(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav-j">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link to="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</Link>
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

  function DropdownItemLink(props) {
    return (
      <Link to="/profile" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  function DropdownItemEdit(props) {
    return (
      <Link to="/edit" className="menu-item">
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
          <DropdownItemLink leftIcon={<UserIcon />}>My Profile</DropdownItemLink>
          <DropdownItemEdit leftIcon={<EditIcon />}>Edit Profile</DropdownItemEdit>
          {/* <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem> */}


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
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Darkmode</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}



export default NavBar;
