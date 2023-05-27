import { deleteUser } from "@/userSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((value, ind) => {
              return (
                <tr>
                  <td scope="row">{ind}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>
                    <Link
                      href={`edituser/${value.id}`}
                      type="button"
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleRemoveUser(value.id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          ;
        </table>
      </div>
    </>
  );
};

export default UserList;
