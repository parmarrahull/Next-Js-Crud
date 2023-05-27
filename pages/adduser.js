import { addUser } from "@/userSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          width: "100%",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
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
            onClick={handleAddUser}
            type="button"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
