import {
  Box,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

function LoadingGrid() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
      width="100%"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <GridItem key={index}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding={4}
            overflow="hidden"
          >
            <VStack align="stretch" spacing={4}>
              <Skeleton height="200px" borderRadius="md" />

              <SkeletonText
                noOfLines={2}
                spacing={3}
                skeletonHeight={3}
              />

              <Skeleton height="20px" width="40%" />

              <Skeleton height="35px" width="100%" />
            </VStack>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export default LoadingGrid;