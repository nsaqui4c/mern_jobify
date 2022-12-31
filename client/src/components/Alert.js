import { useSelector } from "react-redux";

import { showAlertReducer } from "../redux/reducer";

export const Alert = () => {
  const { alertType, alertText, showAlert } = useSelector(
    (state) => state.showAlert
  );
  return (
    <>
      {showAlert ? (
        <div className={`alert alert-${alertType}`}> {alertText}</div>
      ) : (
        <></>
      )}
    </>
  );
};
