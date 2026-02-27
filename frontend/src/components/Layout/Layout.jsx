import Header from '../Header';
import { Outlet } from 'react-router-dom';

export default function Layout({ children, header, footer }) {
  const renderedHeader = header === undefined ? <Header /> : header;
  //TODO: Make a footer and put it here in place of null
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
