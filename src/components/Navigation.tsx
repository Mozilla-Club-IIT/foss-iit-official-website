import React, { useState } from "react";
import mozillaClubLogo from "../assets/logos/Mozilla club logo.png";
import fossLogo from "../assets/logos/FOSS IIT logo.png";
import womenFossLogo from "../assets/logos/WIF logo.png";
import { NavLink } from "react-router-dom";
import Styles from "../scss/navigation.module.scss";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClick = () => {
    isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div
          className={
            isOpen
              ? `${Styles.navContainer} ${Styles.navOpen}`
              : Styles.navContainer
          }
        >
          <NavLink to="/" className={Styles.navLogos} onClick={linkClick} end>
            <img src={mozillaClubLogo} alt="" />
            <img src={fossLogo} alt="" />
            <img src={womenFossLogo} alt="" />
          </NavLink>

          <div
            className={
              isOpen ? `${Styles.hamMenu} ${Styles.hamOpen}` : Styles.hamMenu
            }
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={Styles.navLinks}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : undefined
                }
                onClick={linkClick}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : undefined
                }
                onClick={linkClick}
                end
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/e"
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : undefined
                }
                onClick={linkClick}
                end
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : undefined
                }
                onClick={linkClick}
                end
              >
                Contact
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
