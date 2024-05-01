/* eslint-disable react-hooks/exhaustive-deps */
import { botIcon, download } from "../../../../assets";
import * as CiIcons from "react-icons/ci";
import ContentEditor from "./contentEditor";
import EditorSidebar from "./editorSidebar";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCVContext } from "../../../../middleware/cv";
import axios from "axios";

function CoverEditor() {
  const { CVData, setCVData } = useCVContext();
  const [chatBot, setChatBot] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();
  const primaryURL = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    // Get a letter ID query parameter
    const LID = new URLSearchParams(location.search).get("id");
    // Get the CV id from the url
    try {
      if (LID !== null) {
        axios
          .get(`${primaryURL}/getLetter?letterId=${LID}`)
          .then((res) => {
            // If it exists
            setCVData({ ...res.data.letter });
            setLoading(false);
          })
          .catch((err) => {
            // If it  doesn't
            throw new Error("Letter not found");
          });
      } else throw new Error("Letter not found");
    } catch (error) {
      if (error?.message === "Letter not found") {
        // Create one and routes to it
        axios
          .post(`${primaryURL}/letter`, CVData)
          .then((res) => {
            setCVData({ ...res.data.data });
            navigate(`/cover-letter/editor?id=${res.data.data._id}`);
          })
          .catch((err) => {
            toast.error("Encountered Error. Try Again");
            console.log(err);
          });
      }
    }
  }, [location, navigate]);

  return (
    <div className="h-full w-full">
      {loading}
      <nav className="bg-black">
        <nav className="w-11/12 mx-auto max-w-screen-2xl flex justify-between items-center py-4">
          <nav className="flex-1 p-2"></nav>

          <div className="flex items-center gap-4">
            <div className="rounded-full w-8 h-8 bg-primary-500 flex items-center justify-center cursor-pointer">
              <img
                className="w-4 h-4 brightness-[500]"
                src={download}
                alt="download cover letter"
              />
            </div>

            <button className="bg-primary-600 py-2 px-6 text-white rounded flex items-center gap-1">
              <CiIcons.CiCirclePlus size="1.5rem" />
              <span className="text-sm">Create New</span>
            </button>
          </div>
        </nav>
      </nav>

      <div
        className={`${
          chatBot ? "md:pl-6" : ""
        } flex gap-6 items-stretch relative min-h-screen`}
      >
        <div className="w-11/12 mx-auto max-w-screen-lg flex max-md:flex-col-reverse gap-4 py-6">
          <ContentEditor />
          {!chatBot && (
            <div
              title="Konecto"
              onClick={() => setChatBot(true)}
              className="w-10 h-10 cursor-pointer ml-auto"
            >
              <img src={botIcon} alt="Konecto-bot" />
            </div>
          )}
        </div>
        <div
          className={`md:hidden ${
            chatBot ? "flex" : "hidden"
          } absolute w-full h-full z-10`}
          onClick={() => setChatBot(false)}
        />
        {chatBot && <EditorSidebar closeBot={() => setChatBot(false)} />}
      </div>
    </div>
  );
}

export default CoverEditor;
