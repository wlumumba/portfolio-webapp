import NextLink from "next/link"
import Image from "next/image"
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { Global } from "@emotion/react"

export const WorkGridItem = ({ children, id, title, thumbnail, link }) => (
	<Box w="100%" align="center">
		<NextLink href={link}>
			<LinkBox cursor="pointer">
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
                    loading="lazy"
                    
				/>
				<LinkOverlay href={link}>
					<Text mt={2} fontSize={20}>
						{title}
					</Text>
				</LinkOverlay>
				<Text fontSize={14}>{children}</Text>
			</LinkBox>
		</NextLink>
	</Box>
)

export const GridItemStyle = () => (
	<Global styles={`.grid-item-thumbnail {border-radius: 6px;} `} />
)
