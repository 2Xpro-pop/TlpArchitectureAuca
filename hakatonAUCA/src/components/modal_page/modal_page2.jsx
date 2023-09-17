import React, { useState } from 'react'

import {BiLogoPostgresql} from "react-icons/bi"
import { FaPen } from "react-icons/fa";


const ModalPage2 = ({setShowModal}) => {

    const [nameValue, setNameValue] = useState("Postgres DB");


    const [nameRedact, setNameRedact] = useState(true);


    const handleChange = (e) =>{
        setNameValue(e.target.value)
    }

    return (
      <>
              <div className="justify-center items-center self-center flex z-50 outline-none focus:outline-none relative">
                <div className="relative w-auto my-6 mx-auto max-w-4xl z-10">
                  <div className="border-0 rounded-lg shadow-lg relative px-6 py-6 flex flex-col w-full bg-neutral-800 outline-none focus:outline-none">
                    <div className="flex justify-between mb-7">
                      <div className="flex items-center font-bold text-white text-3xl mr-48">
                        <BiLogoPostgresql className="w-11 h-11 text-blue-400 mr-4" />
                        <input className='bg-neutral-800 border-none' value={nameValue} onChange={handleChange} disabled={nameRedact}/>
                      </div>
                      <div>
                        <FaPen className="w-10 h-10 text-white" onClick={()=>setNameRedact(!nameRedact)}/>
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
                            type="password"
                            placeholder="Пароль"
                            className="w-72 rounded-md bg-neutral-800 border px-2 py-1"
                          />
                        </div>
                      </div>
  
                      <div className="flex items-start justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-emerald-500 ftext-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    );
}

export default ModalPage2