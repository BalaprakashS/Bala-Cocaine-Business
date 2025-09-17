import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 m-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {currentYear} Bala SRM Goods Management System. All rights reserved.
        </p>
        <p className="mb-0">
          Developed with <i className="fas fa-heart text-danger"></i> by <a className="text-decoration-none" href="https:/github.com/SauRavRwT/">Saurav Rawat.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
