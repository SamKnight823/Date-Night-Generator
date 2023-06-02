import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    },
    {
      name: "FavoriteFood",
      title: "Enter your favorite food:",
      type: "text"
    },
    {
      name: "FavoriteBook",
      title: "Enter your favorite book:",
      type: "text"
    }
  ]
};

export default function Surveys() {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <div>
    <p>If you're looking for some new and exciting date ideas, take this online quiz. 
      It's a great way to find dates that you'll both enjoy, and it's a lot of fun to take.
      Your results will help us suggest more personalized dates from our random date picker!</p>
    <Survey model={survey} />
    </div>)
}

