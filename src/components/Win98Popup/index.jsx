import React from "react";
import style from "./Win98Popup.module.scss";
import cx from "classnames";
import { Box } from "@chakra-ui/react";

const Win98Button = ({ children, ...rest }) => (
  <Box as="button" className={style.shadow} {...rest}>
    <img
      src="https://raw.githubusercontent.com/mbledkowski/win98popup/master/outline.svg"
      alt=""
      width="66.9"
      height="15"
    />
    {children}
  </Box>
);

const Win98Popup = ({ children, title }) => {
  function Close() {
    alert("You dont want to read about me?");
  }

  function No() {
    alert("Your loss!");
  }

  return (
    <div className={cx(style.win98popup, style.shadow)}>
      <div className={style.bar}>
        <p>{title}</p>
        <button onClick={Close} className={style.shadow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8px"
            height="7px"
            viewBox="0 0 8 7"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
          >
            <path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" />
          </svg>
        </button>
      </div>
      <section>{children}</section>
      <p>Do you want to get in contact?</p>
      <div className={style.buttons}>
        <Win98Button as="a" href="mailto:ashcorah@gmail.com">
          <p>
            <u>Y</u>es
          </p>
        </Win98Button>
        <Win98Button onClick={No}>
          <p>
            <u>N</u>o
          </p>
        </Win98Button>
        <Win98Button onClick={Close}>
          <p>Cancel</p>
        </Win98Button>
      </div>
    </div>
  );
};

export default Win98Popup;
