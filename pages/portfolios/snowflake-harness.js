import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Stack,
    Button
  } from '@chakra-ui/react'
  import { Title, Meta } from '../../components/portfolio'
  import P from '../../components/paragraph'
  import { BsGithub } from 'react-icons/bs'
  import Layout from '../../components/layouts/article'

  const Work = () => (
    <Layout title="Automation Snowflake Harness">
      <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
          Automation Snowflake Harness <Badge>Sep 2024 - Dec 2024</Badge>
          </Title>
          <Link href="https://github.com/EC528-Fall-2024/automation-snowflake-harness" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
        <P>
        A capstone project (BU EC528, in collaboration with State Street) that automates the deployment and management of Snowflake resources through CI/CD pipelines. The system orchestrates creation, modification, and deletion of databases, schemas, users, roles, and warehouses using Liquibase for migration version control and Harness for CI/CD orchestration. We implemented role-based access control to safeguard credentials, built automated warehouse scaling scripts, and packaged the workflow into a reusable CLI tool ("Snowpilot") to broaden adoption beyond the original team. Cortex/ML integration was added to support advanced analytics on top of the managed Snowflake environment.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Cloud Data Warehouse Automation</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Snowflake, Liquibase, Harness, Python, Docker, Git</span>
          </ListItem>
          <ListItem>
            <Meta>Capabilities</Meta>
            <span>CI/CD pipelines with rollback, RBAC, automated warehouse scaling, Snowflake Cortex/ML, Snowpilot CLI</span>
          </ListItem>
          <ListItem>
            <Meta>Team</Meta>
            <span>BU EC528 capstone — 5-person team mentored by State Street engineers</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
