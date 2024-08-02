import { useState, useEffect, useCallback } from 'react';

const useShowDrawer = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('showDrawer');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const toggleShowDrawer = useCallback(() => {
    setShowDrawer((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    if (showDrawer) {
      document.documentElement.classList.add('show-drawer');
    } else {
      document.documentElement.classList.remove('show-drawer');
    }
    localStorage.setItem('showDrawer', JSON.stringify(showDrawer));
  }, [showDrawer]);

  return { showDrawer, setShowDrawer, toggleShowDrawer };
};

export default useShowDrawer;
