import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Layout from '../components/layout/Layout'
import Layout from "@/components/layout/Layout";
import JobDetails from "@/components/job/JobDetails";
import Home from "@/components/Home";
const inter = Inter({ subsets: ['latin'] })
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import NotFound from "@/components/layout/NotFound";



export default function JobDetailsPage({job, candidates, error}) {
    console.log('job:', job);
    console.log('candidates:', candidates);
    console.log('error:', error);

    //if (error.includes("Not found")) return <NotFound></NotFound>
    if (error) return <NotFound></NotFound>

    return (
        <Layout title={job.title}>
            <JobDetails job={job} candidates={candidates}/>
        </Layout>
    )
}

export async function getServerSideProps({params}){
    try
    {
        const response = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`)
        const job = response.data.job;
        const candidates = response.data.applications;
        return {
            props: {
                job,
                candidates,
            }
        }
    }
    catch(error)
    {
        return {
            props: {
                error: error.response.data.detail, //django throws error by default in this detail property.
            }
        }
    }
}
