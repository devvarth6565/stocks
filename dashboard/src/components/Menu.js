
import React, {useState} from "react";
import { Link } from "react-router-dom";
const Menu = () => {
const [selectedMenue, setSelectedMenu] = useState(0);
const [isProfileDropdownOpen,setIsProfileDropdownOpen] = useState(false);


  const handleMenueClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="app logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to={"/"} onClick={() => handleMenueClick(0)}>
            <p className={selectedMenue===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/orders"} onClick={() => handleMenueClick(1)}>
            <p className={selectedMenue===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={() => handleMenueClick(2)}>
            <p className={selectedMenue===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/positions"} onClick={() => handleMenueClick(3)}>
            <p className={selectedMenue===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/funds"} onClick={() => handleMenueClick(4)}>
            <p className={selectedMenue===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/apps"} onClick={() => handleMenueClick(5)}>
            <p className={selectedMenue===5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
