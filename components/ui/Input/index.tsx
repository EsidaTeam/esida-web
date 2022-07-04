import React from "react";
import InputWrapper from "../InputWrapper";

export type InputProps = {
    id: string;
    label?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    fullWidth?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({id, label, value, placeholder, disabled, error, type = 'text', fullWidth, onChange}: InputProps) {
    return (
        <InputWrapper id={id} label={label} error={error} fullWidth={fullWidth}>
            <input
                className={`bg-black rounded border-solid border border-gray-dark focus:border-gray focus:outline-none px-4 py-2 placeholder-gray-dark w-full ${disabled && "cursor-not-allowed text-gray-dark"}`}
                type={type} id={id} value={value} title={label} placeholder={placeholder}
                disabled={disabled} onChange={onChange}
            />
        </InputWrapper>
    )
}