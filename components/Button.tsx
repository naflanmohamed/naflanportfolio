import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  // Sharper corners, no shadows, tech borders
  const baseStyles = "inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed border";
  
  const variants = {
    primary: "bg-brand-300 border-brand-300 text-black hover:bg-white hover:border-white font-bold",
    secondary: "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700",
    outline: "bg-transparent border-zinc-600 text-zinc-300 hover:border-brand-300 hover:text-brand-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-5 text-sm",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;