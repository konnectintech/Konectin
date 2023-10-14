import axios from "axios";

export const onSectionComplete = async (template) => {
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const duplicateData = { ...template };

  delete duplicateData.completed;
  delete duplicateData._id;
  delete duplicateData.userId;
  delete duplicateData.__v;

  console.log(duplicateData);

  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      await axios.put(
        `${url}/updateResume?userId=${user._id}&resumeId=${template._id}`,
        duplicateData
      );
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
