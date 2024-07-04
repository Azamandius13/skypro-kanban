import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/approutes";
import { useUser } from "../../hooks/useUser";

export default function PrivateRoute() {
  const {userData} = useUser();
  return userData ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
}
