import { useEffect, useState } from "react";
import ContextMenuPanel from "./components/contextMenuPanel";
import ContextMenuPanelBig from "./components/contextMenuPanelBig";
import ModalPage2 from "./components/modal_page/modal_page2";
import ModalPage3 from "./components/modal_page/modal_page3";

function App() {
  const [contextMenu, setContextMenu] = useState({ isOpen: false, x: 0, y: 0 });

  const [contextMenuBig, setContextMenuBig] = useState({ isOpenBig: false, x: 0, y: 0 })

  const [showModal, setShowModal] = useState(false);

  const [showModalCreate, setShowModalCreate] = useState(false)

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({
      isOpen: true,
      x: e.clientX,
      y: e.clientY,
    });

    setContextMenuBig({
      isOpenBig:false,
      x:0,
      y:0
    })
  };

  useEffect(()=>{
    console.log(showModal+"ssss");
  }, [showModal])

  const closeContextMenu = () => {
    setContextMenu({ isOpen: false, x: 0, y: 0 });
  };

  return (
    <>
      <div className="flex relative min-h-screen w-full">
        
        <ContextMenuPanelBig contextMenuBiger={contextMenuBig} setContextMenu={setContextMenu} setShowModal={setShowModalCreate} >
          {
          showModal ? <ModalPage3 setShowModal={setShowModal}/> : <></>
        }

        {
          showModalCreate ? <ModalPage2 setShowModal={setShowModalCreate}/> : <></>
        }

          {contextMenu.isOpen ? (
            <ContextMenuPanel
              x={contextMenu.x}
              y={contextMenu.y}
              setShowModal={setShowModal}
              onClose={closeContextMenu}
            />
          ) : (
            <></>
          )}
        </ContextMenuPanelBig>
        <div
          onContextMenu={handleContextMenu}
          className="w-32 h-32 bg-blue-500 text-white flex justify-center z-[2] absolute top-0 left-0 items-center cursor-pointer"
        >
          Right-click me
        </div>
      </div>
    </>
  );
}

export default App;
