import React from "react";

import UserPage from "../components/UserPage";
import UsersList from "../components/UsersList";
import { useParams } from "react-router-dom";

export default function Users() {
  const { userId } = useParams();

  return <>{userId ? <UserPage id={userId} /> : <UsersList />}</>;
}
