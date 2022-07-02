import {NextPage} from "next";
import {Layout} from "../components/common";

const Error404: NextPage = () => {
    return (
        <Layout title="Страница не найдена">
            <div className="flex justify-center items-center h-screen">
                <p className="text-4xl animate-pulse">🔍 Страница не найдена</p>
            </div>
        </Layout>
    );
}

export default Error404;