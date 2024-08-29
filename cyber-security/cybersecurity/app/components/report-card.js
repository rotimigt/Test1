import Link from "next/link";
import Image from "next/image";
import Book from "@/public/book.webp"

const ReportCard = () => {
  return (
    <div className="report">
      <div className="light"></div>
      <div className="top-card">
        <div className="content">
          <h2>2024 Cyber Threat Report</h2>
          <p>
            A resource designed by security practitioners for security
            practitioners to help you stay ahead of today’s threats.
          </p>
          <Link className="link" href={"#"}>Download the Report</Link>
        </div>
        <Image src={Book} alt="report" />
      </div>
    </div>
  );
};

export default ReportCard;
