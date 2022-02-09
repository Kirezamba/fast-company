import React from "react";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";

export default function Users() {
  const { userId, edit } = useParams();

  return <>{userId ? edit ? <EditUserPage /> : <UserPage id={userId} /> : <UsersListPage />}</>;
}
