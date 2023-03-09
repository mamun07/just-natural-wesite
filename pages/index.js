import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Just Natural || we are just natural</title>
        <meta name="description" content="We are just natural descriptions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Welcome to Just Natural
        </h1>
      </main>
    </>
  );
}
