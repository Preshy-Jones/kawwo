import React from "react";

const Hamburger = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`MuiSvgIcon-root jss261 menuIcon ${className}`}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
};

export default Hamburger;
