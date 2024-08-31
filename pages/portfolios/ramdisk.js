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
    <Layout title="RAMDISK Filesystem Kernel Module Implementation">
      <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
          RAMDISK Filesystem Kernel Module Implementation <Badge>Oct 2023 - Dec 2023</Badge>
          </Title>
          <Link href="https://github.com/rithvik213/linux_ram_disk" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
        <P>
        This project involves creating and testing a custom Linux kernel module for a RAM-based filesystem. The module supports efficient file operations in memory, including creation, deletion, reading, writing, and directory management. It utilizes a 2MB RAMDISK and manages memory through inodes and block allocation. An IOCTL interface connects user-space programs with the RAMDISK, enabling various file operations. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux Kernel Module</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C, Linux Kernel Development, IOCTL Interface</span>
          </ListItem>
          <ListItem>
            <Meta>APIs & Technologies</Meta>
            <span>RAMDISK, Inode Management, Block Allocation, IOCTL, GCC, Makefile, Kernel Module Utilities (insmod, rmmod)</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  