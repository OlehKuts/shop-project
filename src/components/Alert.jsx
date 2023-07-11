import { useEffect } from "react";

export const Alert = ({ name = "", closeAlert = Function.prototype }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);
    return () => {
      clearInterval(timerId);
    };
  }, [name]);
  return (
    <div className="toast-container">
      <div className="toast">{name} has been added into your basket!</div>
    </div>
  );
};
