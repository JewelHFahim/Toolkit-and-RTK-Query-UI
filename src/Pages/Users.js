import React from "react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../features/api/productApi";
import { useDispatch } from "react-redux";

const Users = () => {
  const { data } = useGetUsersQuery();
  const  [deleteUser]  = useDeleteUserMutation();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    deleteUser(id);
  };

  return (
    <div>
      {data?.map((dt, i) => (
        <div>
          <p>
            {i + 1}. {dt.email}
            <button onClick={() => handleDelete(dt._id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
