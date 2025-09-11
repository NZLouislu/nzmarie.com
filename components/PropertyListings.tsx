"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Heading,
  Text,
  Button,
  Flex,
  Badge,
} from "@radix-ui/themes";
import { MapPin, Bed, Bath, Car, Square } from "lucide-react";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: string;
  imageUrl: string;
  status: "For Sale" | "Under Offer" | "Sold";
  description: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Family Home in Wellington Central",
    price: "$850,000",
    location: "Wellington Central, Wellington",
    bedrooms: 4,
    bathrooms: 2,
    parking: 2,
    area: "180m²",
    imageUrl: "/img/header-img3.png",
    status: "For Sale",
    description:
      "Beautiful modern family home with stunning city views, updated kitchen, and spacious living areas.",
  },
  {
    id: 2,
    title: "Luxury Apartment with Harbor Views",
    price: "$1,200,000",
    location: "Oriental Bay, Wellington",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    area: "150m²",
    imageUrl: "/img/about-img.jpg",
    status: "For Sale",
    description:
      "Stunning waterfront apartment with panoramic harbor views, premium finishes, and modern amenities.",
  },
  {
    id: 3,
    title: "Charming Victorian Villa",
    price: "$950,000",
    location: "Mount Victoria, Wellington",
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    area: "200m²",
    imageUrl: "/img/about-img1.jpg",
    status: "Under Offer",
    description:
      "Beautifully restored Victorian villa with original features, large garden, and period charm.",
  },
  {
    id: 4,
    title: "Contemporary Townhouse",
    price: "$720,000",
    location: "Newtown, Wellington",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "120m²",
    imageUrl: "/img/Marie_large7.jpg",
    status: "For Sale",
    description:
      "Modern townhouse with open-plan living, private courtyard, and excellent transport links.",
  },
  {
    id: 5,
    title: "Executive Family Estate",
    price: "$1,450,000",
    location: "Karori, Wellington",
    bedrooms: 5,
    bathrooms: 3,
    parking: 3,
    area: "280m²",
    imageUrl: "/img/header-img.png",
    status: "For Sale",
    description:
      "Impressive executive home on large section with swimming pool, double garage, and mountain views.",
  },
  {
    id: 6,
    title: "Stylish City Apartment",
    price: "$650,000",
    location: "Te Aro, Wellington",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "90m²",
    imageUrl: "/img/header-img1.png",
    status: "Sold",
    description:
      "Stylish city apartment in prime location, perfect for professionals or investors.",
  },
];

export default function PropertyListings() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "For Sale":
        return "green";
      case "Under Offer":
        return "orange";
      case "Sold":
        return "gray";
      default:
        return "blue";
    }
  };

  return (
    <Box id="properties" py="9" style={{ backgroundColor: "var(--gray-1)" }}>
      <Container size="4" px="6">
        {/* Section Header */}
        <Flex direction="column" align="center" mb="8">
          <Heading
            as="h2"
            size="8"
            weight="bold"
            mb="4"
            style={{ textAlign: "center", color: "var(--gray-12)" }}
          >
            Featured Properties for Sale
          </Heading>
          <Text
            size="4"
            style={{
              textAlign: "center",
              color: "var(--gray-11)",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            Discover premium properties from modern apartments to traditional
            homes. Marie provides the finest property selections in the
            Wellington region, ensuring both investment value and living
            comfort.
          </Text>
        </Flex>

        {/* Properties Grid */}
        <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="6">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="property-card"
              style={{
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "white",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Property Image */}
              <Box
                className="property-image"
                style={{
                  height: "220px",
                  backgroundImage: `url(${property.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  backgroundColor: "var(--gray-3)", // fallback color
                  overflow: "hidden",
                }}
              >
                {/* Status Badge */}
                <Box
                  style={{ position: "absolute", top: "12px", right: "12px" }}
                >
                  <Badge
                    color={getStatusColor(property.status)}
                    size="2"
                    style={{ fontWeight: 600 }}
                  >
                    {property.status}
                  </Badge>
                </Box>

                {/* Price Tag */}
                <Box
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "6px",
                  }}
                >
                  <Text size="3" weight="bold">
                    {property.price}
                  </Text>
                </Box>
              </Box>

              {/* Property Details */}
              <Box p="4">
                <Heading
                  as="h3"
                  size="4"
                  weight="bold"
                  mb="2"
                  className="line-clamp-2"
                >
                  {property.title}
                </Heading>

                <Flex align="center" gap="2" mb="3">
                  <MapPin size={16} style={{ color: "var(--blue-9)" }} />
                  <Text size="2" style={{ color: "var(--gray-11)" }}>
                    {property.location}
                  </Text>
                </Flex>

                <Text
                  size="2"
                  mb="4"
                  style={{
                    color: "var(--gray-10)",
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {property.description}
                </Text>

                {/* Property Features */}
                <Flex wrap="wrap" gap="4" mb="4">
                  <Flex align="center" gap="1">
                    <Bed size={16} style={{ color: "var(--gray-9)" }} />
                    <Text size="2" style={{ color: "var(--gray-11)" }}>
                      {property.bedrooms} Bedrooms
                    </Text>
                  </Flex>

                  <Flex align="center" gap="1">
                    <Bath size={16} style={{ color: "var(--gray-9)" }} />
                    <Text size="2" style={{ color: "var(--gray-11)" }}>
                      {property.bathrooms} Bathrooms
                    </Text>
                  </Flex>

                  <Flex align="center" gap="1">
                    <Car size={16} style={{ color: "var(--gray-9)" }} />
                    <Text size="2" style={{ color: "var(--gray-11)" }}>
                      {property.parking} Parking
                    </Text>
                  </Flex>

                  <Flex align="center" gap="1">
                    <Square size={16} style={{ color: "var(--gray-9)" }} />
                    <Text size="2" style={{ color: "var(--gray-11)" }}>
                      {property.area}
                    </Text>
                  </Flex>
                </Flex>

                {/* Action Buttons */}
                <Flex gap="2">
                  <Button
                    variant="solid"
                    size="2"
                    style={{
                      backgroundColor: "var(--blue-9)",
                      color: "white",
                      flex: 1,
                      fontSize: "0.875rem",
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="2"
                    style={{
                      borderColor: "var(--blue-9)",
                      color: "var(--blue-9)",
                      flex: 1,
                      fontSize: "0.875rem",
                    }}
                  >
                    Book Viewing
                  </Button>
                </Flex>
              </Box>
            </Card>
          ))}
        </Grid>

        {/* View More Button */}
        <Flex justify="center" mt="8">
          <Button
            size="3"
            variant="outline"
            style={{
              borderColor: "var(--blue-9)",
              color: "var(--blue-9)",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "0 2rem",
            }}
          >
            View More Properties
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
