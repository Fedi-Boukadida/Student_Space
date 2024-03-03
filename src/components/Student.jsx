import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginLogo from "../assets/20.png";
import "./Student.css";
import { FaUserCircle } from "react-icons/fa";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormList from "./FormList.jsx";
import Timetable from "./Timetable.jsx";
import Logo from "../assets/logs.png";
import Notes from "./Notes.jsx";
const BackGroup =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2MSIgaGVpZ2h0PSI2MDkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+IDxnIG9wYWNpdHk9Ii44IiB0cmFuc2Zvcm09InJvdGF0ZSgtNyA0MjkxLjM0MTUyMzEgMjc4Ljg4MDcxMjg2KSI+IDxlbGxpcHNlIGZpbGw9IiNDRkRBRTYiIG9wYWNpdHk9Ii4yNSIgY3g9IjYzLjU3NDg3OTIiIGN5PSIzMi40NjgzNjciIHJ4PSIyMS43ODMwNDc5IiByeT0iMjEuNzY2MDA4Ii8+IDxlbGxpcHNlIGZpbGw9IiNDRkRBRTYiIG9wYWNpdHk9Ii41OTk5OTk5NiIgY3g9IjUuOTg3NDY0NzkiIGN5PSIxMy44NjY4NjAxIiByeD0iNS4yMTczOTEzIiByeT0iNS4yMTMzMDk5NyIvPiA8cGF0aCBkPSJNMzguMTM1NDUxNCA4OC4zNTIwMjE1YzUuNzYyOTcxMyAwIDEwLjQzNDc4MjYtNC42NjgxNTY4IDEwLjQzNDc4MjYtMTAuNDI2NjJzLTQuNjcxODExMy0xMC40MjY2MTk5LTEwLjQzNDc4MjYtMTAuNDI2NjE5OS0xMC40MzQ3ODI2IDQuNjY4MTU2Ny0xMC40MzQ3ODI2IDEwLjQyNjYxOTljMCA1Ljc1ODQ2MzIgNC42NzE4MTEzIDEwLjQyNjYyIDEwLjQzNDc4MjYgMTAuNDI2NjJaIiBmaWxsPSIjQ0ZEQUU2IiBvcGFjaXR5PSIuNDUiLz4gPHBhdGggZD0ibTY0LjI3NzU1ODIgMzMuMTcwNDk2MyA1NC45MDgyNzc4LTE2LjYwNTAwNDgiIHN0cm9rZT0iI0NGREFFNiIgc3Ryb2tlLXdpZHRoPSIxLjczOTEzMDQzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4gPHBhdGggZD0iTTQyLjE0MzE3MDggMjYuNTAwMjY4MSA3LjcxMTkwMTYyIDE0LjU2NDA3MDIiIHN0cm9rZT0iI0UwQjRCNyIgc3Ryb2tlLXdpZHRoPSIuNzAyNjc4OTYiIG9wYWNpdHk9Ii43IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjEuNDA1MzU3ODk5ODczMTUzLDIuMTA4MDM2OTUzNDY5OTgxIi8+IDxwYXRoIGQ9Ik02My45MjYyMTg3IDMzLjUyMTU2MSA0My42NzIxMzI2IDY5LjMyNTA5NTEiIHN0cm9rZT0iI0JBQ0FEOSIgc3Ryb2tlLXdpZHRoPSIuNzAyNjc4OTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMS40MDUzNTc4OTk4NzMxNTMsMi4xMDgwMzY5NTM0Njk5ODEiLz4gPGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNjAuMDMxMzUzMyAyMzAuMjEwODE0NTMpIiBmaWxsPSIjQ0ZEQUU2Ij4gPGVsbGlwc2Ugb3BhY2l0eT0iLjQ1IiBjeD0iOS4xMzQ4MjY1MyIgY3k9IjkuMTI3NjgwNzYiIHJ4PSI5LjEzNDgyNjUzIiByeT0iOS4xMjc2ODA3NiIvPiA8cGF0aCBkPSJNOWUtNyA5LjEyNzY4MDVjMCA1LjA0MTA3ODkgNC4wODk4MDEyIDkuMTI3NjgwNzQgOS4xMzQ4MjY1NyA5LjEyNzY4MDc0IDUuMDQ1MDI1MzkgMCA5LjEzNDgyNjUzLTQuMDg2NjAxODQgOS4xMzQ4MjY1My05LjEyNzY4MDc0SDllLTdaIi8+IDwvZz4gPC9nPiA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtNSA0NjIuNDc5ODQ2ODggLTEwOTIuNzU3ODc4MzcpIj4gPGVsbGlwc2UgZmlsbD0iI0NGREFFNiIgb3BhY2l0eT0iLjI1IiBjeD0iMjkuMTE3NjQ3MSIgY3k9IjI5LjE0MDI0MzkiIHJ4PSIyOS4xMTc2NDcxIiByeT0iMjkuMTQwMjQzOSIvPiA8ZWxsaXBzZSBmaWxsPSIjQ0ZEQUU2IiBvcGFjaXR5PSIuMyIgY3g9IjI5LjExNzY0NzEiIGN5PSIyOS4xNDAyNDM5IiByeD0iMjEuNTY4NjI3NSIgcnk9IjIxLjU4NTM2NTkiLz4gPGVsbGlwc2Ugc3Ryb2tlPSIjQ0ZEQUU2IiBvcGFjaXR5PSIuNCIgY3g9IjE3OS4wMTk2MDgiIGN5PSIxMzguMTQ2MzQxIiByeD0iMjMuNzI1NDkwMiIgcnk9IjIzLjc0MzkwMjQiLz4gPGVsbGlwc2UgZmlsbD0iI0JBQ0FEOSIgb3BhY2l0eT0iLjUiIGN4PSIyOS4xMTc2NDcxIiBjeT0iMjkuMTQwMjQzOSIgcng9IjEwLjc4NDMxMzciIHJ5PSIxMC43OTI2ODI5Ii8+IDxwYXRoIGQ9Ik0yOS4xMTc2NDcxIDM5LjkzMjkyNjhWMTguMzQ3NTYxYy01Ljk1NjAxMiAwLTEwLjc4NDMxMzggNC44MzIwNDg3LTEwLjc4NDMxMzggMTAuNzkyNjgyOSAwIDUuOTYwNjM0MiA0LjgyODMwMTggMTAuNzkyNjgyOSAxMC43ODQzMTM4IDEwLjc5MjY4MjlaIiBmaWxsPSIjQkFDQUQ5Ii8+IDxnIG9wYWNpdHk9Ii40NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyIDEzMSkiIGZpbGw9IiNFNkExQTYiPiA8ZWxsaXBzZSBjeD0iNy4wMTk2MDc4NCIgY3k9IjcuMTQ2MzQxNDYiIHJ4PSI2LjQ3MDU4ODI0IiByeT0iNi40NzU2MDk3NiIvPiA8cGF0aCBkPSJNNy4wMTk2MDg0IDEzLjYyMTk1MTJjLTMuNTczNjA3MjEgMC02LjQ3MDU4ODI0LTIuODk5MjI5Mi02LjQ3MDU4ODI0LTYuNDc1NjA5NzQgMC0zLjU3NjM4MDUxIDIuODk2OTgxMDMtNi40NzU2MDk3NSA2LjQ3MDU4ODIzLTYuNDc1NjA5NzVWMTMuNjIxOTUxMloiLz4gPC9nPiA8ZWxsaXBzZSBmaWxsPSIjQ0ZEQUU2IiBjeD0iMjE4LjM4MjM1MyIgY3k9IjEzOC42ODU5NzYiIHJ4PSIxLjYxNzY0NzA2IiByeT0iMS42MTg5MDI0NCIvPiA8ZWxsaXBzZSBmaWxsPSIjRTBCNEI3IiBvcGFjaXR5PSIuMzUiIGN4PSIxNzkuNTU4ODI0IiBjeT0iMTc1LjM4MTA5OCIgcng9IjEuNjE3NjQ3MDYiIHJ5PSIxLjYxODkwMjQ0Ii8+IDxlbGxpcHNlIGZpbGw9IiNFMEI0QjciIG9wYWNpdHk9Ii4zNSIgY3g9IjE4MC4wOTgwMzkiIGN5PSIxMDIuNTMwNDg4IiByeD0iMi4xNTY4NjI3NSIgcnk9IjIuMTU4NTM2NTkiLz4gPHBhdGggZD0iTTI4Ljk5ODUzODEgMjkuOTY3MTU5OCAxNzEuMTUxMDE4IDEzMi44NzYwMjQiIHN0cm9rZT0iI0NGREFFNiIgb3BhY2l0eT0iLjgiLz4gPC9nPiA8ZyBvcGFjaXR5PSIuNzk5OTk5OTUiIHRyYW5zZm9ybT0icm90YXRlKC0xMSA1MTcuMjYwNDU5MjIgLTUyOTAuNjEyNTYzMDIpIj4gPGVsbGlwc2Ugc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9Ii45NDExNzY0NyIgY3g9IjQzLjgxMzU1OTMiIGN5PSIzMiIgcng9IjExLjE4NjQ0MDciIHJ5PSIxMS4yOTQxMTc2Ii8+IDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjU5Njc3NCAyMy4xMTExMTEpIiBmaWxsPSIjQkFDQUQ5Ij4gPGVsbGlwc2Ugb3BhY2l0eT0iLjQ1IiBjeD0iOS4xODUzNDcxOCIgY3k9IjguODg4ODg4ODkiIHJ4PSI4LjQ3NDU3NjI3IiByeT0iOC41NTYxNDk3MyIvPiA8cGF0aCBkPSJNOS4xODUzNDcxOCAxNy40NDUwMzg2YzQuNjgwMzc5MjIgMCA4LjQ3NDU3NjMyLTMuODMwNzE4NyA4LjQ3NDU3NjMyLTguNTU2MTQ5NzEgMC00LjcyNTQzMTAyLTMuNzk0MTk3MS04LjU1NjE0OTczLTguNDc0NTc2MzItOC41NTYxNDk3M1YxNy40NDUwMzg2WiIvPiA8L2c+IDxwYXRoIGQ9Ik0zNC42NTk3Mzg1IDI0LjgwOTY5NCA1LjcxNjY2MDg0IDQuNzY4Nzg5NDUiIHN0cm9rZT0iI0NGREFFNiIgc3Ryb2tlLXdpZHRoPSIuOTQxMTc2NDciLz4gPGVsbGlwc2Ugc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9Ii45NDExNzY0NyIgY3g9IjMuMjYyNzExODYiIGN5PSIzLjI5NDExNzY1IiByeD0iMy4yNjI3MTE4NiIgcnk9IjMuMjk0MTE3NjUiLz4gPGVsbGlwc2UgZmlsbD0iI0Y3RTFBRCIgY3g9IjIuNzk2NjEwMTciIGN5PSI2MS4xNzY0NzA2IiByeD0iMi43OTY2MTAxNyIgcnk9IjIuODIzNTI5NDEiLz4gPHBhdGggZD0iTTM0LjYzMTI0NDMgMzkuMjkyMjcxMiA1LjA2MzY2NjYzIDU5Ljc4NTA4MiIgc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9Ii45NDExNzY0NyIvPiA8L2c+IDxnIG9wYWNpdHk9Ii4zMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTEwIDI1MzAuNTIwODIzNyAtNjIzOS45NDg1OTk3KSI+IDxnIHRyYW5zZm9ybT0icm90YXRlKC04NSAxMjcuMTQxMjgzODYgLTEyLjMyMDAyNDMpIiBmaWxsPSIjQkFDQUQ5Ij4gPGNpcmNsZSBvcGFjaXR5PSIuNDUiIGN4PSIxMS42NjY2NjY3IiBjeT0iMTEuNjY2NjY2NyIgcj0iMTEuNjY2NjY2NyIvPiA8cGF0aCBkPSJNN2UtNyAxMS42NjY2NjY3YzAgNi40NDMzMjIgNS4yMjMzNDQ2IDExLjY2NjY2NjYgMTEuNjY2NjY2NiAxMS42NjY2NjY2IDYuNDQzMzIyMTEgMCAxMS42NjY2NjY3LTUuMjIzMzQ0NiAxMS42NjY2NjY3LTExLjY2NjY2NjZIN2UtN1oiLz4gPC9nPiA8Y2lyY2xlIGZpbGw9IiNDRkRBRTYiIGN4PSIyMDEuODMzMzMzIiBjeT0iODcuNSIgcj0iNS44MzMzMzMzMyIvPiA8cGF0aCBkPSJtMTQzLjUgODguODEyNjY4NSAxMS41NzA1MDEtNzEuMjA4ODE0MU0xNy41IDM3LjMzMzMzMzNsMTA5Ljk2NjI1MiA2MC4zMTE2NDAyIiBzdHJva2U9IiNCQUNBRDkiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIvPiA8cGF0aCBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIgZD0ibTE0My45MDI1OTcgMTIwLjMwMjI4MSAzMS4wMzI4NTggMTExLjI2OTA2MUwzOC41IDE0Ny41MTA4NDdsODcuODY2OTQxLTM2LjY3NzUxNCIvPiA8cGF0aCBkPSJNMTU5LjgzMzMzMyA5OS43NDUzODQyIDE5NS40MTY2NjcgODkuMjUiIHN0cm9rZT0iI0UwQjRCNyIgc3Ryb2tlLXdpZHRoPSIxLjE2NjY2NjY3IiBvcGFjaXR5PSIuNiIvPiA8cGF0aCBkPSJtMjA1LjMzMzMzMyA4Mi4xMzcyMTA1IDMzLjM4NjA3My00NS45NzA1NDM4IiBzdHJva2U9IiNCQUNBRDkiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIvPiA8cGF0aCBkPSJtMjY2LjcyMzQyNCAxMzIuMjMxOTg4LTU5LjY0MDA5MS00MS44MTUzMjEzIiBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIvPiA8Y2lyY2xlIGZpbGw9IiNDMUQxRTAiIGN4PSIxNTYuOTE2NjY3IiBjeT0iOC43NSIgcj0iOC43NSIvPiA8Y2lyY2xlIGZpbGw9IiNDMUQxRTAiIGN4PSIzOS4wODMzMzMzIiBjeT0iMTQ4Ljc1IiByPSI1LjI1Ii8+IDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuNiIgZmlsbD0iI0QxREVFRCIgY3g9IjguNzUiIGN5PSIzMy4yNSIgcj0iOC43NSIvPiA8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iLjYiIGZpbGw9IiNEMURFRUQiIGN4PSIyNDMuODMzMzMzIiBjeT0iMzAuMzMzMzMzMyIgcj0iNS44MzMzMzMzMyIvPiA8Y2lyY2xlIGZpbGw9IiNFMEI0QjciIGN4PSIxNzUuNTgzMzMzIiBjeT0iMjMyLjc1IiByPSI1LjI1Ii8+IDwvZz4gPC9nPiA8L3N2Zz4=";

