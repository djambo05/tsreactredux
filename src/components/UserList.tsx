import React, { FC, useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creators/user";

const UserList: FC = () => {
  const { users, loading, error } = useTypeSelector((state) => state.user);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.firstname}</div>
      ))}
    </div>
  );
};

export default UserList;
