import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "biind-test",
  clientId: "react-test-auth",
});

export default keycloak;
