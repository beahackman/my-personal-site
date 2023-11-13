import React from "react";
import "../index.css";
import PageHeader from "../../components/PageHeader";
import ResumePDF from "./BHackmanResume.pdf";

const Resume = () => {
  return (
    <>
      <PageHeader icon={""} pageName={"Resume"} />
      <iframe
        src={ResumePDF}
        title="Official Resume"
        style={{ width: "80vw", height: "70vh" }}
      />
    </>
  );
};

export default Resume;
