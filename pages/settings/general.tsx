import {NextPage} from "next";
import {Layout, Settings} from "../../components/common";
import {Input} from "../../components/ui";
import Router from "next/router";
import {useUser} from "@supabase/auth-helpers-react";
import {useFormField, useUserData} from "../../utils/hooks";
import React, {useEffect, useState} from "react";
import {supabaseClient} from "@supabase/auth-helpers-nextjs";

const GeneralSettings: NextPage = () => {
    const {user, isLoading} = useUser()
    const userData = useUserData(user)
    const [loading, setLoading] = useState(false)

    const username = useFormField({
        id: "username",
        label: "Имя пользователя",
        type: "text",
        validation: {
            required: true,
            minLength: 6,
            maxLength: 255,
            pattern: /^[A-Z][a-z\d]+_[A-Z][a-z\d]+$/,
        }
    })

    useEffect(() => {
        if (!user && !isLoading) Router.push("/")
        if (userData) {
            username.setValue(userData.username)
        }
    }, [userData, isLoading, user])

    const updateUser = async () => {
        try {
            setLoading(true)
            const updates = {
                id: user?.id,
                username: username.value,
            }

            const { error } = await supabaseClient.from('profiles').upsert(updates, {
                returning: 'minimal',
            })

            if (error) throw error
            alert('Имя пользователя успешно обновлено.')
        } catch (error: any) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout title="Настройки">
            <Settings title="Основное" sections={[
                {title: "Основное", href: "/settings/general"},
                {title: "Персонализация", href: "/settings/customization"},
                {title: "Безопасность", href: "/settings/security"},
                {title: "Уведомления", href: "/settings/notifications"},
            ]} loading={loading} valid={username.valid} apply={updateUser}>
                <Input {...username} />
            </Settings>
        </Layout>
    );
}

export default GeneralSettings;