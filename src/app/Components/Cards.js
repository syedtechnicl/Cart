"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../ReduxTk/slice";

const Cards = () => {
  const [card, setcard] = useState([]);
  const dispatch = useDispatch();

  const data1 = useSelector((item) => item.reducers);

  const CartBtn = (elem) => {
    dispatch(Add(elem));
  };

  const getcarddata = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const data2 = await data.json();
    setcard(data2);
  };

  useEffect(() => {
    getcarddata();
  }, []);

  // console.log(card);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {card.map((elem) => {
          return (
            <>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                m={3}
                padding={2}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={elem.image}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{elem.category}</Heading>

                    <Text py="2">{elem.title}</Text>
                    <Text py="2">$ {elem.price}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button
                      onClick={() => {
                        CartBtn(elem);
                      }}
                      variant="solid"
                      colorScheme="blue"
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Cards;
