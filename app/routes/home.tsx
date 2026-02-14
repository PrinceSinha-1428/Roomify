import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import Hero from "components/Hero";
import Projects from "components/Projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roomify: Convert Design to Model" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  );
}