import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/features";
import Flow from "@/components/home/flow";
import Hero from "@/components/home/hero";
import Whychoose from "@/components/home/whychoose";
import DefaultLayout from "@/components/layouts/DefaultLayout";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex flex-col">
        <Hero />
        <Flow />
        <Features />
        <Whychoose />
        <FAQ />
      </main>
    </>
  );
};

Home.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
