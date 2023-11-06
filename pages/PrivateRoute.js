import { useEffect } from 'react';
import { useRouter } from 'next/router';
import sha256 from 'sha256';

const PrivateRoute = ({ children }) => {
   const router = useRouter();

   useEffect(() => {
      if (router.pathname === '/admin') {
         const vulnerabilityEnabled = localStorage.getItem("vulnerabilityEnabled");
         const storedHashedUsername = localStorage.getItem("token");
         const username = 'admin'
         const inputHashedUsername = sha256(username);

         if (vulnerabilityEnabled === 'false' && storedHashedUsername !== inputHashedUsername) {
            router.push('/');
         }
      }
   }, [router]);

   return <>{children}</>;
};

export default PrivateRoute;
