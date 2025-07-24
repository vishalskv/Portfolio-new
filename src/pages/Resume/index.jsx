import React from "react";

const Resume = () => {
  const resumeUrl = "/vishal.pdf"; // points to public/resume.pdf

  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      style={{ width: "100%", height: "100vh" }}
    >
      {/* Download Button */}
      {/* <a
        href={resumeUrl}
        download
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a> */}

      {/* Display PDF */}
      <iframe
        src={resumeUrl}
        title="Resume"
        style={{ width: "100%", height: "100vh" }}
        className="w-full h-[80vh] border rounded"
      ></iframe>
    </div>
  );
};

export default Resume;
