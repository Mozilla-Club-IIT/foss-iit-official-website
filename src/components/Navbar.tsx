import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../scss/Navbar.module.scss";
import logos from "../assets/images/FOSSlogos.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [tops, setTop] = useState("");

  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (150 > currentScrollPos) {
      setTop("none");
    } else {
      setTop("0px 2px 24px rgba(0, 0, 0, 0.12)");
    }
    prevScrollpos = currentScrollPos;
  };

  const activeStyle = {
    color: "#CA0000",
    fontWeight: "bold",
  }

  // console.log(prevScrollpos)
  return (
    <div style={{ boxShadow: tops }} className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.images}>
          <img
            className={isOpen ? `${styles.anandaActive}` : styles.ananda}
            src={logos}
          ></img>
        </div>
      </div>

      <div
        className={
          isOpen ? `${styles.hamburger} ${styles.isActive}` : styles.hamburger
        }
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={isOpen ? styles.navActive : styles.nav}>
        <ul
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "activeNavLink" : undefined
            }>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "activeNavLink" : undefined
            }>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) =>
              isActive ? "activeNavLink" : undefined
            }>EVENTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? "activeNavLink" : undefined
            }>CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/devs" className={({ isActive }) =>
              isActive ? "activeNavLink" : undefined
            }>DEVS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
