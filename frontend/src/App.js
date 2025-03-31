import AppRouter from "./routes/AppRouter"; // Import du routing
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { AuthProvider } from "./contexts/LoginContext";

const App = () => {

  return (
    
    <AuthProvider>
      <UserProvider>
        <Router>
          <div id="root">
            <Header/>
            <main className="main-content">
              <AppRouter/>
            </main>
            <Footer/>
          </div>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
