import CoverLetterComponent from "./cover-letter-component";

export default function DisplayCoverLetter() {
  return (
    <div className="w-full min-h-screen h-full -my-4">
      <nav className="h-[70px] mx-auto flex justify-between items-center gap-16 px-12 bg-slate-700 text-white">
        <ul>
          <li>Resume</li>
          <li>Cover Letter</li>
        </ul>
        <p>this is the nav</p>
      </nav>
      <div className="px-12 pt-14 flex gap-x-20 gap-y-14 flex-wrap">
        <CoverLetterComponent />
        <CoverLetterComponent />
        <CoverLetterComponent />
      </div>
    </div>
  );
}
