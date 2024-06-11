import { useTemplateContext } from "../../../../../middleware/resume";
import { artisticTemplates, modernTemplates } from "./data";

function SelectedTemplates({ data }) {
  const { templateData } = useTemplateContext();

  // if (!templateData?.selectedTemplate) {
  //   window.location.href = "/resume/ai";
  //   return;
  // }

  const [templateType, templateIndex] =
    templateData?.selectedTemplate.split("_");
  const [ExactTemplate] =
    templateType === "modern"
      ? modernTemplates.filter((_, index) => index === templateIndex - 1)
      : artisticTemplates.filter((_, index) => index === templateIndex - 1);

  return ExactTemplate?.element(data);
}

export default SelectedTemplates;
