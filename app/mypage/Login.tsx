// "use client";

// import { FormEvent, useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert(`Email: ${email}\nPassword: ${password}`);
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleLogin} className="form">
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>

//        <style>{`
//         .container {
//           min-height: 25vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin-left: 70px;
//         }
//         .form {
//           background: white;
//           padding: 40px;
//           border-radius: 8px;
//           box-shadow: 0 0 15px rgba(0,0,0,0.1);
//           width: 100%;
//           max-width: 400px;
//           text-align: center;
//         }
//         .form h2 {
//           margin-bottom: 20px;
//           color: black;
//         }
//         .form input {
//           width: 100%;
//           padding: 10px;
//           margin-bottom: 15px;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//           font-size: 16px;
//           color: black;
//         }
//         .form button {
//           width: 100%;
//           padding: 10px;
//           background-color: #0070f3;
//           border: none;
//           border-radius: 4px;
//           color: white;
//           font-size: 16px;
//           cursor: pointer;
//         }
//         .form button:hover {
//           background-color: #005bb5;
//         }
//       `}</style>

//       </>
//   );
// }

"use client";

import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="h-[400px] flex items-center justify-center bg-black px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded text-black"
        />
       
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
