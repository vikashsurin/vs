import Image from "next/image";

import pic from "../public/vikashsurin.jpeg";

export default function About() {
  return (
    <div id="about" className="grid  py-[200px] sm:py-10">
      <h3 className=" py-5 xl:col-span-2 sm:col-span-1">About</h3>

      <p className="">
        hi, my name is vikash surin. My role is a full-stack developer, but I am
        a designer/digital artist as well. My web-dev journey started back in
        2017, When I came across what webpages are? and that they can be built
        by anyone. I started with html - css - javascript and now I came too
        far, that I can build & deploy websites. I love creating websites and
        designs.
      </p>

      <div className="px-2 sm:hidden  xl:inline-block ">
        <Image
          className="block  sm:mx-auto border-0 rounded-lg xl:h-48 xl:w-48 sm:h-72 sm:w-72  transition-all ease-in-out duration-300 hover:translate-x-5 hover:-translate-y-5 "
          src={pic}
          alt=""
        />
      </div>
    </div>
  );
}
