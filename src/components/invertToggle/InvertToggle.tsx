import "./invert-toggle.scss";

export const InvertToggle = ({ setParentRef }) => {
  const handleClick = () => {
    if (setParentRef.current) {
      if (setParentRef.current.getAttribute("ks-inverted") === "true") {
        setParentRef.current.removeAttribute("ks-inverted");
      } else {
        setParentRef.current.setAttribute("ks-inverted", "true");
      }
    }
  };

  return (
    <div className="invert-toggle--container">
      <label className="invert-toggle">
        <span className="invert-toggle__label">Invert Section</span>
        <label className="invert-toggle__switch">
          <input
            className="invert-toggle__checkbox"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="invert-toggle__slider"></div>
        </label>
      </label>
    </div>
  );
};
