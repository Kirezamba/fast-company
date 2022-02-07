import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./QualitiesList";
import { useHistory } from "react-router-dom";

export default function UserPage({ id }) {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data));
  }, []);
  console.log(user);
  const handleClick = () => {
    history.push("/users");
  };

  if (user) {
    return (
      <div>
        <h1>Имя: {user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>Всего встреч: {user.completedMeetings}</p>
        <p>Оценка: {user.rate}</p>
        <button className="btn btn-primary" onClick={handleClick}>
          Все пользователи
        </button>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};
