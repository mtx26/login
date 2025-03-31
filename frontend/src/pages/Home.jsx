import { useContext } from "react";
import { AuthContext } from "../contexts/LoginContext";

function Home() {
  
  const { login } = useContext(AuthContext);
  console.log(login);

  
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <p>Vous êtes {login ? "connecté" : "déconnecté"}</p>
    </div>


  );
}

  export default Home;
  