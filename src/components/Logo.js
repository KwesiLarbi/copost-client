import { Image } from 'theme-ui';
import { Link } from './Link';

export default function Logo({ src, ...rest}) {
  return (
    <Link 
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}
      {...rest}
    >
      {/*<Image src={src} alt="Covid-19 App" />*/}
      <h3>copost</h3>
    </Link>
  );
};