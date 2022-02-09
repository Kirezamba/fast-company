import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";

export default function UserPage({ id }) {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data));
  }, []);

  const handleClick = () => {
    history.push(`/users/${id}/edit`);
  };

  if (user) {
    return (
      <div style={{ marginLeft: "3rem" }}>
        <h1>Name: {user.name}</h1>
        <h2>Profession: {user.profession.name}</h2>
        <Qualities qualities={user.qualities} />
        <p>Completed meetings: {user.completedMeetings}</p>
        <p>Rate: {user.rate}</p>

        <div className="mt-2">
          <button className="btn btn-primary" onClick={handleClick}>
            Change information
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};
