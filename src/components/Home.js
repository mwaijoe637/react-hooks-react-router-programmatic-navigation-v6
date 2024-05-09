import { Navigate } from "react-router-dom";

function Component({ isLoggedIn }) {
  return isLoggedIn ? <Navigate to="/" /> : null;
}
