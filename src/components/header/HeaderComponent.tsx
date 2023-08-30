import classnames from "classnames";
import { FC } from "react";
import { HeaderProps } from "./HeaderProps";
import React from "react";
import { Button } from "@kickstartds/base/lib/button";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import { NavMain } from "../nav-main/NavMainComponent";
import "./header.scss";

export const Header: FC<HeaderProps> = ({}) => (
  <div className={classnames("c-header")}>
    <div className="c-header__content">
      <Link className="c-header__logo" href="#">
        <Picture src="logo.svg" />
      </Link>

      <NavMain />
    </div>
  </div>
);
