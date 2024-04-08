"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavbarData from "@/public/data/navbar-data";
import Logo from "@/public/images/logo.png";
import LogoLight from "@/public/images/logo-three.png";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResizeHeader);
    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, [setIsMenuOpen]);

  let logoSrc = Logo;

  const pathname = usePathname();
  if (pathname === "/index-five" || pathname === "/index-six") {
    logoSrc = LogoLight;
  }

  useEffect(() => {
    const parentItems = document.querySelectorAll(
      ".navbar__item--has-children"
    );

    parentItems.forEach((parentItem) => {
      const childItems = parentItem.querySelectorAll(".active-sub");

      if (childItems.length > 0) {
        parentItem.classList.add("active-parent");
      }
    });
  }, []);

  return (
    <Fragment>
      <div
        className={
          "mobile-menu d-block d-xl-none " + (isMenuOpen ? " show-menu" : " ")
        }
      >
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <Link href="/" aria-label="home page" title="logo">
                <Image src={logoSrc} alt="Image" priority />
              </Link>
            </div>
            <button
              aria-label="close mobile menu"
              className="close-mobile-menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="mobile-menu__list">
            <ul className="navbar__list">
              {NavbarData.map((item, index) => {
                return <MenuItem key={index} item={item} />;
              })}
            </ul>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
              title="facebook"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
              title="twitter"
            >
              <i className="bi bi-twitter"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="share us on pinterest"
              title="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
              title="instagram"
            >
              <i className="bi bi-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
      <div
        className={
          "mobile-menu__backdrop " +
          (isMenuOpen ? " mobile-menu__backdrop-active" : " ")
        }
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </Fragment>
  );
};

export default MobileMenu;

// menu item
const MenuItem = ({ item }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        isDropdownOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isDropdownOpen]);

  const pathname = usePathname();

  return item.submenu ? (
    <li className="navbar__item navbar__item--has-children nav-fade" ref={ref}>
      <button
        aria-label="dropdown menu"
        className={
          "navbar__dropdown-label" +
          (isDropdownOpen ? " navbar__item-active" : " ")
        }
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {item.title}
      </button>
      <ul
        className={
          "navbar__sub-menu ah-0" + (isDropdownOpen ? " ah-active" : " ")
        }
      >
        {item.submenu?.map((subItem: any, index: number) => {
          return (
            <Fragment key={index}>
              {subItem.subInSub ? (
                <SubDropdown subItem={subItem} key={index} />
              ) : (
                <li key={index}>
                  <Link
                    href={`${subItem.path}`}
                    className={pathname === subItem.path ? " active-sub" : " "}
                  >
                    {subItem.title}
                  </Link>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </li>
  ) : (
    <li className="navbar__item nav-fade">
      <Link
        href={`${item.path}`}
        className={pathname === item.path ? " active-it" : " "}
      >
        {item.title}
      </Link>
    </li>
  );
};

// sub dropdown
const SubDropdown = ({ subItem }: any) => {
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const handleSubDropdownClick = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };
  const pathname = usePathname();
  return (
    <li className="navbar__item navbar__item--has-children" ref={ref}>
      <button
        aria-label="dropdown menu"
        className={
          "navbar__dropdown-label navbar__dropdown-label-sub" +
          (isSubDropdownOpen ? " navbar__item-active" : " ")
        }
        onClick={handleSubDropdownClick}
      >
        {subItem.title}
      </button>
      <ul
        className={
          "navbar__sub-menu navbar__sub-menu__nested ah-0" +
          (isSubDropdownOpen ? " ah-active" : " ")
        }
      >
        {subItem.subInSub?.map((subInSubItem: any, index: number) => (
          <li key={index}>
            <Link
              href={subInSubItem.path}
              className={pathname === subInSubItem.path ? " active-sub" : " "}
            >
              {subInSubItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
