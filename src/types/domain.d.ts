declare namespace HFU {
  const voivodeships = [
    "lower-silesian",
    "kuyavian-pomeranian",
    "lublin",
    "lubusz",
    "lodz",
    "lesser-poland",
    "masovian",
    "opole",
    "subcarpathian",
    "podklaskie",
    "pomeranian",
    "silesian",
    "holy-cross",
    "warmian-masurian",
    "greater-poland",
    "west-pomeranian",
  ] as const;
  const professions = [
    "doctor",
    "dentist",
    "nurse",
    "midwife",
    "physio",
    "paramedic",
  ] as const;
  const serviceTypes = ["phone", "visit", "on-site"] as const;

  export type ServiceType = typeof serviceTypes[number];
  export type Profession = typeof professions[number];
  export type Voivodehip = typeof voivodeships[number];

  interface Institution {
    id: string;
    voivodeship: Voivodehip;
    profession: Profession;
    specialty: string;
    serviceType: ServiceType;
    addressString: string;
    hours: string;
    city: string;
    contactData: string;
    validated: boolean;
    languageInfo: string;
    postCode: string;
    name: string;
    institutionName: string;
    email: string;
    createdAt: string;
    updatedAt?: string;
  }
}
