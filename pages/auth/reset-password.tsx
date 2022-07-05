import {NextPage} from "next";
import {useFormField} from "../../utils/hooks";
import {Button, Input} from "../../components/ui";
import {Layout} from "../../components/common";
import {useState} from "react";
import {supabase} from "../../utils/supabaseClient";

const ResetPassword: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const email = useFormField({
        id: "mail",
        label: "Почта",
        type: "email",
        validation: {
            required: true,
            minLength: 6,
            maxLength: 255,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            validate: (_) => {
                return {
                    status: false,
                    message: "Сброс пароля пока не доступен",
                }
            }
        }
    })
    const handleReset = async () => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.api.resetPasswordForEmail(email.value as string)
            if (error) throw error
            alert('Письмо с инструкциями по восстановлению пароля отправлено на почту.')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout title="Сброс пароля">
            <div className="flex justify-center items-center h-fit w-full my-32">
                <div className="rounded p-8 border-gray-dark border border-solid w-96">
                    <h1 className="text-center text-2xl font-bold mb-4">Сброс пароля</h1>
                    <div className="flex flex-col items-end">
                        <Input {...email} fullWidth />
                        <Button variant={"primary"} size="full" loading={loading} onClick={handleReset} disabled={!email.valid}>Отправить</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ResetPassword;