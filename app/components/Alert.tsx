import { useState } from "react";

const Alert = ({ type, message }: { type: string; message: string }) => {
  const [alert, setAlert] = useState("");

  setAlert(message);
  return (
    <div role="alert" className={`alert-${type} justify-self-center`}>
      {message}
    </div>
  );
};

export default Alert;
