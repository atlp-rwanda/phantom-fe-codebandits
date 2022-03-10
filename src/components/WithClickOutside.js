import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const WithClickOutside = (WrappedComponent) => {
  const Component = () => {
    let location = useLocation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const handleClickOutside = (e) => {
      !ref.current.contains(e.target) && setOpen(false);
    };
    const setRef = useCallback((node) => {
      ref.current && document.addEventListener('mousedown', handleClickOutside);

      return [ref];
    }, []);

    useEffect(() => {
      open && setOpen(false);
    }, [location.key]);
    const [newRef] = setRef();

    return <WrappedComponent open={open} setOpen={setOpen} ref={newRef} />;
  };

  return Component;
};

export default WithClickOutside;
