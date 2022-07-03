import InputWrapper from "../InputWrapper";

export type SelectProps = {
    id: string;
    options: SelectOption[];
    label?: string;
    value?: string;
    disabled?: boolean;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type SelectOption = {
    value: string;
    label: string;
}

export default function Select({id, options, label, value, disabled, error, onChange}: SelectProps) {
    return (
        <InputWrapper id={id} label={label} error={error}>
            <select
                className={`rounded bg-black border border-solid border-gray-dark focus:border-gray focus:outline-none px-4 py-2 ${disabled ? 'cursor-not-allowed text-gray-dark' : 'cursor-pointer'}`}
                title={label} id={id} value={value} onChange={onChange} disabled={disabled}
            >
                {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
        </InputWrapper>
    )
}