import { Instagram } from "../../icons/instagram";
import { Twitter } from "../../icons/twitter";
import { Github } from "../../icons/github";
import { LinkedIn } from "../../icons/linkedIn";
import { Artstation } from "../../icons/artstation";

export default function ContactBar() {
  const defCol = "rgba(204, 205, 203,.4)";
  return (
    <div className="xl:fixed xl:grid-cols-1 left-0 xl:top-1/2 p-2 sm:static sm:grid sm:grid-cols-5 sm:justify-items-center ">
      <Github defCol={defCol} />
      <Instagram defCol={defCol} />
      <Twitter defCol={defCol} />
      <LinkedIn defCol={defCol} />
      <Artstation defCol={defCol} />
    </div>
  );
}
