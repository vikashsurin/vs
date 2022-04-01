const SayHi = () => {
  return (
    <div className="grid py-[200px]  hover:drop-shadow-lg ">
      <h2 className="font-bold text-6xl  text-center p-2">Start a project</h2>
      <p className="p-2">
        Incase you have a project in mind and interested in working with me,
        Let’s do it together. Or just …
      </p>

      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
        className=" px-10 py-5 rounded-md justify-self-center bg-globalGreen transition-all ease-in-out duration-300 hover:translate-x-3"
      >
        Say hello!
      </a>
    </div>
  );
};
export default SayHi;
