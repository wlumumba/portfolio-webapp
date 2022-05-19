import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// Sets css like properties for html elements

const styles = {
	global: props => ({
		body: {
			bg: mode("#f5f5f5", "#202023")(props),
		},
	}),
}

const components = {
	Heading: {
		variants: {
			"section-title": {
				textDecoration: "underline",
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: "#525252",
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
			"section-title-2": {
				textDecoration: "underline",
				textUnderlineOffset: 6,
				textDecorationColor: "#525252",
				textDecorationThickness: 3,
			},
		},
	},
	Link: {
		baseStyle: props => ({
			color: mode("#3d7aed", "#ff63c3")(props),
			textUnderlineOffset: 3,
		}),
	},
}

const fonts = {
	heading: "'M PLUS Rounded 1c'",
}

const colors = {
	grassTeal: "#88ccca",
}

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
