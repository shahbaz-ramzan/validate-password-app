import { useState } from "react";
import { validPassword } from "./Regex";

function PasswordValidate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!validPassword.test(password)) {
      setError(true);
      console.log("your type password is:", password);
    } else {
      console.log("successfully validated");
    }
  };

  return (
    <>
      <label>password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validate}>Validate</button>
      {error && <p>Your password is invalid</p>}
    </>
  );
}

export default PasswordValidate;
