"use client";

import { NextResponse } from "next/server";
import { ChangeEvent, useState } from "react";

const AddModal = () => {
  const [formData, setFormData] = useState({
    LPANumber: "",
    firstName: "",
    lastName: "",
    middleName: "",
  });

  const handleSubmit = async () => {
    const res = await fetch(process.env.NEXT_URL + "/api/planholders", {
      method: "POST",
      headers: { "Content-Type": "application-json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) console.log(res.json());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => setVisibility(true)}>
        open modal
      </button>
      <dialog id="my_modal_3" className="modal" open={isVisible}>
        <div className="modal-box">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setVisibility(false)}
          >
            ✕
          </button>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">Create a New Planholder</legend>
            <label className="label">LPA Number</label>
            <input
              type="text"
              className="input"
              placeholder="LPAxxxxxx"
              key="LPANumber"
              onChange={handleChange}
            />
            <label className="label">First Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              key="firstName"
              onChange={handleChange}
            />
            <label className="label">Last Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              key="lastName"
              onChange={handleChange}
            />
            <label className="label">Middle Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              key="middleName"
              onChange={handleChange}
            />
            <button className="btn btn-accent" onClick={handleSubmit}>
              Submit
            </button>
          </fieldset>
        </div>
      </dialog>
    </>
  );
};

export default AddModal;
