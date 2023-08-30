import classnames from "classnames";
import { FC } from "react";
import React from "react";
import { Button } from "@kickstartds/base/lib/button";
import { Link } from "@kickstartds/base/lib/link";
import "./nav-main.scss";

export const NavMainItem: FC<{ label: string; href: string }> = ({
  label,
  href,
}) => (
  <li className="c-nav-main__item">
    <Link className="c-nav-main__link" href={href}>
      {label}
    </Link>
  </li>
);

export const NavMain: FC = ({}) => (
  <nav className="c-nav-main">
    <NavMainItem href="#" label="About us" />
    <NavMainItem href="#" label="Our Services" />
    <NavMainItem href="#" label="Project" />
    <NavMainItem href="#" label="Showcase" />
    <NavMainItem href="#" label="Blog" />
  </nav>
);
