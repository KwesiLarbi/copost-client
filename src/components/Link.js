import { jsx, NavLink as menuLink, Link as A } from 'theme-ui';

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}
    </A>
  );
};