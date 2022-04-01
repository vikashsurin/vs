import { Fragment } from "react";
import ContactBar from "./common/contactbar";

const Footer = () => {
  return (
    <Fragment>
      <ContactBar />
      <p className="text-center text-sm py-10">
        designed & built by vikashsurin
      </p>
    </Fragment>
  );
};

export default Footer;
