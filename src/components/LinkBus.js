import React from 'react';
import { Link } from 'react-router-dom';

export const LinkBus = ({ row }) => {
  const { assigned_bus } = row.original;
  if (assigned_bus)
    return (
      <Link className="text-primary" to="#buses">
        {assigned_bus}
      </Link>
    );

  return 'None';
};
