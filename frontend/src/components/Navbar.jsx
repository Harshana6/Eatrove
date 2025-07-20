import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">Eatrove</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          {/* Updated OUR MENU button to scroll to #menu */}
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            <button className="menuBtn">OUR MENU</button>
          </Link>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
