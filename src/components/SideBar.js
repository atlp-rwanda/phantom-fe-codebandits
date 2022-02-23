import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonA as Button } from './Button.js';
import profileImg from '../images/profileImg.jpg';
import dashIcon from '../images/dashboardIcon.png';
import manageIcon from '../images/manageIcon.png';
import profileIcon from '../images/profileIcon.png';
import notificationIcon from '../images/notificationIcon.png';
import supportIcon from '../images/supportIcon.png';
import settingIcon from '../images/settingIcon.png';

const SideBar = () => {
  return (
    <div className="max-h-full ">
      <main className=" h-full">
        <aside className="w-1/5 border-r-2 h-full  px-8 py-8 bg-gray-100">
          <div className=" mb-16">
              <span className="rounded-full mx-auto flex items-center justify-center h-24 w-24 mb-5">
                <img
                  src={profileImg}
                  alt="Image"
                  className="rounded-full object-cover h-24 w-24"
                />
              </span>
            <h1 className="text-center font-black text-lg">Operator: KAMALIZA Ange</h1>
          </div>
          <div>
            <h2 className='mb-8 text-lg font-black'>Accout</h2>
            <ul className='mb-10'>
              <div className="flex justify-center items-center hover:bg-gray-200 py-1">
                <img src={dashIcon} alt="icon" className="w-6" />
                <Link
                  to={'#p'}
                  className="py-1 px-2 font-bold my-1  cursor-pointer w-full"
                >
                  <li>Dashboard </li>{' '}
                </Link>
              </div>
              <div className="flex justify-center items-center hover:bg-gray-200 py-1">
              <img src={manageIcon} alt="icon" className="w-6" />
                <Link to={'#p'} className="py-1 px-2 font-bold my-1  cursor-pointer w-full">
                  <li >
                    Management
                  </li>
                </Link>
              </div>
              <div className="flex justify-center items-center hover:bg-gray-200 py-1">
              <img src={profileIcon} alt="icon" className="w-6" />
                <Link to={'#p'} className="py-1 px-2 font-bold my-1  cursor-pointer w-full">
                  <li>
                    Profile
                  </li>
                </Link>
              </div>
              <div className="flex justify-center items-center hover:bg-gray-200 py-1">
              <img src={notificationIcon} alt="icon" className="w-6" />
                <Link to={'#p'} className="py-1 px-2 font-bold my-1  cursor-pointer w-full">
                  <li>
                    Notifications
                  </li>
                </Link>
              </div>
              <div className="flex justify-center items-center hover:bg-gray-200 py-1">
              <img src={supportIcon} alt="icon" className="w-6" />
                <Link to={'#p'} className="py-1 px-2 font-bold my-1  cursor-pointer w-full">
                  <li>
                    Support
                  </li>
                </Link>
              </div>
              <div className="flex justify-center items-center hover:bg-gray-200 py-1">
              <img src={settingIcon} alt="icon" className="w-6" />
                <Link to={'#p'} className="py-1 px-2 font-bold my-1  cursor-pointer w-full">
                  <li>
                    Settings
                  </li>
                </Link>
              </div>
            </ul>
           <div className=' flex justify-center'>
           <Button name="Logout" type="submit" styles="bg-red px-10 hover:bg-red-600" />
           </div>
          </div>
          
        </aside>

        {/* <section>
         main component
        </section> */}
      </main>
    </div>
  );
};

export default SideBar;
