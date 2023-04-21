



// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../AuthContext";
// import './Header.css';


// const Header = () => {
//   const { isAuthenticated, logout } = useContext(AuthContext);

//   return (
//     <header>
//       <nav>
//         <div className="logo">Logo</div>
//         <ul>
//           <li>
//             <Link to="/">Accueil</Link>
//           </li>
//           <li>
//             <Link to="/counter">Compteur</Link>
//           </li>
//           <li>
//             <Link to="/advice">Conseils</Link>
//           </li>
//         </ul>
//         <div className="account-section">
//           {!isAuthenticated && (
//             <>
//               <Link to="/signin">Connexion</Link>
//               <Link to="/signup">Inscription</Link>
//             </>
//           )}
//           {isAuthenticated && (
//             <>
//               <span>Compte</span>
//               <button onClick={logout}>Déconnexion</button>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



























import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, signOut }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      {isAuthenticated ? (
        <>
          <Link to="/addictions">Addictions</Link>
          <Link to="/create-addiction">Create Addiction</Link>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Header;



























