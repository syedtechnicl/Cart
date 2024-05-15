"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../ReduxTk/slice";

const page = () => {
  // console.log("ss");

  const dispatch = useDispatch();
  const data = useSelector((cartitem) => cartitem.reducers);
  // console.log(data);

  const remove = (id) => {
    // alert("remove");
    dispatch(Remove(id));
  };

  return (
    <div>
      {/* <h1>haa</h1> */}
      {data.map((elem, ind) => {
        return (
          <>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
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
                  <Text py="2"> $ : {elem.price}</Text>
                </CardBody>

                <CardFooter>
                  <Button
                    variant="solid"
                    colorScheme="red"
                    onClick={() => {
                      remove(elem.id);
                    }}
                  >
                    Remove
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default page;
