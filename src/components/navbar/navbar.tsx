import { Flex, Text } from "../ui";

const NavBar = () => {
  return (
    <Flex full variant="bg-secondary" padding="p-2">
      <Text text="Home" href="/" link/>
      <Text text="Sandbox" href="/sandbox" link/>
    </Flex>
  );
};

export default NavBar;
