import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-medium text-center">
        <ul className="justify-center flex flex-wrap -mb-px">
          <li className="mr-2">
            <Link
              to="/"
              aria-current="page"
              className="inline-block p-4 text-white hover:text-blue-600"
            >
              Homepage
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="/list"
              className="inline-block p-4 text-white hover:text-blue-600"
            >
              Show All Contacts
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="/search"
              className="inline-block p-4 text-white hover:text-blue-600"
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
