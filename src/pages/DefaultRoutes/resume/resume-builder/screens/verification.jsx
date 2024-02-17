import axios from "axios";

export const onSectionComplete = async (template, stage) => {
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const data = { ...template };

  delete data.completed;
  delete data._id;
  delete data.userId;
  delete data.__v;

  try {
    const user = JSON.parse(localStorage.getItem("konectin-profiler-user"));

    if (user) {
      const { currentStage } = data;
      // If the user is logged in, add their details to the template submission
      const regenResume = await axios.put(
        `${url}/updateResume?userId=${user._id}&resumeId=${template._id}`,
        {
          ...data,
          currentStage: stage >= currentStage ? stage : currentStage,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      localStorage.setItem(
        "konectin-profiler-data-template",
        JSON.stringify({
          completed: {
            basic_info: currentStage >= 1,
            work_history: currentStage >= 2,
            education: currentStage >= 3,
            skills: currentStage >= 4,
            bio: currentStage >= 5,
          },
          ...regenResume.data.updated,
        })
      );

      console.log("resume updated", regenResume.data.updated);
    }
  } catch (err) {
    console.error(err);
  }
};

export function verifyInput(data, errorRef, holder) {
  const container = document.getElementById(holder);

  switch (holder) {
    case "firstName":
    case "lastName":
    case "email":
    case "country":
    case "jobTitle":
    case "company":
    case "schoolName":
    case "degree":
      if (data === "") {
        container.style.borderColor = "#F11010";
        errorRef.style.display = "block";
        errorRef.innerHTML = "Input field not filled yet";
      } else {
        container.style.borderColor = "initial";
        errorRef.style.display = "none";
      }
      break;
    case "current":
      break;
    case "startMonth":
    case "startYear":
    case "endMonth":
    case "endYear":
      if (data === "") {
        container.style.borderColor = "#F11010";
        errorRef.style.display = "block";
        errorRef.innerHTML = "Date not selected yet";
      } else {
        container.style.borderColor = "initial";
        errorRef.style.display = "none";
      }
      break;
    case "fullName":
    case "phoneCode":
    case "profession":
      return null;
    default:
      if (data.length >= 1 && data.length < 3) {
        container.style.borderColor = "#F11010";
        errorRef.style.display = "block";
        errorRef.innerHTML = "Not enough words";
      } else {
        container.style.borderColor = "initial";
        errorRef.style.display = "none";
      }
      break;
  }
}
