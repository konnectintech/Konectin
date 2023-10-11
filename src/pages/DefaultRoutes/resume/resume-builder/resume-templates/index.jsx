import { useNavigate } from "react-router-dom";
import { artisticTemplates, modernTemplates } from "./data";

function SelectedTemplates({ data }) {
  const { selectedTemplate } =
    JSON.parse(localStorage.getItem("templateData")) || "";
  const navigate = useNavigate();

  if (!selectedTemplate) {
    navigate("/resume/ai");
    return;
  }

  const [templateType, templateIndex] = selectedTemplate.split("_");
  const [ExactTemplate] =
    templateType === "modern"
      ? modernTemplates.filter((_, index) => index === templateIndex - 1)
      : artisticTemplates.filter((_, index) => index === templateIndex - 1);

  return ExactTemplate(data);
}

export default SelectedTemplates;
