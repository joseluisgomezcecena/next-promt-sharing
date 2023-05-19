import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Layout from '../components/layout/Layout'
import Layout from "@/components/layout/Layout";
import Home from "@/components/Home";
const inter = Inter({ subsets: ['latin'] })
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";



export default function JobDeailsPage({data}) {
    console.log('job:', data);
    return (
        <Layout>
           <h1>Details</h1>
        </Layout>
    )
}

export async function getServerSideProps({params}){
    const response = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`)
    const data = response.data
    return {
        props: {
            data,
        }
    }
}
