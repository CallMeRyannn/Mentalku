import React, { useState } from 'react';

function Menu() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="menu">
      <button onClick={toggleSubMenu}>Informasi</button>
      {showSubMenu && (
        <div className="submenu">
          <a href="#">Jadwal Dokter</a>
          <a href="#">Profil Yayan</a>
        </div>
      )}
    </div>
  );
}

export default Menu;
