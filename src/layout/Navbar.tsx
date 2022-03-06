import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher/ColorModeSwitcher";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher/LanguageSwitcher";
import LogoPic from "../assets/logo_400x400.png";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box maxH={"100px"} overflow="hidden">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        maxH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        alignItems={"center"}
      >
        <Flex
          flex={{ base: 1, md: 1, lg: "auto" }}
          display={{ base: "flex", md: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1, md: 1, lg: 2 }}
          justify={{ base: "center", md: "center", lg: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({
              base: "center",
              md: "center",
              lg: "left",
            })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Image height={14} mt={-1} src={LogoPic} />
          </Text>

          <Flex
            alignItems="center"
            display={{ base: "none", md: "none", lg: "flex" }}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 1, lg: "auto" }} justify={"flex-end"}>
          <LanguageSwitcher />
          <ColorModeSwitcher
            display={{ base: "none", md: "none", lg: "inline-flex" }}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          onClick={() => {
            onToggle();
          }}
        />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const { t } = useTranslation();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <RouterLink to={navItem.href || "/"}>
                <Box
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  backgroundColor={
                    navItem.href === "/contact" ? "green.400" : undefined
                  }
                  rounded="md"
                  color={navItem.href === "/contact" ? "white" : linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {t(navItem.label as any)}
                </Box>
              </RouterLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const { t } = useTranslation();

  return (
    <RouterLink to={href || "/"}>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {t(label as any)}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </RouterLink>
  );
};

const MobileNav = ({ onClick }: any) => {
  return (
    <Stack
      position="absolute"
      top={20}
      left={0}
      width="100%"
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      zIndex={1000}
      display={{ lg: "none" }}
    >
      <ColorModeSwitcher justifySelf="flex-end" />
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem onClick={onClick} key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({
  label,
  children,
  href,
  onClick,
}: NavItem & { onClick: () => void }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <RouterLink
          to={href || "/"}
          onClick={() => {
            onClick();
          }}
        >
          <>
            <Text
              fontWeight={600}
              color={useColorModeValue("gray.600", "gray.200")}
            >
              {t(label as any)}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </>
        </RouterLink>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <RouterLink to={child.href || "/"}>
                <Box py={2}>{t(child.label as any)}</Box>
              </RouterLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Inspiration",
  //   children: [
  //     {
  //       label: "Explore Design Work",
  //       subLabel: "Trending Design to inspire you",
  //       href: "#",
  //     },
  //     {
  //       label: "New & Noteworthy",
  //       subLabel: "Up-and-coming Designers",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Find Work",
  //   children: [
  //     {
  //       label: "Job Board",
  //       subLabel: "Find your dream design job",
  //       href: "#",
  //     },
  //     {
  //       label: "Freelance Projects",
  //       subLabel: "An exclusive list for contract work",
  //       href: "#",
  //     },
  //   ],
  // },
  {
    label: "navigation.forMedic",
    href: "/medic",
  },
  {
    label: "navigation.forRefugee",
    href: "/",
  },
  {
    label: "navigation.contact",
    href: "/contact",
  },
];
