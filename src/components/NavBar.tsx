import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaDumbbell } from "react-icons/fa6";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <FaDumbbell size="34" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
