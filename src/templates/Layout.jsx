import { FaHome, FaChartBar, FaBurn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Layout({ children }) {
  return (
    <div className='main-container d-flex'>
      <div className='sidebar' id='side_nav'>
        <div className='header-box px-3 pt-3 pb-4'>
          <h1 className='fs-4'>
            <span className='bg-white text-dark rounded shadow px-2 me-2'>
              LCI
            </span>
            Proyecto Final
          </h1>
        </div>

        <ul className='list-unstyled px-2'>
          <li>
            <Link to='/home' className='text-decoration-none px-3 py-2 d-block'>
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/datos'
              className='text-decoration-none px-3 py-2 d-block'
            >
              <FaBurn />
              Datos
            </Link>
          </li>
          <li>
            <Link
              to='/reportes'
              className='text-decoration-none px-3 py-2 d-block'
            >
              <FaChartBar />
              Reportes
            </Link>
          </li>
        </ul>
        <hr className='h-color mx-2' />
      </div>
      <div className='content'>{children}</div>
    </div>
  );
}
