"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";
import { planholderSchema } from "@/app/components/ZodSchemas";
import { z } from "zod";

type PlanholderFormData = z.infer<typeof planholderSchema>;

const AddModal = () => {
  const [isVisible, setVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PlanholderFormData>({ resolver: zodResolver(planholderSchema) });

  const onSubmit = async (data: PlanholderFormData) => {
    const res = await fetch("/api/planholders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setVisibility(false);
    reset();
    window.location.reload();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-amber-100 hover:bg-orange-500"
        onClick={() => setVisibility(true)}
      >
        Add a Planholder <IoMdAddCircleOutline />
      </button>
      <dialog id="addPlanholder" className="modal" open={isVisible}>
        <div className="modal-box">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setVisibility(false)}
          >
            ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">
                Create a New Planholder
              </legend>
              <label className="label">First Name</label>
              <input
                {...register("firstName")}
                type="text"
                className="input"
                placeholder="Name"
                id="firstName"
              />
              {errors.firstName?.message && (
                <span className="text-red-500 text-sm">
                  {errors.firstName?.message}
                </span>
              )}
              <label className="label">Last Name</label>
              <input
                {...register("lastName")}
                type="text"
                className="input"
                placeholder="Name"
                id="lastName"
              />
              {errors.lastName?.message && (
                <span className="text-red-500 text-sm">
                  {errors.lastName?.message}
                </span>
              )}
              <label className="label">Middle Name</label>
              <input
                {...register("middleName")}
                type="text"
                className="input"
                placeholder="Name"
                id="middleName"
              />
              {errors.middleName?.message && (
                <span className="text-red-500 text-sm">
                  {errors.middleName?.message}
                </span>
              )}
              <button className="btn btn-accent" type="submit">
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
