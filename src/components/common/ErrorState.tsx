import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  VStack,
} from "@chakra-ui/react";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <Box width="100%" py={10}>
      <VStack spacing={4}>
        <Alert
          status="error"
          borderRadius="lg"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          py={6}
        >
          <AlertIcon boxSize="30px" mr={0} />

          <AlertTitle mt={2}>
            Something went wrong!
          </AlertTitle>

          <AlertDescription mt={2}>
            {message}
          </AlertDescription>
        </Alert>

        <Button colorScheme="blue" onClick={onRetry}>
          Try Again
        </Button>
      </VStack>
    </Box>
  );
}

export default ErrorState;