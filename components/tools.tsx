import { Fragment } from "react";
const Tools = () => {
  return (
    <Fragment>
      <div className="py-[100px]">
        <h3 className="py-2">Design tools I use</h3>
        <p className="border-[.5px] border-globalTextColor p-5 rounded-md">
          <span className="text-globalBlue">
            Adobe photoshop, Adobe illustrator, Adobe xd, figma, procreate,
            canva, rive
          </span>
        </p>
      </div>
      <div>
        <h3 className="py-2">Languages I use</h3>
        <p className="border-[.5px] border-globalTextColor p-5 rounded-md ">
          <span className="text-globalBlue ">
            Html, css, javascript, sass, sass, bootstrap, materialui,
            tailwindcss, React, Redux, mongoldb
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default Tools;
