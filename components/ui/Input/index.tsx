export type InputProps = {
    id: string;
    label?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    password?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({id, label, value, placeholder, disabled, password, onChange}: InputProps) {
    return (
        <div className="flex flex-col w-fit gap-2 mb-4">
            <label className="font-bold" htmlFor={id}>{label}</label>
            <input
                className="bg-black rounded border-solid border border-gray-dark focus:border-gray focus:outline-none px-4 py-2 placeholder-gray-dark"
                type={password ? "password" : "text"} id={id} value={value} title={label} placeholder={placeholder}
                disabled={disabled} onChange={onChange}
            />
        </div>
    )
}