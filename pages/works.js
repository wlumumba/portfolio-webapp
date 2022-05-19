import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-item"
import Section from "../components/section"
import thumbTraffic from "../public/images/traffic.jpeg"
import thumbSort from "../public/images/sorting.gif"
import thumbProviders from "../public/images/providers.jpeg"
import Layout from "../components/layouts/article"

const Works = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} mb={4} variant='section-title-2'>
					Works
				</Heading>

				<SimpleGrid columns={1} gap={6}>
					<Section delay={0.3}>
						<WorkGridItem
							id="stream-ez"
							title="StreamEZ Streaming Service"
							thumbnail={thumbProviders}
							link="https://github.com/wilbura009/streaming_service_sorter"
						>
							An API-driven, dynamic web application designed to help users find
							which streaming platforms host their favorite movies and shows.
						</WorkGridItem>
					</Section>
					<Section delay={0.3}>
						<WorkGridItem
							id="sorting"
							title="Algorithm Sorting Visualizer"
							thumbnail={thumbSort}
							link="https://github.com/wlumumba/Sorting-Visualizer"
						>
							Developed a Java application for visualizing common sorting
							algorithms in real-time via JavaFX
						</WorkGridItem>
					</Section>
					<Section delay={0.3}>
						<WorkGridItem
							id="traffic-sim"
							title="Traffic Simulator"
							thumbnail={thumbTraffic}
							link="https://github.com/wlumumba/Traffic-Simulator"
						>
							Visually demonstrated cars moving through road intersections using
							graph and stack data structures to reach their destination.
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Works
