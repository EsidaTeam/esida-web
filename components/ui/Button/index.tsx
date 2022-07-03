import Spinner from "../Spinner";
import React from "react";

export type ButtonProps = {
    children: string,
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

export default function Button(
    {
        children,
        onClick,
        disabled,
        variant = 'secondary',
        size = 'md',
        loading,
        icon,
        iconPosition = 'left'
    }: ButtonProps
) {
    const active = !disabled && !loading;
    const inactiveStyle = 'text-gray-dark border-gray-dark cursor-not-allowed';
    const variants = {
        primary: 'text-white focus:bg-primary hover:bg-primary border-primary',
        secondary: 'text-white focus:bg-white focus:text-black hover:bg-white hover:text-black border-white',
        success: 'text-white focus:bg-success hover:bg-success border-success',
        danger: 'text-white focus:bg-danger hover:bg-danger border-danger',
        warning: 'text-white focus:bg-warning hover:bg-warning border-warning',
    }
    const sizes = {
        sm: 'py-1 px-2',
        md: 'py-2 px-4',
        lg: 'py-3 px-6',
        xl: 'py-4 px-8',
        full: 'w-full'
    }
    const iconPositions = {
        left: 'flex-row',
        right: 'flex-row-reverse',
    }

    return (
        <button
            className={`flex transition-colors bg-black font-bold rounded border border-solid focus:outline-none ${active ? variants[variant] + " cursor-pointer" : inactiveStyle} ${sizes[size]} ${iconPositions[iconPosition]}`}
            onClick={onClick} disabled={!active}>
            {loading ? (
                <>
                    <Spinner variant="disabled"/>
                </>
            ) : (
                <>
                    {icon && <span className="icon">{icon}</span>}{children}
                </>
            )}
        </button>
    )
}