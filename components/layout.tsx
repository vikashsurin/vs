import Navbar from "./Navbar";

export default function Layout(props: any) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
