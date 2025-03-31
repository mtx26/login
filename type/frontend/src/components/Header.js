import React, { useState } from "react";
import { handleLogout } from "../services/authService";
import { useContext } from "react";
import { UserContext  } from "../contexts/UserContext";
import { AuthContext } from "../contexts/LoginContext";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdb-react-ui-kit";


function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { userInfo } = useContext(UserContext);
  const { setLogin } = useContext(AuthContext);


  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        {/* Logo du site */}
        <MDBNavbarBrand href="/">SportMetrics
        </MDBNavbarBrand>

        {/* Contenu du menu */}
        <MDBCollapse navbar>
          <MDBNavbarNav className="me-auto">
            <MDBNavbarItem>
              <MDBNavbarLink href="/accueil">Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/services">Title</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
            </MDBNavbarItem>
            {userInfo && userInfo?.role === "admin" && 
            <MDBNavbarItem>
              <MDBNavbarLink href="/admin">Admin</MDBNavbarLink>
            </MDBNavbarItem>
            }
          </MDBNavbarNav>
        </MDBCollapse>

        {/* Section pour l’icône utilisateur et le bouton burger */}
        <div className="d-flex align-items-center gap-3">
          
          {/* Pseudo de l'utilisateur */}
          {userInfo && <span className="fw-bold">{userInfo?.displayName || "User"}</span>}

          {/* Icône Profil avec Dropdown */}
          <MDBDropdown className="me-3">
            <MDBDropdownToggle tag="a" className="nav-link hidden-arrow d-flex align-items-center">
              {userInfo?.photoURL ? (
                <img 
                  src={userInfo?.photoURL} 
                  alt="Profil" 
                  className="rounded-circle" 
                  width="40" 
                  height="40" 
                  referrerPolicy="no-referrer" 
                />
              ) : (
                <MDBIcon fas icon="user-circle" style={{ fontSize: "40px" }} />
              )}
            </MDBDropdownToggle>

            {/* Dropdown menu pour utilisateur connecté ou non */}
            <MDBDropdownMenu className="dropdown-menu-end">
              {userInfo ? (
                <>
                  <MDBDropdownItem link href="/profile">My profile</MDBDropdownItem>
                  <MDBDropdownItem link href="/settings">Settings</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem link href="/" onClick={() => handleLogout(setLogin)}>Logout</MDBDropdownItem>
                </>
              ) : (
                <>
                  <MDBDropdownItem link href="/login">Login</MDBDropdownItem>
                  <MDBDropdownItem link href="/register">Register</MDBDropdownItem>
                </>
              )}
            </MDBDropdownMenu>
          </MDBDropdown>

          {/* Bouton Burger - Ajout d'une icône */}
          <MDBNavbarToggler
            type="button"
            aria-expanded={showNav}
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas size="lg" />
          </MDBNavbarToggler>

        </div>


        {/* Contenu du menu */}
        <MDBCollapse open={showNav} className="w-100">
          <MDBNavbarNav className="ms-auto flex-column">
            <MDBNavbarItem>
              <MDBNavbarLink href="/accueil">Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/services">Title</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;