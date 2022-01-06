import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <nav className="d-flex bg-secondary justify-content-center align-items-center py-2">
      <h1 className="text-white ms-3">Biind</h1>
      <div className="d-flex ms-auto list-style-none">
        <Link to="/">
          <button className="btn btn-primary me-2">Home</button>
        </Link>
        <Link to="/secured">
          <button className="btn btn-primary me-2">Secured Page</button>
        </Link>
        {!keycloak.authenticated && (
          <button
            type="button"
            className="btn btn-warning me-2"
            onClick={() => keycloak.login()}
          >
            Login
          </button>
        )}

        {!!keycloak.authenticated && (
          <button
            type="button"
            className="btn btn-warning me-2"
            onClick={() => keycloak.logout()}
          >
            Logout ({keycloak.tokenParsed.preferred_username})
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
