import Header from './Header';
import SideBar from './SideBar';
function DefaultLayout({ children }) {
  return (
    <>
      <div className="wraper">
        <Header />
        <div className="container">
          <SideBar />
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
