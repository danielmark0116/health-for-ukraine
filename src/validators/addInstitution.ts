import { z } from "zod";
import { languages } from "../constants/languages";
import { professions } from "../constants/professions";
import { serviceTypes } from "../constants/serviceTypes";
import { specialities } from "../constants/specialities";
import { voivodeships } from "../constants/voivodeships";

export const InstitutionSchema = z.object({
  name: z
    .string({ required_error: "validation.required" })
    .min(3, { message: "validation.tooShort" })
    .max(200, { message: "validation.tooLong" }),
  email: z
    .string({ required_error: "validation.required" })
    .email({ message: "validation.email" })
    .min(3, { message: "validation.tooShort" })
    .max(200, { message: "validation.tooLong" }),
  institutionName: z
    .string({ required_error: "validation.required" })
    .min(3, { message: "validation.tooShort" })
    .max(200, { message: "validation.tooLong" }),
  profession: z.enum(professions),
  speciality: z.enum(specialities).optional(),
  serviceType: z
    .enum(serviceTypes)
    .array()
    .min(1, { message: "validation.atLeastOne" })
    .default([]),
  addressString: z
    .string({ required_error: "validation.required" })
    .min(3, { message: "validation.tooShort" })
    .max(200, { message: "validation.tooLong" }),
  voivodeship: z.enum(voivodeships),
  city: z
    .string({ required_error: "validation.required" })
    .min(3, { message: "validation.tooShort" })
    .max(200, { message: "validation.tooLong" }),
  postCode: z
    .string({ required_error: "validation.required" })
    .min(5, { message: "validation.tooShort" })
    .max(6, { message: "validation.tooLong" }),
  contactData: z
    .string({ required_error: "validation.required" })
    .min(3, { message: "validation.tooShort" })
    .max(200, { message: "validation.tooLong" }),
  hours: z
    .string({ required_error: "validation.required" })
    .min(1, { message: "validation.tooShort" })
    .max(20, { message: "validation.tooLong" }),
  languages: z
    .enum(languages)
    .array()
    .min(1, { message: "validation.atLeastOne" })
    .default([]),
});

export type InstitutionForm = z.infer<typeof InstitutionSchema>;
