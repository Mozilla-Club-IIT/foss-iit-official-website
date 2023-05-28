import { useEffect, useState } from "react";
import mozillaClubLogo from "../assets/logos/Mozilla club logo.png";
import fossLogo from "../assets/logos/FOSS IIT logo.png";
import womenFossLogo from "../assets/logos/WIF logo.png";
import { NavLink } from "react-router-dom";
import Styles from "../scss/navigation.module.scss";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Action when clicking on link in nav bar
  const linkClick = () => {
    isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen); // This checks whether mobile navigation bar is open and close the mobile navbar if user click on a link
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // This scrolls the website to the top when user click on a link in nav bar
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <nav className={scroll && !isOpen ? Styles.scrolled : ""}>
        <div
          className={
            isOpen
              ? `${Styles.navContainer} ${Styles.navOpen}`
              : Styles.navContainer
          }
        >
          <div className={Styles.navLogos}>
            <NavLink className={Styles.logos} to="/" onClick={linkClick} end>
              <img src={mozillaClubLogo} alt="" />
              <img src={fossLogo} alt="" />
              <img src={womenFossLogo} alt="" />
            </NavLink>
          </div>

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
                to="/events"
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
                to="/wif"
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : undefined
                }
                onClick={linkClick}
                end
              >
               WIF
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
