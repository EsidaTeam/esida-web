import {useEffect, useState} from "react";
import {supabase} from "./supabaseClient";
import {Session, User} from "@supabase/gotrue-js";
import Router from "next/router";

export type AuthHookProps = {
    redirectTo?: string,
    redirectIfFound?: boolean
}

export function useSession({redirectTo, redirectIfFound = false}: AuthHookProps = {}) {
    const [session, setSession] = useState<Session | null>(null)
    useEffect(() => {
        const s = supabase.auth.session()
        setSession(s)
        if (redirectTo && Boolean(redirectIfFound) === Boolean(s)) {
            Router.push(redirectTo)
        }

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [redirectIfFound, redirectTo])

    return session;
}

export function useUser(props: AuthHookProps = {}) {
    const session = useSession(props)
    const [user, setUser] = useState<{user?: User | null, userData?: any, error?: any}>({})
    useEffect(() => {
        (async () => {
            const usr = await supabase.auth.user()
            let { data, error } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', usr?.id)
                .single()

            setUser({
                user: usr,
                userData: data,
                error
            })
        })();
    }, [session])

    return user;
}

export type FormFieldProps = {
    id: string,
    label?: string,
    placeholder?: string,
    type?: "number" | "text" | "email" | "password",
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
    onChange?: (e: any) => void,
}

export function useFormField(props: FormFieldProps): FormFieldData {
    const [value, setValue] = useState<string | undefined>(undefined)
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
        onChange: (e: any) => setValue(e.target.value),
    }
}