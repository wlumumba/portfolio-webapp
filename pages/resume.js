import { Box, Container, Heading } from "@chakra-ui/react"
import NextLink from "next/link"
import Layout from "../components/layouts/article"
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
// import dynamic from 'next/dynamic';

// const FileViewer = dynamic(() => import('react-file-viewer'), {
//     ssr: false
// });

const Resume = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} my={4} variant="section-title-2">
					Resume
				</Heading>

				{/* <FileViewer fileType="pdf" filePath="/static/Wycliff_Lumumba_Resume.pdf" /> */}

				<Box mt={6} display={{ base: "none", sm: "flex" }}>
					<NextLink href="/static/Wycliff_Lumumba_Resume.pdf">
						<a target="_blank" rel="noopener noreferrer">
							<Document
								onLoadError={console.error}
								file="/static/Wycliff_Lumumba_Resume.pdf"
							>
								<Page pageNumber={1} scale="1" />
							</Document>
						</a>
					</NextLink>
				</Box>

				{/* Manual scaling for smaller screens */}
				<Box mt={6} display={{ base: "flex", sm: "none" }}>
					<NextLink href="/static/Wycliff_Lumumba_Resume.pdf">
						<a target="_blank" rel="noopener noreferrer">
							<Document
								onLoadError={console.error}
								file="/static/Wycliff_Lumumba_Resume.pdf"
							>
								<Page pageNumber={1} scale="0.5" />
							</Document>
						</a>
					</NextLink>
				</Box>
			</Container>
		</Layout>
	)
}

export default Resume
