import {useEffect, useState} from "react";
import {supabase} from "./supabaseClient";
import {Session} from "@supabase/gotrue-js";
import Router from "next/router";

export function useSession({redirectTo, redirectIfFound = false}: {redirectTo?: string, redirectIfFound?: boolean} = {}) {
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