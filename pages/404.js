import {
	Box,
	Button,
	Container,
	Divider,
	Heading,
	Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
import Layout from "../components/layouts/article"

const NotFound = () => {
	return (
		<Layout>
			<Container mt={15}>
				<Heading as="h1">Page Not Found</Heading>
				<Text>The page you seem to be looking for was not found.</Text>
				<Divider my={6} />

				<Box align="center">
					<NextLink href="/">
						<Button colorScheme="purple">Return to Home</Button>
					</NextLink>
				</Box>
			</Container>
		</Layout>
	)
}

export default NotFound
