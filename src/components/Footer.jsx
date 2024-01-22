import React from "react";

function Footer() {
  const year = new Date().getFullYear()
  Footer =
    <footer>
      <p>All Rights Reserved {year}</p>
    </footer>

  return Footer
}

export default Footer;