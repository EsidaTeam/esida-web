import {NextPage} from "next";
import {Button, Input} from "../components/ui";
import {Layout} from "../components/common";
import {useState} from "react";
import {supabase} from "../utils/supabaseClient";
import {useSession} from "../utils/hooks";

const Auth: NextPage = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState<string | undefined>(undefined)
    const sesssion = useSession({redirectTo: '/', redirectIfFound: true})

    const handleLogin = async (email: string) => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout title="Авторизация">
            <div className="flex justify-center items-center h-96 w-full">
                <div className="rounded p-8 border-gray-dark border border-solid w-96">
                    <h1 className="text-center text-2xl font-bold mb-4">Авторизация</h1>
                    <div className="flex flex-col items-end">
                        <Input id="email" label="Почта" placeholder="user@example.com" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} error={email === '' ? "Укажите адрес электронной почты" : undefined} type={'email'} />
                        <Button variant={"primary"} size="full" loading={loading} onClick={() => handleLogin(email as string)} disabled={!email}>Получить ссылку</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Auth