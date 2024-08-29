import Image from "next/image";
import Chart1 from "@/public/chart1.webp";
import Chart2 from "@/public/chart2.webp";
import Chart4 from "@/public/chart4.webp";
import Slide from "./animations/slide";
import Link from "next/link";

const Solution = ({ title, desc, img }) => {
  return (
    <div className="card">
      <Image src={img} alt="Solution" />
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <Link className="link" href={"#"}>
        Learn More
      </Link>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="circle"></div>
      <div className="inner">
        <h2>Purpose-Built Solutions</h2>
        <div className="solution-cards">
          <Slide>
            <Solution
              title="Managed EDR
"
              desc="Defend against attacks as they're happening with endpoint detection and response.

"
              img={Chart1}
            />
          </Slide>

          <Slide>
            <Solution
              title="MDR for Microsoft 365
"
              desc="Protect your Microsoft 365 environments and employee identities."
              img={Chart2}
            />
          </Slide>

          <Slide>
            <Solution
              title="Security Awareness Training
"
              desc="Enable your teams to identify and avoid phishing attacks, malware, and more."
              img={Chart4}
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
