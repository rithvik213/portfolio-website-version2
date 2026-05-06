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
    <Layout title="Boston Public Library: Retrieval-Augmented Search">
      <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
          Boston Public Library: Retrieval-Augmented Search <Badge>Sep 2024 - Dec 2024</Badge>
          </Title>
          <Link href="https://github.com/rithvik213" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
        <P>
        A retrieval-augmented generation (RAG) pipeline built over 1.2M+ Boston Public Library records, enabling semantic search across 5M+ embedded text chunks with 2-5 second query latency. The system combines PostgreSQL with pgvector for vector similarity search, OpenAI GPT-4o-mini for LLM-based query expansion, and BM25 reranking to improve retrieval accuracy on historical natural language queries over keyword-based search. Chunking and embedding strategies were tuned for archival text — balancing chunk size and overlap to preserve context across paragraph boundaries.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web App (Streamlit)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, PostgreSQL, pgvector, OpenAI GPT-4o-mini, Streamlit</span>
          </ListItem>
          <ListItem>
            <Meta>Techniques</Meta>
            <span>Retrieval-Augmented Generation, Vector Embeddings, BM25 Reranking, LLM Query Expansion, Semantic Chunking</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
