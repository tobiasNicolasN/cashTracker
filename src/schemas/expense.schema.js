import { z } from "zod";

export const createExpenseSchema = z.object({
  amount: z.number({
    required_error: "Amount is required",
  }),
  category: z.string({
    required_error: "Category is required",
  }),
  detail: z
    .string({
      required_error: "Detail must be a string",
    })
    .optional(),
  date: z.string().datetime().optional(),
});
