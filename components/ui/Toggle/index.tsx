export type ToggleProps = {
    id: string;
    label?: string;
    value?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Toggle(
    {
        label,
        value,
        onChange,
        disabled,
        variant = 'secondary',
        size = 'md',
        id
    }: ToggleProps
) {
    return (
        <label className="flex flex-row items-center cursor-pointer mb-4 relative" htmlFor={id}>
            <input type="checkbox" role="switch" className="sr-only" id={id} checked={value} onChange={onChange}
                   disabled={disabled}/>
            <div
                className="bg-gray-dark w-11 h-6 rounded-full after:absolute after:top-0.5 after:left-0.5 after:rounded-full after:bg-white after:transition after:h-5 after:w-5"/>
            <span className="ml-3">{label}</span>
            <style jsx>{`
              div:after {
                content: '';
              }

              input:checked + div:after {
                transform: translateX(100%);
              }

              input:checked + div {
              @apply bg-gray border-gray;
              }
            `}</style>
        </label>
    )
}