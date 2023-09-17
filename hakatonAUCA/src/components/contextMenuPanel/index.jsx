import React, { useState } from "react";

import { IoMdCopy } from "react-icons/io";

import { BsTrash, BsScissors } from "react-icons/bs";

import { MdContentPaste } from "react-icons/md";

import { AiFillSetting } from "react-icons/ai";

import row from "../../assets/rowright.png";
import { FaPen } from "react-icons/fa";
import ModalPage3 from "../modal_page/modal_page3";

const ContextMenuPanel = ({ x, y, onClose, setShowModal }) => {
  const [nameValue, setNameValue] = useState("Postgres DB");

  const panelStyles = {
    left: `${x}px`,
    top: `${y}px`,
  };

  const handleChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleItemClick = (action) => {
    console.log(action);
    if (action === "settings") {
      setShowModal(true);
    }else{
      onClose();
    }
    
  };

  return (
      <div
        style={panelStyles}
        className={`absolute bg-neutral-800 border h-[270px] opacity-[0.85] backdrop-blur border-neutral-900 shadow z-[6] rounded-md text-white w-[288px] flex flex-row`}
      >
        <div className="py-1 w-full text-sm">
          <div className="px-4 cursor-pointer hover:bg-gray-500 flex text-white pb-2">
            <div className="w-[20px] self-center"></div>
            <div className="flex justify-between w-full items-center">
              <input
                className="bg-neutral-800 text-white"
                value={nameValue}
                onChange={handleChange}
              />

              <FaPen className="text-white" />
            </div>
          </div>
          <hr />
          <div className="py-2">
            <div
              onClick={() => handleItemClick("copy")}
              className="px-4 cursor-pointer hover:bg-gray-500 flex pb-1"
            >
              <div className="w-[25px] self-center">
                <img src={row} className="" />
              </div>
              Добавить путь
            </div>
            <div
              onClick={() => handleItemClick("copy")}
              className="px-4 cursor-pointer hover:bg-gray-500 flex"
            >
              <div className="w-[25px] self-center">
                <BsTrash />
              </div>
              Удалить путь
            </div>{" "}
          </div>
          <hr />

          <div className="py-2">
            <div
              onClick={() => handleItemClick("copy")}
              className="px-4 cursor-pointer hover:bg-gray-500 flex pb-1"
            >
              <div className="w-[25px] self-center">
                <IoMdCopy />
              </div>
              <div className="flex justify-between w-full pr-8">
                <span>Копировать</span>
                <span>Ctrl + C</span>
              </div>
            </div>
            <div
              onClick={() => handleItemClick("paste")}
              className="px-4 cursor-pointer hover:bg-gray-500 flex items-center pb-1"
            >
              <div className="w-[25px] text-white">
                <MdContentPaste />
              </div>
              <div className="flex justify-between w-full pr-8">
                <span>Вставить</span>
                <span>Ctrl + V</span>
              </div>
            </div>
            <div
              onClick={() => handleItemClick("cut")}
              className="px-4 cursor-pointer hover:bg-gray-500 flex"
            >
              <div className="w-[25px] text-white">
                <BsScissors />
              </div>
              <div className="flex justify-between w-full pr-8">
                <span>Вырезать</span>
                <span>Ctrl + X</span>
              </div>
            </div>
          </div>

          <hr />

          <div className="py-2">
            <div
              onClick={() => handleItemClick("diagnostics")}
              className="px-4 cursor-pointer hover:bg-gray-500 flex"
            >
              <div className="w-[25px]"></div>
              Диагностика
            </div>
            <div
              onClick={() => handleItemClick("settings")}
              className="px-4 cursor-pointer hover:bg-gray-500 items-center flex pb-1"
            >
              <div className="w-[25px] text-white">
                <AiFillSetting />
              </div>
              Настройки
            </div>
          </div>

          <hr />

          <div
            onClick={() => handleItemClick("diagnostics")}
            className="px-4 cursor-pointer hover:bg-gray-500 flex"
          >
            <div className="w-[25px]"></div>
            Копировать строку подключения
          </div>
        </div>
      </div>
  );
};

export default ContextMenuPanel;
