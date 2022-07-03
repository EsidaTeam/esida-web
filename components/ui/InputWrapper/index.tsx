export type InputWrapperProps = {
    children: React.ReactNode;
    id: string;
    label?: string;
    error?: string;
}

export default function InputWrapper({children, id, label, error}: InputWrapperProps) {
    return (
        <div className="flex flex-col w-fit gap-2 mb-4">
            <label className="font-bold" htmlFor={id}>{label}</label>
            {children}
            {error && <p className="text-danger text-sm">{error}</p>}
        </div>
    )
}