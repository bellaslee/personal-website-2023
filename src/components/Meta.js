import React from "react";
import Head from "next/head";

export default function Meta({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Bella Lee's personal website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}