import "./Header.scss";
import { IoMdNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="header__end">
        <p className="header__notification">
          <IoMdNotifications />
        </p>
        <div className="header__search">
          <p>
            <FaSearch className="searchIcon" />
          </p>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Header;
