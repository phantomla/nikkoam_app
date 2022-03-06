import '../../styles/globals.css';

import type {AppProps} from 'next/app';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  const Components = () => <Component {...pageProps} />;

  return <Components />;
};

export default MyApp;
