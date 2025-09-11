"use client";

import React from "react";
import Link from "next/link";
import { Box, Flex, Heading, Text, Button, Container } from "@radix-ui/themes";

export default function Hero() {
  return (
    <Box id="home" position="relative">
      <Container
        size="4"
        position="relative"
        px="6"
        py={{ initial: "9", md: "12" }}
      >
        <Flex
          direction="column"
          align="center"
          gap="6"
          style={{
            textAlign: "center",
            minHeight: "80vh",
            justifyContent: "center",
          }}
        >
          <Box width="100%" maxWidth="900px">
            {/* Professional badge */}
            <Flex
              align="center"
              justify="center"
              gap="2"
              px="4"
              py="2"
              mb="6"
              style={{
                borderRadius: "9999px",
                backgroundColor: "var(--blue-3)",
                color: "var(--blue-11)",
                fontSize: "0.9rem",
                fontWeight: 500,
                border: "1px solid var(--blue-6)",
              }}
            >
              Licensed Real Estate Consultant • Southern Star Realty
            </Flex>

            {/* Main heading */}
            <Heading
              as="h1"
              size={{ initial: "8", md: "9" }}
              weight="bold"
              mb="6"
              className="tracking-tight text-pretty"
              style={{ lineHeight: 1.2 }}
            >
              Hi, I&apos;m{" "}
              <Text
                style={{
                  background:
                    "linear-gradient(135deg, var(--blue-9), var(--blue-11))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Marie Nian
              </Text>
              <br />
              Your Trusted Real Estate Guide
            </Heading>

            {/* Subtitle */}
            <Text
              as="p"
              size="4"
              mb="8"
              style={{
                lineHeight: 1.6,
                color: "var(--gray-11)",
                maxWidth: "700px",
                margin: "0 auto 2rem auto",
              }}
            >
              Looking to sell or buy your dream home? I&apos;m here to help you
              achieve your property goals. With my background in finance, sharp
              market insights, and a personalized approach, I&apos;ll make your
              real estate journey smooth and stress-free.
            </Text>

            {/* Call to action buttons */}
            <Flex justify="center" wrap="wrap" gap="4" mb="8">
              <Button
                asChild
                size="4"
                style={{
                  backgroundColor: "var(--blue-9)",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "0 2rem",
                }}
              >
                <Link href="#about">About Me</Link>
              </Button>

              <Button
                asChild
                size="4"
                variant="outline"
                style={{
                  borderColor: "var(--blue-9)",
                  color: "var(--blue-9)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "0 2rem",
                }}
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </Flex>

            {/* Key features */}
            <Flex
              justify="center"
              wrap="wrap"
              gap="6"
              style={{ marginTop: "3rem" }}
            >
              <Flex
                direction="column"
                align="center"
                gap="2"
                style={{ maxWidth: "200px" }}
              >
                <Text
                  size="2"
                  weight="bold"
                  style={{ color: "var(--blue-11)" }}
                >
                  10+ Years Experience
                </Text>
                <Text
                  size="1"
                  style={{ color: "var(--gray-10)", textAlign: "center" }}
                >
                  Finance & Real Estate
                </Text>
              </Flex>

              <Flex
                direction="column"
                align="center"
                gap="2"
                style={{ maxWidth: "200px" }}
              >
                <Text
                  size="2"
                  weight="bold"
                  style={{ color: "var(--blue-11)" }}
                >
                  Licensed Consultant
                </Text>
                <Text
                  size="1"
                  style={{ color: "var(--gray-10)", textAlign: "center" }}
                >
                  Southern Star Realty
                </Text>
              </Flex>

              <Flex
                direction="column"
                align="center"
                gap="2"
                style={{ maxWidth: "200px" }}
              >
                <Text
                  size="2"
                  weight="bold"
                  style={{ color: "var(--blue-11)" }}
                >
                  Wellington Based
                </Text>
                <Text
                  size="1"
                  style={{ color: "var(--gray-10)", textAlign: "center" }}
                >
                  Local Market Expert
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
