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
    <Layout title="Senator Markey: Equity in Federal Earmarks">
      <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
          Senator Markey: Equity in Federal Earmarks <Badge>Jan 2024 - May 2024</Badge>
          </Title>
          <Link href="https://lookerstudio.google.com/u/0/reporting/881a80ac-d734-40fe-9650-fb353ba7b146/page/p_ik3fogfpgd" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
        <P>
        Senator Ed Markey's Earmarks project is a data analysis initiative designed to assess the equity of federal funding distribution across Massachusetts. The project utilizes APIs, data cleaning techniques, and visualizations to analyze demographic representation in earmark allocations. It provides insights into potential biases and suggests strategies for more equitable distribution of resources.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web Dashboard</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Pandas, Selenium, BeautifulSoup, Google Looker Studio</span>
          </ListItem>
          <ListItem>
            <Meta>APIs & Technologies</Meta>
            <span>Google Maps API, Census Tract API, Tabula, Jupyter Notebooks, Trello</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/senatoredmarkey_website_01.png" alt="Inkdrop" />
        <WorkImage src="/images/works/senatoredmarkey_website_02.png" alt="Inkdrop" />
        <WorkImage src="/images/works/senatoredmarkey_website_03.png" alt="Inkdrop" />


        <Box mt={8} textAlign="center">
        <AspectRatio maxW="container.xl" ratio={1.3} mb={4}>
          <iframe
            src="/files/Senator_Ed_Markey_Report.pdf#page=1&zoom=100"
            width="100%"
            height="100%"
            style={{ borderRadius: '8px', border: '1px solid #ccc' }}
            title="PDF Preview"
          ></iframe>
        </AspectRatio>
        <P>
          For more detailed insights and findings, please take a look at the PDF document linked below.
        </P>
        <Link href="/files/Senator_Ed_Markey_Report.pdf" target="_blank" color="teal.500">
          Open PDF <ExternalLinkIcon mx="2px" />
        </Link>
        </Box>


      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  