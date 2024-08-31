import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Stack,
  Button,
  Box,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'
import { BsGithub } from 'react-icons/bs'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TripPlanner">
    <Container maxW="container.xl">
    <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
            TripPlanner <Badge>Jan 2024 - Present</Badge>
        </Title>
        <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
          Private Repo
        </Button>
    </Stack>
      <P>
      TripPlanner is an Android application developed using Kotlin, designed to provide personalized and seamless travel planning experiences. The app integrates with modern APIs and services to offer users a comprehensive travel solution directly on their mobile devices.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin</span>
        </ListItem>
        <ListItem>
          <Meta>APIs & Technologies</Meta>
          <span>TripAdvisor, OpenAI, Serp, Google Calendar, Google Maps, Kotlin Coroutines</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tripplanner_website_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/tripplanner_website_02.png" alt="Inkdrop" />
      <WorkImage src="/images/works/tripplanner_website_03.png" alt="Inkdrop" />
      <WorkImage src="/images/works/tripplanner_website_04.png" alt="Inkdrop" />
      <WorkImage src="/images/works/tripplanner_website_05.png" alt="Inkdrop" />
      <WorkImage src="/images/works/tripplanner_website_06.png" alt="Inkdrop" />
      <WorkImage src="/images/works/tripplanner_website_07.png" alt="Inkdrop" />

      <Box borderRadius="lg" w="full" overflow="hidden" my={4}>
      <AspectRatio ratio={1.7}>
        <video
          src="/videos/TripPlanner_Demo.mov"
          title="TripPlanner Demo"
          controls
          style={{ width: '100%', height: '100%' }} // Ensures full size within the aspect ratio box
        />
      </AspectRatio>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
