import {NextPage} from "next";
import {useEffect} from "react";
import Router from "next/router";
import {Layout} from "../../components/common";
import {Spinner} from "../../components/ui";
import {supabaseClient} from "@supabase/auth-helpers-nextjs";

const Logout: NextPage = () => {
    useEffect(() => {
        supabaseClient.auth.signOut().then(() => {
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