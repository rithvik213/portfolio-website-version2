import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTripPlanner from '../public/images/works/TripPlanner_eyecatch.png'
import thumbTimo from '../public/images/works/Timo-picture-website-1.png'
import thumbSenatorEdMarkey from '../public/images/works/senatoredmarkey_eyecatch.png'
import thumbLinuxRamDisk from '../public/images/works/linux_ram_disk_eyecatch.png'

const Works = () => (
  <Layout title="Portfolio">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tripplanner" title="TripPlanner" thumbnail={thumbTripPlanner}>
          A personalized travel app with Google Calendar sync, real-time navigation, and location-based recommendations
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="timo" title="Timo" thumbnail={thumbTimo}>
          A time management app with Google Calendar integration, real-time travel tracking, and weather-based reminders.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="senatoredmarkey"
            title="Senator Markey: Equity in Federal Earmarks"
            thumbnail={thumbSenatorEdMarkey}
          >
            An analysis of funding equity in Senator Markey's earmark allocations across Massachusetts, using data-driven insights and visualizations.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="ramdisk" thumbnail={thumbLinuxRamDisk} title="RAMDISK Filesystem Kernel Module Implementation">
          A Linux kernel module for an in-memory filesystem with fast file and directory operations.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
