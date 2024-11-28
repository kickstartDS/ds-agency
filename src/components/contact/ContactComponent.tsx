import {
  HTMLAttributes,
  FC,
  PropsWithChildren,
  forwardRef,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import { ContactProps } from "./ContactProps";
import "./contact.scss";
import { Picture } from "@kickstartds/base/lib/picture";
import { ContactContext as KdsContactContext } from "@kickstartds/base/lib/contact";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Container } from "@kickstartds/core/lib/container";

export type { ContactProps };

export const ContactContextDefault = forwardRef<
  HTMLElement,
  ContactProps & HTMLAttributes<HTMLElement>
>(({ title, subtitle, image, links, copy, className, ...props }, ref) => (
  <Container name="contact">
    <address
      className={classnames(
        "dsa-contact",
        image?.aspectRatio && `dsa-contact--image-${image?.aspectRatio}`,
        image?.fullWidth && `dsa-contact--image-full-width`,
        className
      )}
      ref={ref}
      {...props}
    >
      {image && image.src ? (
        <div className="dsa-contact__image-wrap">
          <Picture
            src={image?.src}
            alt={image?.alt}
            className="dsa-contact__image"
          />
        </div>
      ) : (
        ""
      )}
      <div className="dsa-contact__body">
        {title && (
          <div className="dsa-contact__header">
            <span className="dsa-contact__title">{title}</span>
            <span className="dsa-contact__subtitle">{subtitle}</span>
          </div>
        )}
        {copy && <RichText text={copy} className="dsa-contact__copy" />}

        {links && links.length ? (
          <ul className="dsa-contact__links">
            {links.map(({ icon, href, label, newTab }, i) => (
              <li key={i}>
                <Link
                  className="dsa-contact__link"
                  href={href}
                  {...(newTab ? { target: "_blank", rel: "noopener" } : {})}
                >
                  <Icon icon={icon} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </address>
  </Container>
));

export const ContactContext = createContext(ContactContextDefault);
export const Contact = forwardRef<HTMLDivElement, ContactProps>(
  (props, ref) => {
    const Component = useContext(ContactContext);
    return <Component {...props} ref={ref} />;
  }
);
Contact.displayName = "Contact";

export const ContactProvider: FC<PropsWithChildren> = (props) => (
  <KdsContactContext.Provider {...props} value={Contact} />
);
