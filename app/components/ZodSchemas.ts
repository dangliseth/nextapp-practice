import z, { stringFormat } from "zod";

export const planholderSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  middleName: z.string().optional(),
});

export const paymentDetailsSchema = z.object({
  LPANumber: z.string().min(1, "Required"),
  ORAmount: z.string().min(1, "Amount required"),
  planType: z.string().min(1, "Plan type required"),
  effectivityDate: z.string().min(1, "Required"),
});
