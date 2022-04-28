import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function CheckRole({ children, role, type }) {
  const { authenticated, user } = useSelector((state) => state?.auth);
  const location = useLocation();
  if (!authenticated) {
    return '';
  }
  if (user.role === 'admin') {
    return children;
  } else if (role.includes(user.role)) {
    /* istanbul ignore next */
    return children;
  } else if (type === 'page' && !role.includes(user.role)) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-rale font-bold text-3xl mb-4 mt-5">
          You don't have the permissions to view the page.
        </h3>
        <Link
          to="/login"
          className="bg-primary rounded-sm font-bold py-1 px-3 text-white"
        >
          Login with a different account
        </Link>
      </div>
    );
  } else {
    return '';
  }
}

export default CheckRole;
