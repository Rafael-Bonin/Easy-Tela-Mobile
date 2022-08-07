import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { MdPlace, MdCall } from "react-icons/md";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <section>
        <div className="flex justify-around">
          <div className="m-3 p-1 pr- w-1/2 bg-gray-900 rounded flex flex-wrap">
            <MdPlace size='18' className="m-1" color='grey' />
            <p className="text-slate-500 text-xl">Localizacao</p>
          </div>
          <div className="m-3 p-1 w-1/2 bg-gray-900 rounded flex flex-wrap">
            <MdCall size='20' className="m-1 ml-2 mr-3" color='grey' />
            <p className="text-slate-500 text-xl">Call</p>
          </div>
        </div>
        <div className="flex justify-around pb-3">
          <div className="m-2 p-3 border border-solid border-grey rounded-full"><FaFacebookF size='25' color='grey' /></div>
          <div className="m-2 p-3 border border-solid border-grey rounded-full"><AiOutlineTwitter size='25' color='grey'/></div>
          <div className="m-2 p-3 border border-solid border-grey rounded-full"><AiFillInstagram size='25' color='grey'/></div>
          <div className="m-2 p-3 border border-solid border-grey rounded-full"><FaPinterestP size='25' color='grey'/></div>
          <div className="m-2 p-3 border border-solid border-grey rounded-full"><RiArrowUpSLine size='25' color='grey'/></div>
        </div>
      </section>
      <section className="bg-gray-900 pt-4">
        <p className="text-slate-500 text-center text-xs">Copyright @Easy Consultoria e Sistemas All Rights reserved.</p>
        <p className="text-xs text-right p-1 pb-3 mr-11 m-1 text-white">Created by Easy Consultoria</p>
      </section>
    </footer>
  );
}
