import React from 'react';

const Footer = () => {
  return (
    <div className="text-center bg-gray text-gray-dark border-t-4 border-main tracking-wide py-4">
      Copyright © {new Date().getFullYear()}{' '}
      <span className="text-main">Energy Team Woods</span>
    </div>
  );
};

export default Footer;
