"use client";

import { useState } from "react";

const AddModal = () => {
  const [isVisible, setVisibility] = useState(false);
  const handleSubmit = async () => {
    const req = await fetch(process.env.NEXT_URL + "/api/planholders", {
      method: "POST",
    });

    console.log(req.json());
  };
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
          <form action={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">
                Create a New Planholder
              </legend>
              <label className="label">LPA Number</label>
              <input type="text" className="input" placeholder="LPAxxxxxx" />
              <label className="label">First Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Last Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Middle Name</label>
              <input type="text" className="input" placeholder="Name" />
              <button type="submit" className="btn btn-accent">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddModal;
