import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import dashIcon from '../images/dashboardIcon.png';
import manageIcon from '../images/manageIcon.png';
import notificationIcon from '../images/notificationIcon.png';
import profileIcon from '../images/profileIcon.png';
import profileImg from '../images/profileImg.jpg';
import settingIcon from '../images/settingIcon.png';
import supportIcon from '../images/supportIcon.png';
import { logoutUser } from '../redux/reducers/authReducer.js';
import CheckRole from '../utils/CheckRoles.js';
import { ButtonA as Button } from './Button.js';
import SideNavLink from './SideNavLink.js';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/reducers/authReducer.js';


const SideNav = ({ styles }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector((state) => state?.auth);
  const logout = () => {
    dispatch(logoutUser());
    toast('You are logged out', { type: 'success' });
<<<<<<< HEAD
=======
    dispatch(logoutUser())
>>>>>>> 753acfa (adds crud operations for buses)
    navigate('/');
  };

  return (
    <main className={`${styles} flex text-sm h-full `}>
      <aside className="border-r-2 h-full sticky top-0 px-4 min-w-fit py-8 bg-gray-100 transition-transform ">
        <h1 className="font-rale font-bold text-center text-3xl ">
          <Link to="/" className="font-bold text-primary font-raleway pb-3">
            Phantom
          </Link>
        </h1>
        <hr />
        <div className=" mb-6 mt-8">
          <span className="rounded-full mx-auto flex items-center justify-center h-12 w-12 mb-5">
            <img
              src={profileImg}
              alt="Image"
              className="rounded-full object-cover h-12 w-12"
            />
          </span>
          <div className="text-center font-black text-lg">
            <h1 className="font-raleway">
              <span className="capitalize font-bold text-primary">
                {user?.roles?.name}:{' '}
              </span>
              {user?.firstName}
            </h1>
          </div>
        </div>
        <div className="font-raleway w-full">
          <ul className="mb-2">
<<<<<<< HEAD
            <SideNavLink
              image={dashIcon}
              linkTo="/dashboard/main"
              name="Dashboard"
            />
            <SideNavLink
              image={manageIcon}
              linkTo="/dashboard/management"
              name="Management"
            />
=======
            <SideNavLink image={dashIcon} linkTo="/account" name="Dashboard" />
            <SideNavLink image={manageIcon} linkTo="management" name="Management" />
>>>>>>> 753acfa (adds crud operations for buses)
            <SideNavLink
              image={profileIcon}
              linkTo="profile"
              name="Profile"
            />
            <SideNavLink
              image={notificationIcon}
              linkTo="/dashboard/notifications"
              name="Notifications"
            />
            <CheckRole
              children={
                <SideNavLink
                  image={supportIcon}
                  linkTo="/dashboard/roles"
                  name="Roles"
                />
              }
              role={['admin']}
            ></CheckRole>

            <SideNavLink
              image={settingIcon}
              linkTo="/dashboard/settings"
              name="Settings"
            />
          </ul>
          <Button
            name="Logout"
            type="submit"
            id="logout"
            styles="bg-red mt-4 px-6 py-1 hover:bg-red-600"
            onClick={logout}
          />
        </div>
      </aside>
    </main>
  );
};

export default SideNav;
