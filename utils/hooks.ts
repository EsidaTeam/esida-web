import {useEffect, useState} from "react";
import {supabaseClient} from "@supabase/auth-helpers-nextjs";
import {User} from "@supabase/auth-helpers-react";

export function useUserData(user: User | null) {
    const [data, setData] = useState<any | null>();

    useEffect(() => {
        if (user)
            supabaseClient
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .maybeSingle()
                .then(
                    (
                        {data}
                    ) => {
                        setData(data)
                    }
                );
    }, [user]);

    return data;
}

export type FormFieldProps = {
    id: string,
    label?: string,
    placeholder?: string,
    type?: "number" | "text" | "email" | "password",
    defaultValue?: string,
    onChange?: (s: string | undefined) => void,
    validation: {
        required?: boolean,
        minLength?: number,
        maxLength?: number,
        pattern?: RegExp,
        validate?: (value: string | undefined) => {
            status: boolean,
            message?: string
        }
    }
}

export type FormFieldData = {
    value?: string,
    valid: boolean,
    id: string,
    label?: string,
    placeholder?: string,
    type?: "number" | "text" | "email" | "password",
    error?: string
    onChange: (e: any) => void,
    setValue: (value: string | undefined) => void
}

export function useFormField(props: FormFieldProps): FormFieldData {
    const [value, setValue] = useState<string | undefined>(props.defaultValue || undefined)
    let error = undefined;
    if (props.validation.required && value === "") {
        error = "Обязательное поле не заполнено"
    } else if (props.validation.minLength && value && value.length < props.validation.minLength) {
        error = `Минимальная длина ${props.validation.minLength}`
    } else if (props.validation.maxLength && value && value.length > props.validation.maxLength) {
        error = `Максимальная длина ${props.validation.maxLength}`
    } else if (props.validation.pattern && value && !props.validation.pattern.test(value)) {
        error = "Неверный формат"
    } else if (props.validation.validate) {
        const {status, message} = props.validation.validate(value)
        if (!status) {
            if (message) error = message
            else error = "Неверный формат"
        }
    }

    return {
        value,
        valid: Boolean(value) && !error,
        id: props.id,
        label: props.label,
        placeholder: props.placeholder,
        type: props.type,
        error,
        setValue: (e: string | undefined) => {
            setValue(e)
        },
        onChange: (e: any) => setValue(e.target.value),
    }
}