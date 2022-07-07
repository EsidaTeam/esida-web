import {NextPage} from "next";
import {Button, Input} from "../../components/ui";
import {Layout} from "../../components/common";
import {useState} from "react";
import {useFormField} from "../../utils/hooks";
import Router from "next/router";
import {useUser} from "@supabase/auth-helpers-react";
import {supabaseClient} from "@supabase/auth-helpers-nextjs";

const Auth: NextPage = () => {
    const { user } = useUser()
    if (user) {
        Router.push("/")
    }

    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const email = useFormField({
        id: "email",
        label: "Почта",
        type: "email",
        validation: {
            required: true,
            minLength: 6,
            maxLength: 255,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        }
    })
    const password = useFormField({
        id: "password",
        label: "Пароль",
        type: "password",
        validation: {
            required: true,
            minLength: 8,
            maxLength: 255,
        }
    })
    const passwordConfirmation = useFormField({
        id: "passwordConfirmation",
        label: "Подтверждение пароля",
        type: "password",
        validation: {
            required: true,
            minLength: 8,
            maxLength: 255,
            validate: (value) => ({
                status: value === password.value,
                message: "Пароли не совпадают",
            })
        }
    })

    const handleRegistration = async () => {
        try {
            setLoading(true)
            const { error } = await supabaseClient.auth.signUp({ email: email.value, password: password.value })
            if (error) throw error
            alert('Регистрация успешна. Проверьте почту для подтверждения аккаунта.')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleLogin = async () => {
        try {
            setLoading(true)
            const { error } = await supabaseClient.auth.signIn({ email: email.value, password: password.value })
            if (error) throw error
            await Router.push('/')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout title="Авторизация">
            <div className="flex justify-center items-center h-fit w-full my-32">
                <div className="rounded p-8 border-gray-dark border border-solid w-96">
                    <h1 className="text-center text-2xl font-bold mb-4">Авторизация</h1>
                    <div className="flex flex-col items-end">
                        <Input {...email} fullWidth />
                        <Input {...password} fullWidth />
                        {!isLogin && <Input {...passwordConfirmation} fullWidth />}
                        <Button variant={"primary"} size="full" loading={loading} onClick={isLogin ? handleLogin : handleRegistration} disabled={!email.valid || !password.valid || (!passwordConfirmation.valid && !isLogin)}>{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
                        <div className="flex justify-center items-center mt-4">
                            <span className="text-sm">{isLogin? 'Нет аккаунта' : 'Уже есть аккаунт'}?</span>
                            <span>&nbsp;</span>
                            <span className="text-primary text-sm cursor-pointer" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Зарегистрироваться' : 'Войти'}</span>
                        </div>
                        {isLogin && <div className="flex justify-center items-center">
                            <span className="text-sm">Забыли пароль?</span>
                            <span>&nbsp;</span>
                            <span className="text-primary text-sm cursor-pointer" onClick={() => Router.push('/auth/reset-password')}>Восстановить</span>
                        </div>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Auth