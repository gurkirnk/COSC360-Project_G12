import Header from '../Header';

export default function Layout({ children, header, footer }) {
  const renderedHeader = header === undefined ? <Header /> : header;
  const renderedFooter = footer === undefined ? null : footer;

  return (
    <>
      {renderedHeader}
      <main>{children}</main>
      {renderedFooter}
    </>
  );
}
