import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <h3>Header</h3>
      {children}
      <h3>Footer</h3>
    </>
  );
};

export default Layout;
