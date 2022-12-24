import { Model } from "survey-core";
import { useCallback } from "react";
import { SurveyPDF } from "survey-react-ui";

const SurveyComponent = ({ surveyJson }) => {
  const survey = new Model(surveyJson);
  const printResults = useCallback(() => {
    SurveyPDF.createPDF(survey, "#surveyElement").then((pdf) => {
      pdf.download();
    });
  }, []);

  return (
    <div>
      <Survey model={survey} id="surveyElement" />
      <button onClick={printResults}>Export Results</button>
    </div>
  );
};

export default SurveyComponent;
