import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import IconHandler from "./IconHandler";

function LinkButton({ icon, title, link }) {
  return (
    <Link href={link} target="_blank">
      <button className="bg-white py-2 px-4 h-[50px] w-full mb-4 rounded-xl">
        <div className="grid grid-cols-8">
          <div className="col-span-1 flex items-center justify-start">
            <IconHandler icon={icon}></IconHandler>
          </div>
          <div className="col-span-6 flex items-center justify-center text-center">
            {title}
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <MdArrowForwardIos />
          </div>
        </div>
      </button>
    </Link>
  );
}

export default LinkButton;
