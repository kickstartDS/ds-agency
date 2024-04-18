import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { CtaProps } from "./CtaProps";
import { Headline } from "@kickstartds/base/lib/headline";
import { Text } from "../text/TextComponent";
import { ButtonGroup } from "@kickstartds/base/lib/button-group";
import "./cta.scss";

export const CtaContextDefault = forwardRef<
  HTMLDivElement,
  CtaProps & HTMLAttributes<HTMLDivElement>
>(
  (
    { headline, sub, text, highlightText = false, buttons, textAlign = "left" },
    ref
  ) => (
    <div className={classnames("c-cta", `c-cta--align-${textAlign}`)} ref={ref}>
      <Headline
        level="h2"
        style={highlightText === true ? "h1" : "h2"}
        align={textAlign}
        text={headline}
        sub={sub}
        spaceAfter="minimum"
      />
      {text ? (
        <Text highlightText={highlightText ? true : false} text={text} />
      ) : (
        ""
      )}

      <ButtonGroup
        // @ts-expect-error
        buttons={buttons}
        arrangement={textAlign}
      />
    </div>
  )
);

export const CtaContext = createContext(CtaContextDefault);
export const Cta = forwardRef<
  HTMLDivElement,
  CtaProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(CtaContext);
  return <Component {...props} ref={ref} />;
});
Cta.displayName = "Cta";
