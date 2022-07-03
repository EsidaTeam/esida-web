import type {NextPage} from 'next'
import {useState} from 'react'
import {Layout} from '../components/common';
import {Button, Input, Select, Spinner, Toggle} from '../components/ui'

const Demo: NextPage = () => {
    const [variant, setVariant] = useState<"primary" | "secondary" | "success" | "danger" | "warning">('primary');
    const [enabled, setEnabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Layout title="Демонстрация компонентов">
            <Select label="Variant" id="variant" value={variant} disabled={!enabled} onChange={(e) => {
                setVariant(e.target.value as "primary" | "secondary" | "success" | "danger" | "warning")
            }} options={[
                {
                    value: "secondary",
                    label: "Secondary",
                },
                {
                    value: "primary",
                    label: "Primary",
                },
                {
                    value: "success",
                    label: "Success",
                },
                {
                    value: "danger",
                    label: "Danger",
                },
                {
                    value: "warning",
                    label: "Warning",
                },
            ]} error={variant === 'danger' ? 'aww hell nah' : undefined}/>

            <Toggle label="enabled" id="enabled" value={enabled} onChange={(e) => {
                setEnabled(e.target.checked)
            }}/>

            <Toggle label="loading" id="loading" value={loading} onChange={(e) => {
                setLoading(e.target.checked)
            }}/>

            <Toggle id={'sex'} disabled={!enabled} label='Toggle'/>

            <Input id='sex2' disabled={!enabled} label='Field' placeholder='Placeholder' error={variant === 'danger' ? 'not the!!!' : undefined} />

            <Button variant={variant} disabled={!enabled} loading={loading} onClick={() => {
                setLoading(true)
                setTimeout(() => setLoading(false), Math.random() * 2000 + 600)
            }}>Button</Button>

            <Spinner variant={variant}/>
        </Layout>
    )
}

export default Demo