/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useState } from "react";

// import resume from "../resume/resume.pdf";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="grid grid-cols-12 xl:p-5 sm:p-2 align-middle ">
        <div className="px-5 xl:col-span-9 sm:col-span-10 text-2xl font-semibold">
          vikashsurin.
          <span className="text-globalBlue hover:text-globalOrange transition ease-in-out duration-200 ">
            com
          </span>
        </div>

        {/* mobile cross button  */}
        <div
          className="grid  transition-all ease-in-out duration-200 z-40 xl:hidden sm:visible"
          onClick={handleClick}
        >
          <div
            className={`bg-globalOrange h-1 w-10 my-2   ${
              active
                ? "transition ease-in-out duration-300 rotate-45 translate-y-3"
                : "transition ease-in-out duration-300 rotate-0  translate-y-0"
            } `}
          ></div>
          <div
            className={` bg-globalOrange h-1 w-10 my-2 ${
              active
                ? "transition ease-in-out duration-300 -rotate-45  -translate-y-2"
                : "transition ease-in-out duration-300 -rotate-0 -translate-y-0"
            }  `}
          ></div>
        </div>

        <div className=" sm:hidden xl:grid grid col-span-3 grid-cols-3 justify-items-center transition ease-in-out duration-200">
          <Link href="/#about" passHref>
            <div className="hover:text-globalOrange font-semibold border-b-0 transition-all ease-in-out duration-50 hover:border-b-2">
              about
            </div>
          </Link>
          <Link href="/#work" passHref>
            <div className="hover:text-globalOrange font-semibold border-b-0 transition-all ease-in-out duration-50 hover:border-b-2">
              work
            </div>
          </Link>
          <Link href={""} passHref>
            <div className="hover:text-globalOrange font-semibold border-b-0 transition-all ease-in-out duration-50 hover:border-b-2">
              resume
            </div>
          </Link>
        </div>
      </div>

      {/* // mobile nav bar */}
      <div
        className={` absolute transition-all ease-in-out duration-200  ${
          active
            ? "transition-all ease-in-out duration-300 visible"
            : "transition-all ease-in-out duration-300 hidden"
        } top-1 rounded-md right-1 grid grid-cols-1 gap-4 bg-mutedBlack drop-shadow-neu h-auto w-1/2 py-24`}
      >
        <div className="">
          <p className="w-100  text-center my-3">
            {" "}
            <a href="/#about" onClick={handleClick}>
              {" "}
              about
            </a>
          </p>
          <p className="w-100  text-center my-3">
            <a href="/#work" onClick={handleClick}>
              work
            </a>
          </p>
          <p className="w-100  text-center my-3">
            <a
              href={"resume"}
              target="_blank"
              onClick={handleClick}
              rel="noreferrer"
            >
              resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
