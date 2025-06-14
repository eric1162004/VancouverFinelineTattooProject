import { primary } from "daisyui/src/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import InstagramIcon from './InstagramIcon';

const Navbar = ({ darkContext = true }) => {
  const router = useRouter();
  const checkBoxRef = useRef();
  const menuFlyOutRef = useRef();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", link: "/" },
    { name: "TATTOO GALLERY", link: "/gallery" },
    { name: "TATTOO REVAMP", link: "/tattoo_revamp" },
    { name: "FLASH DESIGN", link: "/flash_design" },
    { name: "TATTOO FAQ", link: "/faq" },
    { name: "Contact us", link: "/contact_us" }, 
  ];

  return (
    <nav
      className={`p-2 text-2xl bg-transparent py-1 md:text-xl ${
        darkContext ? "text-black" : "text-primary"
      } `}
    >
      <div className="flex flex-wrap items-center justify-between md:mx-3">
        {/* brand logo */}
        <Link href="/">
          <a className="flex items-center">
            {darkContext ? (
              <img
                className="object-contain w-32"
                src="img/miki_logo_white.png"
                alt="miki logo white"
              />
            ) : (
              <img
                className="object-contain w-32"
                src="img/miki_logo_black.png"
                alt="miki logo "
              />
            )}
          </a>
        </Link>
        {/* menu toggle button */}
        <label
          data-theme="mytheme"
          className={`btn btn-circle ${
            darkContext ? "text-primary" : "text-black"
          } bg-transparent border-0 swap swap-rotate md:hidden`}
        >
          <input
            ref={checkBoxRef}
            type="checkbox"
            onChange={() => setOpen(!open)}
          />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {/* menuFlyoutRef for mobile view */}
        <CSSTransition
          in={open}
          nodeRef={menuFlyOutRef}
          timeout={200}
          classNames="menu-transition"
          unmountOnExit
          onEnter={() => setOpen(true)}
          onExited={() => setOpen(false)}
        >
          <div
            ref={menuFlyOutRef}
            className={`w-full h-full 
            ${
              darkContext ? "bg-black opacity-80" : "bg-primary opacity-95"
            }             
             md:block md:w-auto mt-2`}
            id="mobile-menu"
          >
            <ul
              ref={menuFlyOutRef}
              className={`flex flex-col mt-4 md:hidden ${
                open ? "block" : "hidden"
              }`}
            >
              {links.map(link => (
                <li key={link.name}>
                  <p
                    className={`block ${
                      darkContext ? "text-white" : "text-black"
                    } py-4 pl-3 pr-4 font-bold text-sm uppercase text-hover md:p-0 select-none`}
                    aria-current="page"
                    onClick={() => {
                      setOpen(open => !open);
                      checkBoxRef.current.checked = false;
                      router.push(link.link);
                    }}
                  >
                    {link.name}
                  </p>
                </li>
              ))}
              <InstagramIcon className="w-10 p-1" /> 
            </ul>
          </div>
        </CSSTransition>

        {/* menuFlyout for desktop view */}
        <ul className="hidden md:block md:flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm items-center ">
          {links.map(link => (
            <li key={link.name}>
              <p
                className={`block py-4 pl-3 pr-4 font-bold text-sm ${
                  darkContext ? "text-white" : "text-black"
                } uppercase rounded hover:text-slate-300 md:p-0 select-none`}
                aria-current="page"
                onClick={() => {
                  router.push(link.link);
                }}
              >
                {link.name}
              </p>
            </li>
          ))}
          <li>
          <InstagramIcon className="w-10 inline-block" />
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
