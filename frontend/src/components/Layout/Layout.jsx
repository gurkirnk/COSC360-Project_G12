import Header from '../Header';
import { Outlet } from 'react-router-dom';

export default function Layout({ children, header, footer }) {
  const renderedHeader = header === undefined ? <Header /> : header;
  const renderedFooter = footer === undefined ? null : footer;
  const renderedContent = children ?? <Outlet />;

  return (
    <>
      {renderedHeader}
      <main>{renderedContent}</main>
      {renderedFooter}
    </>
  );
}
