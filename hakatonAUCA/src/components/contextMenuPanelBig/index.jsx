import React, { useEffect, useState } from "react";
import ContextMenuOpen from "./ContextMenuOpen";

const ContextMenuPanelBig = ({ children, contextMenuBiger, setContextMenu, setShowModal }) => {
  const [contextMenuBig, setContextMenuBig] = useState({
    isOpenBig: false,
    x: 0,
    y: 0
  });

  useEffect(()=>{
    setContextMenuBig({isOpenBig: contextMenuBiger.isOpenBig, x: contextMenuBiger.x, y: contextMenuBiger.y})
  },[contextMenuBiger])

  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log(e.clientX);
    console.log(e.clientY);
    setContextMenuBig({
      isOpenBig: true,
      x: e.clientX,
      y: e.clientY,
    });
    setContextMenu({
      isOpen: false,
      x: 0,
      y: 0,
    });
  };

  const closeContextMenu = () => {
    setContextMenuBig({ isOpenBig: false, x: 0, y: 0 });
  };

  return (
    <div className="w-full z-1 relative" onContextMenu={handleContextMenu}>
      {children}
      {contextMenuBig.isOpenBig ? (
        <ContextMenuOpen
          x={contextMenuBig.x}
          y={contextMenuBig.y}
          onClose={closeContextMenu}
          setShowModal={setShowModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContextMenuPanelBig;
