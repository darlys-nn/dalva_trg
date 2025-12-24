import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg shadow-md",
    outline: "border-2 border-primary-600 text-primary-700 hover:bg-primary-50",
    ghost: "text-primary-700 hover:bg-primary-50",
  };

  const widthClass = fullWidth ? "w-full" : "w-fit";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};