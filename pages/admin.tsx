import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import sha256 from 'sha256';

const Admin: React.FC = () => {
   const router = useRouter();
   var condition = false;

   useEffect(() => {
      if (localStorage.getItem("vulnerabilityEnabled") === 'false') {
         const storedHashedUsername = localStorage.getItem('token');

         const username = 'admin'
         // Hash the input username for comparison
         const inputHashedUsername = sha256(username);

         if (storedHashedUsername !== inputHashedUsername) {
            // The usernames do not match
            condition = true;
         }

      } else if (localStorage.getItem("vulnerabilityEnabled") === 'true') {

      }
   }, []);
   const [users, setUsers] = useState(["petra", "admin"]);
   const [selectedUserId, setSelectedUserId] = useState(null);


   return (
      <div>
         {condition ? null : (
            <div className='adminPage'>
               <h1 className="title">Admin Page</h1>
               <h2 className='title'>If you are not admin, you are not allowed</h2>
               <h2>User List:</h2>
               <ul className="userList">
                  <li>
                     admin - Role: &quot;admin&quot;
                  </li>
                  <li>
                     petra - Role: &quot;user&quot;
                  </li>
               </ul>

               <h2>Go back to main page: <Link href="/">Main Page</Link></h2>
            </div>

         )}
      </div>
   );
};

export default Admin;
