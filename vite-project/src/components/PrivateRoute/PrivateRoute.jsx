import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/approutes";

export default function PrivateRoute({ user }) {
  return user ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
}
