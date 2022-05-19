import { Link } from "@chakra-ui/react"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	img {
		transition: 1000ms ease;
	}
	&:hover img {
		transform: rotate(360deg);
	}
`

const Logo = () => {
	const homeImg = `/images/home.png`

	return (
		<Link href="/">
			{/* <a> */}
				<LogoBox>
					<Image src={homeImg} width={20} height={20} alt="home icon"/>
					<Text
						color={useColorModeValue("gray.800", "whiteAlpha.900")}
						fontFamily="M PLUS Rounded 1c, sans-serif"
						fontWeight="bold"
						style={{ marginLeft: "10px", marginTop: "1px" }}
					>
                        Wycliff Lumumba
                    </Text>
				</LogoBox>
			{/* </a> */}
		</Link>
	)
}

export default Logo