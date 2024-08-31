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
    <Layout title="Timo">
      <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
              Timo <Badge>Jan 2023 - May 2023</Badge>
          </Title>
          <Link href="https://github.com/Fung-Sean/Timo" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
        <P>
        Timo is an iOS and Android application that integrates with Google Calendar to help users manage time effectively. It provides personalized reminders based on real-time travel data, weather, and user preferences, ensuring you’re always on time. Timo reduces stress, improves punctuality, and keeps your schedule secure.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android, iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, Dart, XML</span>
          </ListItem>
          <ListItem>
            <Meta>APIs & Technologies</Meta>
            <span>Google Calendar, Google Maps, OpenWeather</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/timo_website_01.png" alt="Inkdrop" />
        <WorkImage src="/images/works/timo_website_02.png" alt="Inkdrop" />
        <WorkImage src="/images/works/timo_website_03.png" alt="Inkdrop" />
        <WorkImage src="/images/works/timo_website_05.png" alt="Inkdrop" />
        <WorkImage src="/images/works/timo_website_06.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  