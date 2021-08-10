import { useHistory, useParams } from "react-router-dom";

import Button from "../Button/button";

import "../TaskDetails/TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          magni mollitia nesciunt corrupti, fugiat dolorem.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
