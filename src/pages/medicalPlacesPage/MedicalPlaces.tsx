import { Select, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import medicalPlacesJSON from "../../data/medData.json";

type MedicalPlace = typeof medicalPlacesJSON[0];

const getDistinctVoivodeships = (medicalPlacesJSON as MedicalPlace[]).reduce<
  string[]
>((acc, curr) => {
  if (acc.includes(curr["Województwo"])) {
    return acc;
  }

  return [...acc, curr["Województwo"]];
}, []);

console.log({ getDistinctVoivodeships });

export const MedicalPlacesPage = () => {
  const [vFilter, setVFilter] = useState("");

  const data = useMemo(() => {
    const data: MedicalPlace[] = medicalPlacesJSON;

    if (!vFilter) {
      return data;
    }

    return data.filter((d) => d["Województwo"] === vFilter);
  }, [vFilter]);

  return (
    <>
      <Select
        onChange={({ currentTarget: { value } }) => {
          console.log(value);
          setVFilter(value || "");
        }}
        placeholder="Select option"
      >
        {getDistinctVoivodeships.map((v) => (
          <option
            onChange={() => {
              console.log(v);
            }}
            key={v}
            value={v}
          >
            {v}
          </option>
        ))}
      </Select>

      {data.map((d) => {
        return (
          <>
            <Text>{d["Adres udzielania świadczeń"]}</Text>
          </>
        );
      })}
    </>
  );
};
