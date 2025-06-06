import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'apple-health';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rightIcon?: ReactNode;
  onClick?: () => void;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  className = '',
  disabled,
  onClick,
  ...props
}) => {
  // Base classes
  const baseClasses = 'rounded-lg font-medium transition-colors inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 focus-visible:ring-opacity-50',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-300 focus-visible:ring-opacity-50',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500 focus-visible:ring-opacity-50',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500 focus-visible:ring-opacity-50',
    success: 'bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500 focus-visible:ring-opacity-50',
    'apple-health': 'bg-[#007AFF] text-white hover:bg-[#007AFF]/90 focus-visible:ring-[#007AFF]/50 focus-visible:ring-opacity-50',
  };

  // Disabled classes
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Combine classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled || isLoading ? disabledClasses : ''}
    ${widthClasses}
    ${className}
  `;

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={disabled || isLoading ? undefined : onClick}
      {...props}
    >
      {isLoading && (
        <div className="mr-2">
          <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
        </div>
      )}

      {Icon && iconPosition === 'left' && !isLoading && (
        <Icon size={iconSize} className={`mr-2`} />
      )}

      {children}

      {Icon && iconPosition === 'right' && !isLoading && (
        <Icon size={iconSize} className={`ml-2`} />
      )}
    </button>
  );
};

export default Button;
import React, { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes
  const baseClasses = 'rounded-lg font-medium transition-colors inline-flex items-center justify-center';

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50',
  };

  // Disabled classes
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Combine classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled || isLoading ? disabledClasses : ''}
    ${widthClasses}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="mr-2">
          <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
        </div>
      )}

      {Icon && iconPosition === 'left' && !isLoading && (
        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="mr-2" />
      )}

      {children}

      {Icon && iconPosition === 'right' && !isLoading && (
        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="ml-2" />
      )}
    </button>
  );
};

export default Button;