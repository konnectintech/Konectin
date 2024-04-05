import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../../../middleware/auth";
import { useCVContext } from "../../../middleware/cv";
import { useEffect } from "react";

// assets
import { botIcon } from "../../../assets";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// Routes
import StartBuilding from "./builder/startBuilding";
import JobDetails from "./builder/details";
import JobDescription from "./builder/description";
import ShortBio from "./builder/shortBio";
import CreateLetter from "./builder/createLetter";
import CoverEditor from "./editor";
import CompanyBrief from "./builder/companyBrief";

function CoverLetter() {
  const { CVData, onInputChange } = useCVContext();
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
        data.fullName === "" ||
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

      if (data.companyInfo === "" || data.jobDescription === "") {
        navigate("/cover-letter/job-description");
        return;
      }

      if (path === "conclude") {
        let data = CVData.professionalBio;

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
      <div className="flex justify-center items-center h-full w-full cover-letter-main">
        <Routes>
          <Route
            element={
              <div className="flex justify-center items-center flex-col w-full lg:w-3/4 px-12 lg:px-32 text-center pb-16">
                <div
                  onClick={() => navigate(-1)}
                  className="self-start flex items-center gap-2 text-sm cursor-pointer"
                >
                  <IoArrowBackCircleOutline size="1.4rem" /> Back
                </div>
                <img src={botIcon} alt="bot__image" />
                <Outlet />
              </div>
            }
          >
            <Route
              path="/"
              element={<StartBuilding isLogged={user} name={user?.fullname} />}
            />
            <Route
              path="/job-details"
              element={
                <JobDetails
                  data={CVData.details}
                  handleChange={onInputChange}
                  isLogged={user}
                />
              }
            />
            <Route
              path="/job-description"
              element={
                <JobDescription
                  data={CVData.description.jobDescription}
                  handleChange={onInputChange}
                />
              }
            />
            <Route
              path="/company-info"
              element={
                <CompanyBrief
                  data={CVData.description.companyInfo}
                  handleChange={onInputChange}
                />
              }
            />
            <Route
              path="/short-bio"
              element={
                <ShortBio
                  data={CVData.professionalBio}
                  handleChange={onInputChange}
                  isLogged={user}
                />
              }
            />
            <Route path="/info-ended" element={<CreateLetter />} />
          </Route>

          <Route path="/editor" element={<CoverEditor />} />
        </Routes>
      </div>
    </>
  );
}

export default CoverLetter;
