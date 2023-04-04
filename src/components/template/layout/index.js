import { Outlet, Link, NavLink } from "react-router-dom";


function Layout() {
    let style = {
        "background-color": "#e3f2fd"
    }
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">My App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/region">Region</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee">Employee</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <Outlet />
    </>
  )
};

export default Layout;