import React from "react";

interface CustomLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const CustomLink = ({ href, className = "", children }: CustomLinkProps) => {
  return (
    <>
      {" "}
      <a
        href={href}
        className={className}
        target="_blank"
        rel="sponsored noopener noreferrer"
      >
        {children}
      </a>{" "}
    </>
  );
};

export default CustomLink;
