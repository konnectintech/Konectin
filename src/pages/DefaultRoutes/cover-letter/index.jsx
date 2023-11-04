import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../middleware/auth";
import { useCVData } from "../../../middleware/cv";
import img from "../../../assets/images/bot/bot.svg";

// Routes
import Start from "./started";
import JobDetails from "./details";
import JobDescription from "./description";
import ShortBio from "./ShortBio";
import { useEffect } from "react";
import Ended from "./ended";


function CoverLetter() {
  const { CVData, onInputChange } = useCVData();
  const { user } = useAuth();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = pathname.split("/")[2];

    if (user?._id && (CVData.details.fullname === "" || CVData.details.email)) {
      onInputChange({
        section: "details",
        subsection: "fullName",
        values: user.fullname,
      });
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
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col w-full lg:w-3/4 px-12 lg:px-32 text-center">
          <img src={img} alt="bot__image" />

          <Routes>
            <Route
              path="/"
              element={
                <Start isLogged={user?.isLogged} name={user?.fullname} />
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
                  data={CVData.description.bio}
                  handleChange={onInputChange}
                  isLogged={user?.isLogged}
                />
              }
            />
            <Route path="/info-ended" element={<Ended data={CVData} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default CoverLetter;
