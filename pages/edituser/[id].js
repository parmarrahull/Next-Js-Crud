import { editUser } from "@/userSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditUser = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const existingUser = users.filter((user) => user.id === query.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });
  let router = useRouter();

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: query.id,
        name: values.name,
        email: values.email,
      })
    );
  };

  function redirect() {
    router.push("/userlist");
  }

  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <br />
        <button
          onClick={() => {
            handleEditUser(), redirect();
          }}
          type="button"
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default EditUser;
