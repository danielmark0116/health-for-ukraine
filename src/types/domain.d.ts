declare namespace HFU {
  import { professions } from "../constants/professions";
  import { voivodeships } from "../constants/voivodeships";
  import { serviceTypes } from "../constants/serviceTypes";
  import { specialities } from "../constants/specialities";
  import { languages } from "../constants/languages";

  export type ServiceType = typeof serviceTypes[number];
  export type Profession = typeof professions[number];
  export type Speciality = typeof specialities[number];
  export type Voivodehip = typeof voivodeships[number];
  export type Language = typeof languages[number];

  interface Institution {
    id: string;
    voivodeship: Voivodehip;
    profession: Profession;
    speciality?: Speciality;
    serviceType: ServiceType[];
    addressString: string;
    hours: string;
    city: string;
    contactData: string;
    validated: boolean;
    languages: Language[];
    postCode: string;
    name: string;
    institutionName: string;
    email: string;
    createdAt: string;
    updatedAt?: string;
  }
}
