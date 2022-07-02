export type SelectProps = {
    id: string;
    options: string[];
    label?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({id, options, label, value, disabled, onChange}: SelectProps) {
    return (
        <div className="flex flex-col w-fit gap-2 mb-4">
            <label className="font-bold" htmlFor={id}>{label}</label>
            <select
                className={`rounded bg-black border border-solid border-gray-dark focus:border-gray focus:outline-none px-4 py-2 ${disabled ? 'cursor-not-allowed text-gray-dark' : 'cursor-pointer'}`}
                title={label} id={id} value={value} onChange={onChange} disabled={disabled}
            >
                {options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    )
}