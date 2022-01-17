import React from "react";
import { Container } from "@mui/material";
import {
  Home,
  AccountBalance,
  Notifications,
  Chat,
  Logout,
} from "@mui/icons-material";
import { Logo } from "asset";

const Navbar = () => {
  return (
    <nav className="navbar-main">
      <Container>
        <div className="navbar-inner-container flex-row align-items-center w-100">
          <div className="navbar-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-navigation">
            <ul className="navbar-navigation-list flex-row gap-1 align-items-center ">
              <li className="navbar-navigation-li d-flex gap-0 align-items-center ">
                <Home />
                Home
              </li>
              <li className="navbar-navigation-li d-flex gap-0 align-items-center ">
                {" "}
                <AccountBalance /> Ambassadors
              </li>
              <li className="navbar-navigation-li d-flex gap-0 align-items-center">
                {" "}
                <Notifications />
              </li>
              <li className="navbar-navigation-li d-flex gap-0 round-profile-nav-icon ">
                <div>P</div>
                <div className="navbar-hover-navigation flex-column gap-0">
                  <span className="navbar-user-details flex-row gap-0 align-items-center">
                    <div className="navbar-user-details-logo">
                      <img src="https://picsum.photos/200/300" alt="Logo" />
                    </div>
                    <div className="flex-column ">
                      <span className="navbar-user-name">User</span>
                      <span className="navbar-user-email">user@user.com</span>
                    </div>
                  </span>
                  <span className="navbar-chat gap-0 flex-row align-items-center">
                    <Chat />
                    Chat
                  </span>
                  <hr />
                  <span className="navbar-logout gap-0 flex-row align-items-center ">
                    <Logout />
                    Logout
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
