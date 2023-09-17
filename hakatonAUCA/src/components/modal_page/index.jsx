import React, { useState } from "react";

import { BiLogoSpringBoot } from "react-icons/bi";

import { FaPen } from "react-icons/fa";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="relative w-full h-full">
        <button
          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none relative">
              <div className="relative w-auto my-6 mx-auto max-w-4xl z-10">
                <div className="border-0 rounded-lg shadow-lg relative px-6 py-6 flex flex-col w-full bg-neutral-800 outline-none focus:outline-none">
                  <div className="flex justify-between mb-7">
                    <div className="flex items-center font-bold text-white text-3xl mr-48">
                      <BiLogoSpringBoot className="w-11 h-11 text-green-600 mr-4" />
                      <h3>Spring(Java) backend</h3>
                    </div>
                    <div>
                      <FaPen className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <form>
                    <div className="mb-5">
                      <div className="text-white flex flex-col mb-5">
                        <label htmlFor="" className="mb-2">
                          Внутренее доменное имя*
                        </label>
                        <input
                          type="text"
                          placeholder="домен"
                          className="w-72 rounded-md bg-neutral-800 border px-2 py-1"
                        />
                        <span className="text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi cum praesentium hic quas quo ratione
                          ea, repellat, ex veritatis reiciendis dolor quos
                          delectus, illum totam neque soluta quibusdam error.
                          Provident.
                        </span>
                      </div>
                      <div className="text-white flex flex-col mb-5">
                        <label htmlFor="" className="mb-2">
                          Внутренее доменное имя*
                        </label>
                        <input
                          type="text"
                          placeholder="домен"
                          className="w-72 rounded-md bg-neutral-800 border px-2 py-1"
                        />
                      </div>
                      <div className="text-white flex flex-col mb-5">
                        <label htmlFor="" className="mb-2">
                          Внутренее доменное имя*
                        </label>
                        <input
                          type="text"
                          placeholder="домен"
                          className="w-72 rounded-md bg-neutral-800 border px-2 py-1"
                        />
                      </div>

                      <div className="text-white flex flex-col mb-5">
                        <label htmlFor="" className="mb-2">
                          Версия java*
                        </label>
                        <select className="bg-neutral-800 w-72 rounded border px-2 py-1 text-gray-400">
                          <option value="0">Java 8</option>
                          <option value="0">Java 11</option>
                          <option value="0">Java 17</option>
                          <option value="0">Java 20</option>
                        </select>
                      </div>
                      <div className="text-white flex flex-col mb-5">
                        <label htmlFor="" className="mb-2">
                          Загрузите сборку*
                        </label>
                        <input
                          class="block w-72 text-sm text-gray-400 border border-gray-300 rounded-lg cursor-pointer bg-neutral-800 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-neutral-800"
                          type="file"
                        />
                      </div>
                      <h3 className="text-3xl text-white font-bold">Или</h3>
                      <div className="text-white flex flex-col mb-5">
                        <label htmlFor="" className="mb-2">
                          Внутренее доменное имя*
                        </label>
                        <input
                          type="text"
                          placeholder="домен"
                          className="w-72 rounded-md bg-neutral-800 border px-2 py-1"
                        />
                      </div>

                      <a href="" className="text-orange-600 ml-2">
                        Документация по созданию{" "}
                      </a>
                    </div>

                    <div className="flex items-start justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 z-90 bg-black w-full h-full absolute top-0 left-0"></div>
          </>
        ) : null}{" "}
      </div>
    </>
  );
};

export default ModalPage;
