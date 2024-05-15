"use client";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cart = useSelector((dd) => dd.reducers.length);

  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold">
            Logo
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Button colorScheme="blue" variant="ghost">
              Home
            </Button>
            <Button colorScheme="blue" variant="ghost">
              Shop
            </Button>
            <Button colorScheme="blue" variant="ghost">
              About
            </Button>
            <Button colorScheme="blue" variant="ghost">
              Contact
            </Button>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Link href="../Cart">
            <Button
              // variant="ghost"
              colorScheme="blue"
              // leftIcon={<Icon as={FiShoppingCart} />}
            >
              Cart
            </Button>
          </Link>
          <Button
            // variant="ghost"
            colorScheme="blue"
            // leftIcon={<Icon as={FiShoppingCart} />}
          >
            Item {cart}
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Button colorScheme="black" variant="ghost">
              Home
            </Button>
            <Button colorScheme="blue" variant="ghost">
              Shop
            </Button>
            <Button colorScheme="blue" variant="ghost">
              About
            </Button>
            <Button colorScheme="blue" variant="ghost">
              Contact
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
