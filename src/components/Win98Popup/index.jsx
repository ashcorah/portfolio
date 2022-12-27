import React from "react";
import style from "./Win98Popup.module.scss";
import cx from "classnames";

const Win98Popup = ({ children, title }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  function Close() {
    setIsOpen(false);
  }

  return (
    <div className={cx(style.win98popup, !isOpen && style.close, style.shadow)}>
      <div className={style.bar}>
        <p>{title}</p>
        <button onClick={Close} className={style.shadow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8px"
            height="7px"
            viewBox="0 0 8 7"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
          >
            <path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" />
          </svg>
        </button>
      </div>
      <section>{children}</section>
    </div>
  );
};

export default Win98Popup;
