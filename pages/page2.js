import Head from 'next/head'


import Component1 from '../components/Component1'

export default function Page2() {
  return (
    <div>
      <Head>
        <title>Workshop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <div className="landing">
      <h1>Welcome to the food Page<br /></h1>
      </div>

      <Component1 />
    </div>
  )
}
