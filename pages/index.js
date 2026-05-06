import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Stack,
  IconButton,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';
import VoxelDogLoader from '../components/voxel-dog-loader';
import thumbBpl from '../public/images/works/bpl_rag.png';
import thumbSnowflakeHarness from '../public/images/works/snowflake_harness.png';
import thumbTripPlanner from '../public/images/works/TripPlanner_eyecatch.png';
import thumbTimo from '../public/images/works/Timo-picture-website-1.png';
import { WorkGridItem } from '../components/grid-item'


//Lazy load VoxelDog, disable SSR
const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false, //Ensures it's only rendered on the client
  loading: () => <VoxelDogLoader /> //Show loader while it's loading
});

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home = () => {
  const [mounted, setMounted] = useState(false);

  //Ensure this code runs only on the client-side
  useEffect(() => {
    setMounted(true); //Set mounted to true once the component is mounted on the client
  }, []);

  //Return null or a simple loading skeleton until the client-side rendering happens
  if (!mounted) {
    return null; //Could also return a simple skeleton if you want
  }

  return (
    <Layout>
      <Container maxW="container.md">
        {mounted && <LazyVoxelDog />}
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Software Engineer at Oracle Cloud Infrastructure — Seattle, WA
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rithvik Nakirikanti
            </Heading>
            <Stack mt={4} spacing={4} direction='row' align='center'>
              <Link href="/files/resume.pdf" target="_blank">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" size='md' variant='solid'>
                  Resume / CV
                </Button>
              </Link>
              <Link href="https://github.com/rithvik213" target="_blank">
                <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='github'
                  fontSize='20px'
                  icon={<BsGithub />}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/rithvik-nakirikanti/" target="_blank">
                <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='linkedin'
                  fontSize='20px'
                  icon={<BsLinkedin />}
                />
              </Link>
            </Stack>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="140px"
              h="140px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/profile-modified.png"
                alt="Profile image"
                borderRadius="full"
                width="140"
                height="140"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            Hey, I'm Rithvik — a software engineer at Oracle Cloud Infrastructure in Seattle, working on the Oracle Database@Google control plane. I build backend services and infrastructure tooling in Java, Go, and Python, with a focus on distributed systems, Kubernetes, and developer experience. I graduated from Boston University in May 2025 with a BA and MS in Computer Science. Before Oracle I interned at Verizon and Avis Budget Group. I care about clean APIs, resilient systems, and shipping things that make other engineers' lives easier.{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/portfolios"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
          🚀 I&apos;m interested in...
          </Heading>
          <BioSection>
            <BioYear>Backend Engineering</BioYear>
            Java, Go, Python, Spring Boot, Dropwizard, OpenAPI
          </BioSection>
          <BioSection>
            <BioYear>Distributed Systems</BioYear>
            Distributed Control Planes, Resilient RESTful APIs, Zero-Trust Auth
          </BioSection>
          <BioSection>
            <BioYear>Cloud Infrastructure</BioYear>
            Kubernetes, Terraform, Helm, OpenShift, Argo CD
          </BioSection>
          <BioSection>
            <BioYear>Data &amp; Storage</BioYear>
            PostgreSQL, pgvector, Redis, Spring Batch
          </BioSection>
          <BioSection>
            <BioYear>Developer Tooling</BioYear>
            CI/CD Pipelines, GitOps, Internal Platforms
          </BioSection>
        </Section>

        <Section delay={0.3}>
  <Heading as="h3" variant="section-title">
    💡 I&apos;m most proud of...
  </Heading>

  <SimpleGrid columns={[1, 1, 2]} gap={6}>
  <Section delay={0.3}>
    <WorkGridItem
      id="bpl"
      title="BPL: RAG Search"
      thumbnail={thumbBpl}
    >
      Semantic search over 1.2M+ Boston Public Library records
    </WorkGridItem>
  </Section>

  <Section delay={0.3}>
    <WorkGridItem
      id="snowflake-harness"
      title="Automation Snowflake Harness"
      thumbnail={thumbSnowflakeHarness}
    >
      CI/CD-driven Snowflake automation built with State Street
    </WorkGridItem>
  </Section>

  <Section delay={0.3}>
    <WorkGridItem
      id="tripplanner"
      title="TripPlanner"
      thumbnail={thumbTripPlanner}
    >
      An All-in-One Trip Planner
    </WorkGridItem>
  </Section>

  <Section delay={0.3}>
    <WorkGridItem
      id="timo"
      title="Timo"
      thumbnail={thumbTimo}
    >
      An Ultimate Time Management Tool
    </WorkGridItem>
  </Section>
</SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
}

export default Home;
export { getServerSideProps } from '../components/chakra';
