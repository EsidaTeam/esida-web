export type SpinnerProps = {
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "disabled";
    size?: "sm" | "md" | "lg" | "xl";
}

export default function Spinner({size = 'md', variant = 'secondary'}: SpinnerProps) {
    const variants = {
        primary: 'border-t-primary',
        secondary: 'border-t-white',
        success: 'border-t-success',
        danger: 'border-t-danger',
        warning: 'border-t-warning',
        disabled: 'border-t-gray-dark',
    }
    const sizes = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-10 w-10',
    }

    return (
        <div
            className={`animate-spin inline-block border-solid border-transparent border-2 rounded-full ${variants[variant]} ${sizes[size]}`}
            role="status">
            <div className="spinner__circle"></div>
        </div>
    );
}