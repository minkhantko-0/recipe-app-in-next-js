import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/layout/main-header/main-header-background/main-header-background";
import NavLink from "@/components/layout/main-header/nav-link/nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="meals app logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
