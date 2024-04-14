import CoverLetterComponent from "../layout/template";
function CoverLetters() {
  return (
    <>
      <div className="flex flex-wrap items-center mt-7 px-5 md:px-14 gap-y-14 gap-x-4 justify-between xl:grid xl:grid-cols-4">
        <CoverLetterComponent />
        <CoverLetterComponent />
        <CoverLetterComponent />
        <CoverLetterComponent />
      </div>
    </>
  );
}

export default CoverLetters;
