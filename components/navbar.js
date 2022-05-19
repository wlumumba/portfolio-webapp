import Logo from "./logo"
import NextLink from "next/link"
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./theme-toggle"

// Link item
const LinkItem = ({ href, path, children }) => {
	const active = path === href
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")

	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				bg={active ? "#86C7F1" : undefined}
				color={active ? "#202023" : inactiveColor}
			>
				{children}
			</Link>
		</NextLink>
	)
}

// Create the navbar
const Navbar = props => {
	const { path } = props

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			style={{ backdropFilter: "blur(5px)" }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="md" letterSpacing={""}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem href="/works" path={path}>
						Featured Works
					</LinkItem>
					<LinkItem href="/resume" path={path}>
						Resume
					</LinkItem>
					<LinkItem href="https://github.com/wlumumba" path={path}>
						GitHub
					</LinkItem>
					<LinkItem href="https://www.linkedin.com/in/wlumumba/" path={path}>
						LinkedIn
					</LinkItem>

				</Stack>

				<Box flex={1} align="right">
					<ThemeToggleButton />
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>About</MenuItem>
								</NextLink>
								<NextLink href="/resume" passHref>
									<MenuItem as={Link}>Resume</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem as={Link}>Projects</MenuItem>
								</NextLink>
								<NextLink href="https://github.com/wlumumba" passHref>
									<MenuItem as={Link}>Github</MenuItem>
								</NextLink>
								<NextLink href="https://www.linkedin.com/in/wlumumba/" passHref>
									<MenuItem as={Link}>LinkedIn</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar
