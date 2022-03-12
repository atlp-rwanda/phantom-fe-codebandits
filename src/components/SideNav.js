import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import dashIcon from '../images/dashboardIcon.png';
import manageIcon from '../images/manageIcon.png';
import notificationIcon from '../images/notificationIcon.png';
import profileIcon from '../images/profileIcon.png';
import settingIcon from '../images/settingIcon.png';
import supportIcon from '../images/supportIcon.png';
import profileImg from '../images/profileImg.jpg';
import { ButtonA as Button } from './Button.js';
import SideNavLink from './SideNavLink.js';

const SideNav = ({ styles }) => {
  const navigate = useNavigate();
  const logout = () => {
    toast('You are logged out', { type: 'success' });
    navigate('/login');
  };

  return (
    <main className={`${styles} flex text-sm`}>
      <aside className="border-r-2 h-full sticky top-0 px-8 py-4 bg-gray-100 transition-transform">
        <div className=" mb-6">
          <span className="rounded-full mx-auto flex items-center justify-center h-12 w-12 mb-5">
            <img
              src={profileImg}
              alt="Image"
              className="rounded-full object-cover h-12 w-12"
            />
          </span>
          <div className="text-center font-black text-md">
            <h1>NGABO Patrick</h1>
            <div>
              <h1 className="font-bold">Operator</h1>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-black">Account</h2>
          <ul className="mb-2">
            <SideNavLink image={dashIcon} linkTo="/account" name="Dashboard" />
            <SideNavLink image={manageIcon} linkTo="#p" name="Management" />
            <SideNavLink
              image={profileIcon}
              linkTo="/dashboard/profile"
              name="Profile"
            />
            <SideNavLink
              image={notificationIcon}
              linkTo="#p"
              name="Notifications"
            />
            <SideNavLink image={supportIcon} linkTo="#p" name="Support" />
            <SideNavLink image={settingIcon} linkTo="#p" name="Settings" />
          </ul>
          <Button
            name="Logout"
            type="submit"
            id="logout"
            styles="bg-red px-6 py-1 hover:bg-red-600"
            onClick={logout}
          />
        </div>
      </aside>
    </main>
  );
};

export default SideNav;
