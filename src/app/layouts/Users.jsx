import React from "react";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/EditUserPage";
import UserPage from "../components/page/UserPage";
import UsersListPage from "../components/page/UsersListPage";
const Users = () => {
  const params = useParams();
  const { userId, edit } = params;
  return <>{userId ? edit ? <EditUserPage /> : <UserPage userId={userId} /> : <UsersListPage />}</>;
};

export default Users;
