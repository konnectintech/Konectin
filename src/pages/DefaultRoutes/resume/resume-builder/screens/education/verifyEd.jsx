export function verifyEd(data, errorRef, holder) {
  const container = document.getElementById(holder);

  switch (holder) {
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
    default:
      if (data.length >= 1 && data.length < 3) {
        container.style.borderColor = "#F11010";
        errorRef.style.display = "block";
        errorRef.innerHTML = "Not enough words";
      } else {
        container.style.borderColor = "initial";
        errorRef.style.display = "none";
      }
  }
}
