import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import IconHandler from "./IconHandler";


function LinkButton({icon, title, link}) {
  return (
    <button className="bg-white py-2 px-4 h-[50px] w-full mb-4 rounded-xl" onClick={{window.open(link, '_blank')}}>
      <div className="grid grid-cols-8">
        <div className="col-span-1 flex items-center justify-start">
        <IconHandler icon="whatsapp"></IconHandler>
        </div>
        <div className="col-span-6 flex items-center justify-center text-center">{title}</div>
        <div className="col-span-1 flex items-center justify-end">
          <MdArrowForwardIos />
        </div>
      </div>
    </button>
  );
}

export default LinkButton;
