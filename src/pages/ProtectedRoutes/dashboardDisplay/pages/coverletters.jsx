import CoverLetterComponent from "../layout/template";
function CoverLetters() {
  return (
    <>
      <div className="grid grid-cols-4 auto-rows-fr justify-between mt-7 px-14 gap-y-14 gap-x-20">
        <CoverLetterComponent />
        <CoverLetterComponent />
        <CoverLetterComponent />
        <CoverLetterComponent />
      </div>
    </>
  );
}

export default CoverLetters;
