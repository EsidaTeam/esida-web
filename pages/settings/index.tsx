import {useEffect} from "react";
import Router from "next/router";
import {Layout} from "../../components/common";
import {Spinner} from "../../components/ui";

const Settings = () => {
    useEffect(() => {
        Router.push('/settings/general');
    });

    return (
        <Layout title="Настройки">
            <div className="w-full flex justify-center p-14">
                <Spinner />
            </div>
        </Layout>
    );
}

export default Settings;