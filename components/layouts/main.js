import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rithvik's homepage" />
        <meta name="author" content="Rithvik Nakirikanti" />
        <link rel="apple-touch-icon" href="coding-icon-dark-icon.png" />
        <link rel="shortcut icon" href="/coding-icon-dark.png" type="image/png" />
        <meta name="twitter:title" content="Rithvik Nakirikanti" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rithvik213" />
        <meta name="twitter:creator" content="@rithvik213" />
        <meta name="twitter:image" content="https://www.rntech.org/coding-icon-dark.png" />
        <meta property="og:site_name" content="Rithvik Nakirikanti" />
        <meta name="og:title" content="Rithvik Nakirikanti" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rntech.org/coding-icon-dark.png" />
        <title>Rithvik Nakirikanti - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
