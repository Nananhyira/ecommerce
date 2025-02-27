import { useSelector } from "react-redux";
import CartProduct from "../Components/CartProduct";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);

  // Dark mode Variables
  const bg = useColorModeValue("", "gray.800");
  const text = useColorModeValue("black", "gray.500");

  return (
    <Box mt={14} bg={bg}>
      {cart.length === 0 ? (
        <Center minH="80vh">
          <Text color={text} fontSize="2xl">
            Cart is Empty
          </Text>
        </Center>
      ) : (
        cart.map((product) => {
          return <CartProduct key={product.id} {...product} />;
        })
      )}
      <Divider bg={useColorModeValue("gray.900", "gray.300")} py="0.4px" />
      <HStack fontSize={{ base: "2xl", md: "4xl" }} color={text}>
        <Text>Total :</Text>
        <Text as="span">${total.toFixed(2)}</Text>
      </HStack>
        <Link to={"/checkout"}>
         <Button>check out</Button>
        </Link>
     
    </Box>
  );
};

export default Cart;
