import React, { useState } from "react";
import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
  Input,
  Select,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import FullScreenSection from "./FullScreenSection";

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(null);

  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    occasion: Yup.string().required("Occasion is required"),
    guests: Yup.number()
      .typeError("Guests must be a number")
      .required("Guests is required")
      .min(2, "Guests must be at least 2")
      .max(10, "Guests cannot exceed 10"),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      occasion: "",
      guests: 2,
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setFormData(values);
        onOpen();
      }, 1000);
    },
  });

  const closeAlert = () => {
    onClose();
    setFormData(null);
    formik.resetForm();
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#495F58"
      id="reservation-section"
    >
      <VStack spacing={-3}>
        <Text as={"b"} fontSize={"5xl"} color={"#ECEFED"} fontFamily={"Markazi"} marginBottom={50}>
          Reservation
        </Text>
        <Text as={"b"} fontSize={"4xl"} color={"#F4CD16"} fontFamily={"Markazi"}>
          Little Lemon
        </Text>
        <Text as={"b"} fontSize={"2xl"} color={"#ECEFED"} fontFamily={"Markazi"}>
          Chicago
        </Text>
      </VStack>
      <VStack spacing={7}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.touched.date && formik.errors.date}>
            <FormLabel htmlFor="date">Date:</FormLabel>
            <Input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.time && formik.errors.time}>
            <FormLabel htmlFor="time">Time:</FormLabel>
            <Select
              id="time"
              name="time"
              placeholder="Select your option"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
            >
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </Select>
            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
            <FormLabel htmlFor="occasion">Occasion:</FormLabel>
            <Select
              id="occasion"
              name="occasion"
              placeholder="Select your option"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
            >
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
            </Select>
            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
            <FormLabel htmlFor="guests">Guests:</FormLabel>
            <NumberInput
              id="guests"
              name="guests"
              max={10}
              min={2}
              onChange={(_, value) => formik.setFieldValue("guests", value)}
              onBlur={formik.handleBlur}
              value={formik.values.guests}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
          </FormControl>
          <Button marginTop="10" type="submit" isLoading={isLoading} background={"#F4CD16"} color={"black"}>
            Submit
          </Button>
        </form>
        <Modal isOpen={isOpen} onClose={closeAlert}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Reservation Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Date: {formData?.date}</p>
              <p>Time: {formData?.time}</p>
              <p>Occasion: {formData?.occasion}</p>
              <p>Guests: {formData?.guests}</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={closeAlert}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </FullScreenSection>
  );
};

export default Reservation;
