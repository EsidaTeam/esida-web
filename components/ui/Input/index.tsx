import React from "react";
import InputWrapper from "../InputWrapper";

export type InputProps = {
    id: string;
    label?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    password?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({id, label, value, placeholder, disabled, error, password, onChange}: InputProps) {
    return (
        <InputWrapper id={id} label={label} error={error}>
            <input
                className={`bg-black rounded border-solid border border-gray-dark focus:border-gray focus:outline-none px-4 py-2 placeholder-gray-dark ${disabled && "cursor-not-allowed text-gray-dark"}`}
                type={password ? "password" : "text"} id={id} value={value} title={label} placeholder={placeholder}
                disabled={disabled} onChange={onChange}
            />
        </InputWrapper>
    )
}