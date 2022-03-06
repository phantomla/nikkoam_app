import Head from 'next/head';

import {HomePage} from './home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nikkoam App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap"
          rel="preload"
        />
      </Head>

      {/* This is Home page */}
      <body>
        <HomePage />
      </body>
    </div>
  );
}
