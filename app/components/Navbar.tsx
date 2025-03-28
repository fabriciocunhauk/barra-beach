"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "../utils/appearance";
import Container from "./Container";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import barraBeachIcon from "@/public/barra-beach.webp";
import { useScrollPosition } from "../hooks/useScrollPosition";

type NavbarProps = {
  classes?: {
    wrapper?: string;
    container?: string;
    button?: string;
  };
};

type NavigationProps = {
  id: number;
  title: string;
  link: string;
};

type SubNavigationProps = {
  id: number;
  title: string;
  navigation: NavigationProps[];
};

const mockNavigation: NavigationProps[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Contact", link: "/contact" },
];

const mockSubNavigation: SubNavigationProps[] = [
  {
    id: 1,
    title: "More",
    navigation: [
      { id: 1, title: "Team", link: "/team" },
      { id: 2, title: "Careers", link: "/careers" },
    ],
  },
];

const MobileMenu: React.FC<{ navigation: NavigationProps[] }> = ({
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={classNames(
          "hidden",
          isOpen &&
            "flex fixed top-0 right-0 bottom-0 left-0 bg-white z-20 w-full h-full overflow-y-scroll"
        )}
      >
        <Container
          classes={{
            container: "flex flex-col gap-10 items-end w-full",
          }}
        >
          <Button
            classes={{
              button: "w-10 h-10 bg-transparent mt-4",
            }}
            onClick={toggleMenu}
          >
            <IoMdClose className="text-4xl" />
          </Button>
          <Link href="/" className="mx-auto" onClick={toggleMenu}>
            <Image
              src={barraBeachIcon.src}
              width={barraBeachIcon.width}
              height={barraBeachIcon.height}
              className="w-20 h-20"
              alt="Logo"
            />
          </Link>
          <ul className="flex flex-col text-center gap-10 mx-auto">
            {navigation.map(({ id, title, link }) => (
              <li
                key={id}
                className={classNames(
                  "hover:border-b transition-all duration-100 ease-in-out h-8",
                  pathname.endsWith(link) && "border-b"
                )}
                onClick={toggleMenu}
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Button
        classes={{
          button: "block xl:hidden bg-transparent w-8 h-8",
        }}
        onClick={toggleMenu}
      >
        <GiHamburgerMenu className="w-5 h-5 m-auto" />
      </Button>
    </>
  );
};

const Navigation: React.FC<{
  navigation: NavigationProps[];
  subNavigation: SubNavigationProps[];
}> = ({ navigation }) => {
  const pathname = usePathname();

  return (
    <ul className="hidden xl:flex items-center justify-between gap-10">
      {navigation.map(({ id, title, link }) => (
        <li
          key={id}
          className={classNames(
            "hover:border-b transition-all duration-100 ease-in-out h-8",
            pathname.endsWith(link) && "border-b"
          )}
        >
          <Link href={link}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar: React.FC<NavbarProps> = ({ classes }) => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={classNames(
        "fixed transition duration-300 ease-in-out z-10 w-full",
        classes?.wrapper,
        scrollPosition > 100 ? "bg-white/20 shadow-md" : "bg-transparent"
      )}
    >
      <Container
        classes={{
          container: classNames(
            " top-0 flex items-center justify-between w-full h-24",
            classes?.container
          ),
        }}
      >
        <Link href="/" className="w-40 lg:w-80">
          <Image
            src={barraBeachIcon.src}
            width={barraBeachIcon.width}
            height={barraBeachIcon.height}
            className="w-20 h-20"
            alt="Logo"
          />
        </Link>
        <Navigation
          navigation={mockNavigation}
          subNavigation={mockSubNavigation}
        />
        <MobileMenu navigation={mockNavigation} />
      </Container>
    </header>
  );
};

export default Navbar;
