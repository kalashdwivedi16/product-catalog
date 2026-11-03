
import { useState } from "react";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactPage() {
  const toast = useToast();

  // Store form data
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    toast({
      title: "Thank you for contacting us!",
      description: "Your message has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} mb={8} textAlign="center">
        <Heading size="2xl">Contact Us</Heading>

        <Text color="gray.500">
          Have a question or need help?
          Send us a message and we will be happy to assist you.
        </Text>
      </VStack>

      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={{ base: 4, md: 8 }}
        boxShadow="md"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={5} align="stretch">

            {/* Name Field */}
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>

              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(event) =>
                  handleChange("name", event.target.value)
                }
              />
            </FormControl>

            {/* Email Field */}
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>

              <Input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(event) =>
                  handleChange("email", event.target.value)
                }
              />
            </FormControl>

            {/* Subject Field */}
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>

              <Input
                type="text"
                placeholder="Enter message subject"
                value={formData.subject}
                onChange={(event) =>
                  handleChange("subject", event.target.value)
                }
              />
            </FormControl>

            {/* Message Field */}
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>

              <Textarea
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={(event) =>
                  handleChange("message", event.target.value)
                }
              />
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
            >
              Submit Message
            </Button>

          </VStack>
        </form>
      </Box>
    </Container>
  );
}

export default ContactPage;
