# Button Component

```Javascript

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 focus:ring-stone-900 shadow-lg shadow-stone-900/10",
    secondary: "bg-white text-stone-900 hover:bg-stone-50 border border-stone-200 shadow-sm focus:ring-stone-200",
    ghost: "text-stone-600 hover:text-stone-900 hover:bg-stone-100",
    outline: "bg-transparent border border-stone-300 text-stone-700 hover:border-stone-800 hover:text-stone-900"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2 -mr-1">{icon}</span>}
    </button>
  );
};

export default Button;

```
