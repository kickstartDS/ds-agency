import classnames from "classnames";
import { FC } from "react";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import "./footer.scss";

export const Footer: FC = () => (
  <div className={classnames("c-footer")}>
    <div className="c-footer__content">
      <Link className="c-footer__logo" href="#">
        <Picture src="logo.svg" />
      </Link>

      <span className="c-footer__trademark">
        © 2023 systemics Inc. All rights reserved.
      </span>

      <div className="c-footer__links">
        <Link href="#" className="c-footer__link">
          Privacy policy
        </Link>
        <Link href="#" className="c-footer__link">
          Changelog
        </Link>
      </div>
    </div>
  </div>
);
