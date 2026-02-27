import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({ children, header, footer }) {
  const renderedHeader = header === undefined ? <Header /> : header;
  const renderedFooter = footer === undefined ? <Footer /> : footer;
  const renderedContent = children ?? <Outlet />;

  return (
    <>
      {renderedHeader}
      <main>{renderedContent}</main>
      {renderedFooter}
    </>
  );
}
