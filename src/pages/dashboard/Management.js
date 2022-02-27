import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
<<<<<<< HEAD
import CheckRole from '../../utils/CheckRoles.js';
=======
import CheckRole from '../../components/utils/CheckRoles.js';
>>>>>>> 753acfa (adds crud operations for buses)
import Buses from '../management/Buses.js';
import Companies from '../management/Companies.js';
import Drivers from '../management/Drivers.js';
import Operators from '../management/Operators.js';
import Routes from '../management/Routes.js';

const Management = () => {
  const allTabs = [
    { name: 'Drivers', roles: ['operator', 'admin', 'driver'], focus: true },
    { name: 'Companies', roles: ['admin'], focus: false },
    { name: 'Operators', roles: ['admin'], focus: false },
    { name: 'Buses', roles: ['operator', 'admin'], focus: false },
    { name: 'Routes', roles: ['admin', 'operator'], focus: false }
  ];
  return (
<<<<<<< HEAD
    <main className="overflow-x-auto">
      <Tabs selectedTabClassName={'border-b-2 border-primary h-full mb-0'}>
        <TabList
          className={'flex border-b-2 mb-5 w-full justify-around shadow-main'}
        >
=======
    <main>
      <h1 className="font-black text-2xl pb-6">Management</h1>
      <Tabs selectedTabClassName={'border-b-2 border-primary h-full mb-0'}>
        <TabList className={'flex border-b-2 mb-5'}>
>>>>>>> 753acfa (adds crud operations for buses)
          {allTabs.map((tab) => (
            <CheckRole
              key={tab.name}
              children={
                <Tab
                  className={
<<<<<<< HEAD
                    'mr-16 font-bold py-2 w-full px-3 text-center cursor-pointer outline-none focus:outline-none font-raleway'
=======
                    'mr-16 font-bold pb-2 px-3 text-center cursor-pointer outline-none focus:outline-none'
>>>>>>> 753acfa (adds crud operations for buses)
                  }
                  key={tab.name}
                >
                  {tab.name}
                </Tab>
              }
              role={tab.roles}
            ></CheckRole>
          ))}
        </TabList>

        <CheckRole
          children={
            <TabPanel>
              <Drivers />
            </TabPanel>
          }
          role={['operator', 'admin', 'driver']}
        ></CheckRole>
        <CheckRole
          children={
            <TabPanel>
              <Companies />
            </TabPanel>
          }
          role={['admin']}
        ></CheckRole>
        <CheckRole
          children={
            <TabPanel>
              <Operators />
            </TabPanel>
          }
          role={['admin']}
        ></CheckRole>

        <CheckRole
          children={
            <TabPanel>
              <Buses />
            </TabPanel>
          }
          role={['operator', 'admin']}
        ></CheckRole>
        <CheckRole
          children={
            <TabPanel>
              <Routes />
            </TabPanel>
          }
          role={['admin', 'operator']}
        ></CheckRole>
      </Tabs>
    </main>
  );
};

export default Management;
