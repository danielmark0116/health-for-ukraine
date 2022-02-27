import MainMedicHero from "./components/MainMedicHero/MainMedicHero";
import { Text } from "@chakra-ui/react";

export const MainMedicPage = () => {
  return (
    <>
      <MainMedicHero />
      <br />
      <Text fontSize="sm">
        <strong>Health For Ukraine</strong> ma na celu skoordynowanie działań w zakresie pomocy
        medycznej uchodźcom udzielanej w Polsce poza systemem opieki zdrowotnej.
        <br />
        <br />
        Udostępnione zostaną dane specjalistów, którzy oferują bezpłatną
        ambulatoryjną pomoc medyczną w ramach swoich praktyk.
      </Text>
    </>
  );
};
