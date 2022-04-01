import Link from "next/link";
import { project } from "../data/project";
import { ExternalLink } from "../icons/externalLink";
import { Git } from "../icons/github";

const RecentWorks = () => {
  const projectList = project.map((p) => {
    if (p.year >= 2021)
      return (
        <WorkCard
          key={p.id}
          title={p.title}
          description={p.description}
          github={p.github}
          link={p.link}
          stack={p.stack}
          techs={p.techs}
        />
      );
  });
  return (
    <div id="work" className="xl:py-[200px] sm:py-20 ">
      <h3 className=" py-5">Recent works</h3>

      <div className="grid xl:grid-cols-3 gap-3 sm:grid-cols-1  ">
        {projectList}
      </div>
      {/* <a
        className=" w-1/2 mx-auto block bg-mutedBlack p-5 my-20  text-center rounded-md text-xl text-mutedGray drop-shadow-neu hover:drop-shadow-hoverneu transition-all ease-in-out duration-100 hover:-translate-y-2 "
        href="/allworks"
      >
        see all...
      </a> */}
    </div>
  );
};

const WorkCard = (props: any): JSX.Element => {
  const techList = props.techs.map((tech: string) => (
    <span className="hover:text-globalBlue" key={tech}>
      {tech}
    </span>
  ));
  return (
    <div className=" bg-mutedBlack text-sm p-5  transition  drop-shadow-def hover:-translate-y-2 rounded-md ">
      {/* <Link href={props.link} passHref> */}
      <div>
        <header className="grid grid-cols-3 ">
          <p className="col-span-2 font-bold text-mutedOrange hover:text-globalOrange ">
            {props.title}
          </p>
          <span className=" grid grid-cols-2">
            {/* <a href={props.github} target={"_blank"} rel="noreferrer">
              <a href={props.github} target={"_blank"} rel="noreferrer">
                <Git opacity={` ${props.github == null ? 0.3 : 1}`} />
              </a>
            </a>
            <a href={props.link} target={"_blank"} rel="noreferrer">
              {" "}
              <ExternalLink />
            </a> */}
          </span>
        </header>
        <section className=" h-44 py-5">{props.description}</section>
        <footer className="grid ">
          <span className="my-2 ">
            <span className="text-mutedGreen hover:text-green-500 font-bold">
              {props.stack}
            </span>
          </span>
          <span className=" flex flex-wrap gap-x-1 text-mutedGray">
            {techList}
          </span>
        </footer>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default RecentWorks;
