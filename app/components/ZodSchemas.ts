import z from "zod";

export const planholderSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  middleName: z.string().optional(),
});

export const paymentDetailsSchema = z.object({
    LPANumber: z.string().min(1, "Required"),
    ORNumber: z.number().min(1, "Required"),
    ORDate: z.date(),
    ORAmount: z.number()
})