import TopAppBar from "../TopAppBar/TopAppBar";

function Layout(props) {
  return (
    <div>
      <TopAppBar></TopAppBar>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
