import React from "react";
import Link from "next/link";
import {Button} from "../../ui";

export type SettingsProps = {
    children: React.ReactNode;
    title: string;
    sections: {
        title: string;
        href: string;
    }[];
    apply?: () => void;
    loading?: boolean;
    valid?: boolean;
}

export default function Settings({children, sections, title, apply, valid = true, loading}: SettingsProps) {
    return (
        <div className="flex justify-center px-24 py-8">
            <div className="flex flex-col rounded-lg border border-solid border-gray-dark p-8 gap-1 w-64 h-fit">
                <h1 className="text-2xl font-bold">Настройки</h1>
                {sections.map(({title, href}) => (
                    <Link href={href} key={href}>
                        <a className="text-gray text-lg">{title}</a>
                    </Link>
                ))}
            </div>
            <div className="ml-4 rounded-lg border-solid border-gray-dark border p-16 flex-1 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-16">{title}</h1>
                {children}
                <Button onClick={apply} loading={loading} disabled={!valid}>Сохранить</Button>
            </div>
        </div>
    );
}