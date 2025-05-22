import React from 'react';

export const Button = ({ 
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-blue-800 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-white hover:bg-gray-100 text-blue-700 border border-blue-800 hover:border-blue-300 focus:ring-blue-500",
    outline: "bg-transparent hover:bg-blue-50 text-blue-700 border border-blue-300 hover:border-blue-400 focus:ring-blue-500"
  };
  
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};