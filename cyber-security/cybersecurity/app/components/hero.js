import Image from "next/image";
import Logo from "@/public/logo.webp";
import Laptop from "@/public/laptop.webp";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav>
      <div className="top-links">
        <div className="inner">
          <Link className="link" href={"#"}>
            Partner Login
          </Link>
          <Link className="link" href={"#"}>
            Search
            <CiSearch className="icon" />
          </Link>
        </div>
      </div>
      <div className="logo-links">
        <div className="inner">
          <Image src={Logo} alt="Logo" />
          <div className="links">
            <Link className="link" href={"#"}>
              Platform
            </Link>
            <Link className="link" href={"#"}>
              Why Huntress
            </Link>
            <Link className="link" href={"#"}>
              Resources
            </Link>
            <Link className="link" href={"#"}>
              About
            </Link>
            <button>Free Trial</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="title-desc">
        <h1>Protect Your Endpoints, Identities, and Employees</h1>
        <p>
          Deploy managed detection and response for endpoints and identities in
          minutes. Powered by custom-built technology for SMBs and the expert
          analysts in our 24/7 Security Operations Center.
        </p>
      </div>
      <div className="btns">
        <button>Start for Free</button>
        <button className="bg">Get a Demo</button>
      </div>
      <div className="circles">
      </div>
      <Image src={Laptop} alt="Laptop" />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <Hero />
      <div className="bg-circle"></div>
      <div className="bg-circle l"></div>
    </div>
  );
};

export default HeroSection;
