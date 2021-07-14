import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'


export default function Home({session}) {
  if(!session) return <Login/>
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>facebook</title>
        
      </Head>
      <Header/>

     <main className="flex">
      <Sidebar/>
      <Feed/>
     </main>
    </div>
  )
}


export async function getServerSideProps(context){

  const session =await getSession(context);

  return{
    props:{
        session
    }
  }
}