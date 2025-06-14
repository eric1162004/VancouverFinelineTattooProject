import React from "react";

const Button = React.forwardRef(
  ({ children, onClick, className, href }, ref) => {
    return (
      <a
        href={href}
        className={`text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-light rounded-full tracking-wider px-5 py-2.5 text-center mr-2 mb-2 border-2 border-white ${className}`}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

Button.displayName = "MyButton"

export default Button;
