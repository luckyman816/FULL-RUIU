"use client";
import React from "react";
import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavbarData from "@/public/data/navbar-data";
import MobileMenu from "./MobileMenu";
import OffcanvasInfo from "./OffcanvasInfo";
import Logo from "@/public/images/logo.png";
import Logo_Url from "@/public/images/logo-ruiu.png";
import LogoLight from "@/public/images/logo-ruiu-b.png";
import Search from "./Search";
import SidebarCart from "./SidebarCart";
import { signOut, useSession } from "next-auth/react";
import { MenuItem, Menu } from "@mui/material";
const Header = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  let logoSrc = Logo;

  const pathname = usePathname();
  if (pathname === "/index-five" || pathname === "/index-six") {
    logoSrc = LogoLight;
  }

  const handleCart = () => {
    setIsCartOpen(true);
  };

  const handleSearch = () => {
    setIsSearchOpen(true);
  };

  const handleOffCanvas = () => {
    setIsOpen(true);
  };
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
  const handleLogout = async () => {
    setAnchorEl(null);
    signOut();
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="header">
        <div className={"primary-navbar" + (scrolled ? " navbar-active" : " ")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="home page" title="logo">
                      <Image src={Logo_Url} alt="Image" priority />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul className="navbar__list">
                      {NavbarData.map((item, index) => {
                        return <MenuItemHeader key={index} item={item} />;
                      })}
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options">
                      <button
                        className="open-offcanvas"
                        aria-label="open offcanvas"
                        title="open offcanvas"
                        onClick={handleOffCanvas}
                      >
                        <i className="bi bi-grid-3x3-gap"></i>
                      </button>
                      <div>
                        <button
                          className="open-cart"
                          aria-label="selected products"
                          title="see cart items"
                          onClick={handleMenu}
                        >
                          <i className="bi bi-person-circle"></i>
                        </button>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          {session?.user?.email && (
                            <MenuItem sx={{ fontSize: "15px" }}>
                              {session?.user.name}
                            </MenuItem>
                          )}
                          <MenuItem
                            onClick={handleLogout}
                            sx={{ fontSize: "20px" }}
                          >
                            <i className="bi bi-box-arrow-right"></i>
                            &nbsp;Logout
                          </MenuItem>
                        </Menu>
                      </div>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      aria-label="toggle mobile menu"
                      title="open mobile menu"
                    >
                      <i className="material-symbols-outlined">menu_open</i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </header>
      <SidebarCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <OffcanvasInfo isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;

// menu item
const MenuItemHeader = ({ item }: any) => {
  const pathname = usePathname();
  return item.submenu ? (
    <li className="navbar__item navbar__item--has-children nav-fade">
      <button aria-label="dropdown menu" className="navbar__dropdown-label">
        {item.title}
      </button>
      <ul className="navbar__sub-menu">
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
  const pathname = usePathname();
  return (
    <li className="navbar__item navbar__item--has-children">
      <button
        aria-label="dropdown menu"
        className="navbar__dropdown-label navbar__dropdown-label-sub"
      >
        {subItem.title}
      </button>
      <ul className="navbar__sub-menu navbar__sub-menu__nested">
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
