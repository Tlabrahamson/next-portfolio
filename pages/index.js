import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Tim Abrahamson | Web Dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{" "}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>
        </main>
      </div>
    </Layout>
  );
}
