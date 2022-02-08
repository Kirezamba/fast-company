import React from "react";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";

import { useParams } from "react-router-dom";

export default function Users() {
  const { userId } = useParams();

  return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>;
}
