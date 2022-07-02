import type {NextPage} from 'next'
import {Layout} from '../components/common';

const Home: NextPage = () => {
    return (
        <Layout title="В разработке">
            <span className="flex justify-center items-center font-bold text-3xl h-screen">🚧 Сайт в разработке</span>
        </Layout>
    )
}

export default Home
