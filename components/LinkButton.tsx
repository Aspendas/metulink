import React from "react";
import Image from "next/image";

function LinkButton() {
  return (
    <button className="bg-white py-2 px-4 h-[50px] w-full mb-4 rounded-xl">
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Image
            className="rounded-lg"
            src="/logo.jpeg"
            alt="Your Logo"
            width={30}
            height={30}
          />
        </div>
        <div className="col-span-6 text-center">Hello world</div>
        <div className="col-span-1"></div>
      </div>
    </button>
  );
}

export default LinkButton;