const StudentSection = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  };


  const renderContent = () => {
    switch (selectedNavItem) {
      case "timetable":
        return <Timetable />;
      case "requests":
        return <div>Calendrier des examens content</div>;
      case "stage":
        return <div>Offres de stage content</div>;
      case "rattra":
        return <div>Rattrapages des groupes content</div>;
      case "embauche":
        return <div>Offres d'emploi content</div>;
      case "exchange":
        return <div>Echanges académiques content</div>;
      case "form":
        return <FormList />;
      case "notes":
        return <Notes />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackGroup})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1></h1>
      <h3 className="section-title">
        Espace <span className="highlight">Etudiant</span>
      </h3>
      <Navbar bg="transparent" variant="light" expand="md" className="navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ArrowForwardIosIcon className="navbar-icon" />
          <Nav className="mr-auto">
          <Nav.Link onClick={() => { handleNavItemClick("timetable"); handleNavLinkClick(); }}>
              Emploi du temps
            </Nav.Link>
            <Nav.Link onClick={() => {handleNavItemClick("requests");handleNavLinkClick();}}>
              Calendrier des examens
            </Nav.Link>
            <Nav.Link onClick={() => {handleNavItemClick("stage");handleNavLinkClick();}}>
              Offres de stage
            </Nav.Link>
            <Nav.Link onClick={() => {handleNavItemClick("rattra");handleNavLinkClick();}}>
              Rattrapages des groupes
            </Nav.Link>
            <Nav.Link onClick={() => {handleNavItemClick("embauche");handleNavLinkClick();}}>
              Offres d'emploi
            </Nav.Link>
            <Nav.Link onClick={() => {handleNavItemClick("exchange");handleNavLinkClick();}}>
              Echanges académiques
            </Nav.Link>
            <Nav.Link onClick={() => {handleNavItemClick("form");handleNavLinkClick();}}>
              Formulaires en ligne
            </Nav.Link>
            <Nav.Link onClick={() => {handleNavItemClick("notes");handleNavLinkClick();}}>
              Notes
            </Nav.Link>
          </Nav>
          <div className="d-none d-md-block">
            {" "}
            {/* Hide logo on smaller screens */}
            <Navbar.Brand>
              <img src={LoginLogo} alt="Logo" className="logo-img" />
            </Navbar.Brand>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="content-container">{renderContent()}</div>
      </div>
      <h1></h1>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src={Logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <p>&copy; {new Date().getFullYear()} ISIMM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StudentSection;
