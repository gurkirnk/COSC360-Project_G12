import * as React from 'react';
import './Breadcrumbs.css';

export default function Breadcrumbs() {
  // initalize pathname state with current location
  const [pathname, setPathname] = React.useState(window.location.pathname);

  // update pathname state on browser navigation events - learned these from googling stuff about how to automatically do breadcrumbs in react
  React.useEffect(() => {
    function updatePathname() {
      setPathname(window.location.pathname);
    }
    window.addEventListener('popstate', updatePathname);
    window.addEventListener('hashchange', updatePathname);

    return () => {
      window.removeEventListener('popstate', updatePathname);
      window.removeEventListener('hashchange', updatePathname);
    };
  }, []);


// put the home at the start of the pathnames array so it is always present in the breadcrumbs
  const pathnames = ['home', ...pathname.split('/').filter(x => x)];


  return (
    <nav className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {pathnames.map((name, index) => {
          // set the path of the first breadcrumb to '/' as that is always home given the upper thing
          const routeTo = index === 0
            ? '/'
            : `/${pathnames.slice(1, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={`${name}-${index}`} className="breadcrumbs-item">
              {isLast ? (
                <span className="crumb-label">{name}</span>
              ) : (
                <div>
                <a className="crumb-label" href={routeTo}>{name}</a>
                <span className="separator">
                  &gt;
                </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};