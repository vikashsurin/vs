import { project } from "../data/project";

import { Git } from "../icons/github";
import { ExternalLink } from "../icons/externalLink";

// function to compare and sort.
function compare(a: any, b: any) {
  if (a.year > b.year) {
    return -1;
  }
  if (a.year < b.year) {
    return 1;
  }
  return 0;
}
export default function AllWorks() {
  // sort all the projects from latest to oldest
  const sortedProject = project.sort(compare);

  const list = sortedProject.map((p) => (
    <WorkTile
      key={p.id}
      year={p.year}
      title={p.title}
      description={p.description}
      github={p.github}
      link={p.link}
      stack={p.stack}
      techs={p.techs}
    />
  ));
  return (
    <div>
      <div className="xl:px-24 xl:py-4 sm:px-5">
        <p className="text-6xl font-bold py-5">Projects </p>
        <p className="text-globalGreen">All the projects I have worked on.</p>
      </div>
      <div className="grid grid-cols-6  xl:px-24 py-4 text-mutedGray  font-bold   sm:px-5">
        <div>
          <h4>Year</h4>
        </div>
        <div className="xl:col-span-2 sm:col-span-2">
          <h4>Title</h4>
        </div>
        <div className="xl:block sm:hidden xl:col-span-2 sm:col-span-2">
          <h4>Built with</h4>
        </div>
        <div className="col-start-6">
          <h4>Link</h4>
        </div>
      </div>
      {list}
    </div>
  );
}

const WorkTile = (props: any) => {
  const list = props.techs.map((t: any, i: any) => (
    <span key={i} className="px-1 text-sm text-mutedGray">
      {t}
    </span>
  ));

  return (
    <div key={props.id} className="grid grid-cols-6 xl:px-24 py-4  sm:px-5">
      <div>
        <p className="text-globalOrange font-semibold">{props.year}</p>
      </div>
      <div className="  xl:text-xl xl:font-bold sm:text-md xl:col-span-2 sm:col-span-2 sm:font-semibold ">
        <a>{props.title}</a>
      </div>
      <div className="xl:block sm:hidden col-span-2">{list}</div>

      <div className=" grid xl:grid-cols-2 gap-4 col-start-6 sm:flex">
        <a href={props.link} target={"_blank"} rel="noreferrer">
          {" "}
          <ExternalLink />
        </a>
        <a href={props.github} target={"_blank"} rel="noreferrer">
          <Git opacity={` ${props.github == null ? 0.3 : 1}`} />
        </a>
      </div>
    </div>
  );
};
