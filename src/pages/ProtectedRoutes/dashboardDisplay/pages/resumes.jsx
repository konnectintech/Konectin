import ResumeComponent from "../layout/template";

function Resumes() {
  return (
    <>
      <h1>Resumes</h1>;
      <div className="px-14 pt-14 flex justify-between gap-x-20 gap-y-14 flex-wrap">
        <ResumeComponent />
        <ResumeComponent />
        <ResumeComponent />
        <ResumeComponent />
      </div>
    </>
  );
}

export default Resumes;
