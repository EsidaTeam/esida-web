import {NextPage} from "next";
import {useEffect} from "react";
import Router from "next/router";
import {supabase} from "../../utils/supabaseClient";
import {Layout} from "../../components/common";
import {Spinner} from "../../components/ui";

const Logout: NextPage = () => {
    useEffect(() => {
        supabase.auth.signOut().then(() => {
            Router.push("/");
        })
    }, []);

    return (
        <Layout title="Выход">
            <div className="flex justify-center items-center h-fit w-full my-32">
                <Spinner />
            </div>
        </Layout>
    );
}

export default Logout;