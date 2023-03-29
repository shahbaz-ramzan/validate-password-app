// import React, { useState } from 'react';

// const PasswordField = () => {
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handlePasswordChange = (event) => {
    
//     const passwordValue = event.target.value;
//     // setPassword(passwordValue);
//     console.log("passwordValue",passwordValue)

//     const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/

//     ;
   
//     if (!passwordRegex.test(passwordValue)) {
//       setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.');
//     } else {
//       setError('');
//        setPassword(passwordValue);
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         // name="password"
//         value={password}
//         onChange={handlePasswordChange}
//         placeholder="password"
//       />
//       {error && <div className="error">{error}</div>}
//     </div>
//   );
// };

// export default PasswordField;
