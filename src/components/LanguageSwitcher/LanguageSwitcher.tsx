import { Stack, Badge } from "@chakra-ui/react";
import {
  Languages,
  useLanguageSwitcher,
} from "../../hooks/useLanguageSwitcher";

const items: { lang: Languages; emoji: string }[] = [
  {
    lang: "pl",
    emoji: "🇵🇱",
  },
  {
    lang: "ua",
    emoji: "🇺🇦",
  },
];

export const LanguageSwitcher = () => {
  const { changeLanguage, currentLanguage } = useLanguageSwitcher();

  const onClick = (lang: Languages) => {
    return () => {
      changeLanguage(lang);
    };
  };

  return (
    <Stack direction="row">
      {items.map(({ emoji, lang }) => {
        return (
          <Badge
            onClick={onClick(lang)}
            key={lang}
            p={2}
            fontSize={"1.2rem"}
            colorScheme={currentLanguage === lang ? "green" : "primary"}
          >
            {emoji}
          </Badge>
        );
      })}
    </Stack>
  );
};
