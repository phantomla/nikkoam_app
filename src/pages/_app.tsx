// import App from "next/app";

import type {AppProps /*, AppContext */} from 'next/app';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  const Components = () => <Component {...pageProps} />;

  return <Components />;
};

export default MyApp;
