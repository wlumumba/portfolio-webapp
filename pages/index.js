import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	useColorModeValue,
    Link
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from "../components/layouts/article"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

export default function Page() {
	return (
        <Layout>
		<Container>
			<Box
				borderRadius="lg"
				bg={useColorModeValue("teal", "whiteAlpha.200")}
				p={3}
				mb={6}
				align="center"
			>
				Hello! Thanks for visiting my portfolio.
			</Box>

			<Box>
				<Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
					<Image
						borderColor={useColorModeValue("blackAlpha.200", "whiteAlpha.800")}
						borderWidth={2}
						borderStyle="solid"
						maxWidth="300px"
						borderRadius="full"
						display="flex"
						src="/images/headshot1.jpeg"
						alt="Picture of me"
                        placeholder="blur"
                        loading="lazy"
					></Image>
				</Box>

				<Box flexGrow={3} mt={4}>
					<Heading as="h2" variant="page-title">
						Wycliff Lumumba
					</Heading>
					<p>Aspiring Software Engineer / Student at UTSA</p>
				</Box>
			</Box>
			<Section delay={1}>
				<Heading as="h3" variant="section-title">
					ABOUT
				</Heading>
				<Paragraph>
					Wycliff is currently a Senior undergraduate student at The University
					of Texas at San Antonio where he is pursuing a degree in Computer
					Science with a focus in Software Engineering. He has experience
					working with Java, Python, C, Unix/Linux, Javascript, React, HTML and
					AWS Cloud. He is also an active member of the UTSA ACM chapter. His
					main goal is to learn as much as possible in order to kickstart his
					career in software engineering.
				</Paragraph>

				<Box align="center" my={4}>
					<NextLink href="/resume">
					<Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
						Resume
					</Button>

                    </NextLink>
				</Box>
			</Section>
		</Container>
        </Layout>
	)
}
