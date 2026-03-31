"use client";

import { useState } from "react";
import { paymentDetailsSchema } from "./ZodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { FaMoneyBillWave } from "react-icons/fa6";
import prisma from "../prisma";

type PaymentDetailsFormData = z.infer<typeof paymentDetailsSchema>;
const PaymentModal = () => {
  const [isVisible, setVisibility] = useState(false);

  // const planholders = await fetch("/api/paymentdetails", {
  //   method: "GET",
  // });
  // const planholdersOptions = planholders;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PaymentDetailsFormData>({
    resolver: zodResolver(paymentDetailsSchema),
  });

  const onSubmit = async (data: PaymentDetailsFormData) => {
    const res = await fetch("/api/paymentdetails", {
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
      <button
        className="btn bg-amber-100 hover:bg-orange-500"
        onClick={() => setVisibility(true)}
      >
        New Payment <FaMoneyBillWave />
      </button>
      <dialog id="addPayment" className="modal" open={isVisible}>
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
              <legend className="fieldset-legend">New Payment</legend>
              <label className="label">LPA Number</label>
              <input
                type="text"
                placeholder="LPAxxxxxxxx"
                {...register("LPANumber")}
                className="input"
                id="LPANumber"
              />
              {errors.LPANumber?.message && (
                <span className="text-red-500 text-sm">
                  {errors.LPANumber?.message}
                </span>
              )}
              <label className="label">OR Amount</label>
              <input
                {...register("ORAmount")}
                type="text"
                className="input"
                placeholder="Amount"
                id="ORAmount"
              />
              {errors.ORAmount?.message && (
                <span className="text-red-500 text-sm">
                  {errors.ORAmount?.message}
                </span>
              )}
              <label className="label">Effectivity Date</label>
              <input
                {...register("effectivityDate")}
                type="date"
                className="input"
                placeholder="Name"
                id="effectivityDate"
              />
              {errors.effectivityDate?.message && (
                <span className="text-red-500 text-sm">
                  {errors.effectivityDate?.message}
                </span>
              )}
              <label className="label">Plan Type</label>
              <input
                {...register("planType")}
                type="text"
                className="input"
                placeholder="Plan"
                id="planType"
              />
              {errors.planType?.message && (
                <span className="text-red-500 text-sm">
                  {errors.planType?.message}
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

export default PaymentModal;
