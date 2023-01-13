import Head from 'next/head'
import Header from '../components/header'
import Jumbotron from '../components/jumbotron'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
            <title>Arenaz - Your Fitness Arena</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='main'>
                <Header></Header>
                <Jumbotron></Jumbotron>
            </main>
        </>
    )
}
