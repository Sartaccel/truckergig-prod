import Head from "next/head";
import React from "react";
import Blognews from "../sections/BlogNews/blognews"

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>TruckerGIG Services</title>
        <meta
          name="description"
          content="TruckerGIG is the global marketplace and 'one-stop-shop' to bring all the service providers and vendors servicing the shippers, brokers and transportation carriers. The overall objective is to provide a seamless experience, help to identify the right provider, optimize the costs, improve productivity, efficiency and profitability."
        />
      </Head>
      <div className="main" style={{ overflow: "hidden", margin: 0, padding: 0 }}>
        <Blognews />
      </div>
    </>
  );
};

export default Blog;