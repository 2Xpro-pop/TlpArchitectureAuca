import React, { useState } from "react";

import { IoMdCopy } from "react-icons/io";

import { BsTrash, BsScissors } from "react-icons/bs";

import { MdContentPaste } from "react-icons/md";

import { AiFillSetting } from "react-icons/ai";

import row from "../../assets/rowright.png";
import { FaPen } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoPython } from "react-icons/bi";

const ContextMenuOpen = ({ x, y, onClose, setShowModal }) => {
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
      onClose();
  };

  return (
    <div
      style={panelStyles}
      className={`absolute bg-neutral-800 border h-[220px] opacity-[0.85] backdrop-blur border-neutral-900 shadow z-20 rounded-md text-white w-[288px] flex flex-row`}
    >
      <div className="py-1 w-full text-sm">
        <div className="px-4 cursor-pointer hover:bg-gray-500 flex text-white pb-2">
          <div className="w-[20px] self-center"></div>
          <div className="flex justify-between w-full items-center">
            <button onClick={()=> setShowModal(true)}>Добавить сервис</button>
          </div>
        </div>
        <hr />
        <div className="py-2">
          <div
            onClick={() => handleItemClick("copy")}
            className="px-4 cursor-pointer hover:bg-gray-500 flex pb-1"
          >
            <div className="w-[25px] self-center"></div>
            Недавние
          </div>
          <div className="flex items-center justify-between px-2">
            <div
              onClick={() => handleItemClick("copy")}
              className="cursor-pointer bg-blue-900 text-blue-600 w-14 flex items-center justify-center h-14 rounded-full"
            >
              <BiLogoPostgresql className="self-center w-12 h-12" />
            </div>{" "}
            <div
              onClick={() => handleItemClick("copy")}
              className="cursor-pointer bg-blue-600 rounded-full w-14 h-14 flex justify-center"
            >
              <BiLogoPython className="w-12 self-center h-12"/>
            </div>{" "}
            <div
              onClick={() => handleItemClick("copy")}
              className="cursor-pointer bg-blue-600 rounded-full w-14 h-14 flex justify-center"
            >
              <BiLogoPython className="w-12 self-center h-12"/>
            </div>{" "}
            <div
              onClick={() => handleItemClick("copy")}
              className="cursor-pointer bg-blue-600 rounded-full w-14 h-14 flex justify-center"
            >
              <BiLogoPython className="w-12 self-center h-12"/>
            </div>{" "}
          </div>
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
      </div>
    </div>
  );
};

export default ContextMenuOpen;
