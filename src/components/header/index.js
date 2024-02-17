import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header() {
  const location = useLocation();
  return (
    <div className="block">
      {location.pathname === "/information" ? (
        <div className="header">
          <Link to="/">
            <p className="text">Главная</p>
          </Link>
          <Link to="/portfolio">
            <p className="text">Портфолио</p>
          </Link>
          {/* <Link to="/information">
            <u>
              <p className="text">Информация</p>
            </u>
          </Link> */}
          <Link to="/contact">
            <p className="text">Контакты</p>
          </Link>
        </div>
      ) : location.pathname === "/portfolio" ? (
        <div className="header">
          <Link to="/">
            <p className="text">Главная</p>
          </Link>
          <Link to="/portfolio">
            <u>
              <p className="text">Портфолио</p>
            </u>
          </Link>
          {/* <Link to="/information">
            <p className="text">Информация</p>
          </Link> */}
          <Link to="/contact">
            <p className="text">Контакты</p>
          </Link>
        </div>
      ) : location.pathname === "/contact" ? (
        <div className="header">
          <Link to="/">
            <p className="text">Главная</p>
          </Link>
          <Link to="/portfolio">
            <p className="text">Портфолио</p>
          </Link>
          {/* <Link to="/information">
            <p className="text">Информация</p>
          </Link> */}
          <Link to="/contact">
            <u>
              <p className="text">Контакты</p>
            </u>
          </Link>
        </div>
      ) : (
        <div className="header">
          <Link to="/">
            <u>
              <p className="text">Главная</p>
            </u>
          </Link>
          <Link to="/portfolio">
            <p className="text">Портфолио</p>
          </Link>
          {/* <Link to="/information">
            <p className="text">Информация</p>
          </Link> */}
          <Link to="/contact">
            <p className="text">Контакты</p>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Header;
