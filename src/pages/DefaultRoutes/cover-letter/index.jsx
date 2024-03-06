import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../../../middleware/auth";
import { useCVData } from "../../../middleware/cv";
import { useEffect } from "react";

import img from "../../../assets/images/bot/bot.svg";

// Routes
import StartedBuilding from "./builder/startBuilding";
import JobDetails from "./builder/details";
import JobDescription from "./builder/description";
import ShortBio from "./builder/shortBio";
import EndBuilding from "./builder/endBuilding";
import CoverEditor from "./editor";

function CoverLetter() {
  const { CVData, onInputChange } = useCVData();
  const { user } = useAuth();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = pathname.split("/")[2];
    if (user?._id && CVData.details.fullName === "") {
      onInputChange({
        section: "details",
        subsection: "fullName",
        values: user.fullname,
      });
    }

    if (user?._id && CVData.details.email === "") {
      onInputChange({
        section: "details",
        subsection: "email",
        values: user.email,
      });
    }

    if (
      path === "job-description" ||
      path === "short-bio" ||
      path === "conclude"
    ) {
      let data = CVData.details;

      if (
        data.fullname === "" ||
        data.email === "" ||
        data.companyName === "" ||
        data.jobPosition === ""
      ) {
        navigate("/cover-letter/job-details");
        return;
      }
    }

    if (path === "short-bio" || path === "conclude") {
      let data = CVData.description;

      if (data.company === "" || data.job === "") {
        navigate("/cover-letter/job-description");
        return;
      }

      if (path === "conclude") {
        let data = CVData.bio;

        if (data === "" || data.length <= 30) {
          navigate("/cover-letter/short-bio");
          return;
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Routes>
          <Route
            element={
              <div className="flex justify-center items-center flex-col w-full lg:w-3/4 px-12 lg:px-32 text-center">
                <img src={img} alt="bot__image" />
                <Outlet />
              </div>
            }
          >
            <Route
              path="/"
              element={
                <StartedBuilding
                  isLogged={user?.isLogged}
                  name={user?.fullname}
                />
              }
            />
            <Route
              path="/job-details"
              element={
                <JobDetails
                  data={CVData.details}
                  handleChange={onInputChange}
                  isLogged={user?.isLogged}
                />
              }
            />
            <Route
              path="/job-description"
              element={
                <JobDescription
                  data={CVData.description}
                  handleChange={onInputChange}
                />
              }
            />
            <Route
              path="/short-bio"
              element={
                <ShortBio
                  data={CVData.bio}
                  handleChange={onInputChange}
                  isLogged={user?.isLogged}
                />
              }
            />
            <Route path="/info-ended" element={<EndBuilding />} />
          </Route>

          <Route path="/editor" element={<CoverEditor {...CVData} />} />
        </Routes>
      </div>
    </>
  );
}

export default CoverLetter;
