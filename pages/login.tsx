import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import sha256 from 'sha256';



const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const router = useRouter();

   const handleLogin = (e: any) => {
      e.preventDefault();
      // Add your authentication logic here
      // For example, you can send a request to a server or check credentials in localStorage
      if (username === 'admin' && password === '12345678') {
         const hashedUsername = sha256(username).toString();
         localStorage.setItem("token", hashedUsername);
         setIsLoggedIn(true);
         router.push('/');
      } else if (username === 'petra' && password === '12345678') {
         const hashedUsername = sha256(username).toString();
         localStorage.setItem("token", hashedUsername);
         setIsLoggedIn(true);
         router.push('/');
      } else {
         alert("Please user correct username and password")
      }
   };

   return (
      <div className="login-container">
         <h2>Login</h2>
         <form onSubmit={handleLogin}>
            <div>
               <label htmlFor="username">Username:</label>
               <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </div>
            <div>
               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <button type="submit" className="buttonLogin">Login</button>
         </form>
      </div>
   );
};

export default Login;
