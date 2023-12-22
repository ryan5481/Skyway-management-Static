import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom';
import {
    Box, Button, Heading, useColorModeValue, Grid, Image, Stack, Badge, Divider, ButtonGroup, Card, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, CardBody, CardFooter, AspectRatio, Flex, Center,
    StackDivider, Text, VStack, List, ListItem, SimpleGrid, Spinner
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



const AllJobs = ({ displayAll }) => {
    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalJobData, setModalJobData] = useState({})
    const [reqQualifications, setReqQualifications] = useState([])
    const [reqSkills, setReqSkills] = useState([])
    const [reqResponsiblities, setReqResponsiblities] = useState([])
    // const [data, setData] = useState([])
    const navigate = useNavigate()
    const baseUrl = process.env.REACT_APP_BASE_URL


    const selectedCategory = location.state?.selectedCategory;

    // const fetchJobsList = async () => {
    //     try {
    //         if(selectedCategory){
    //             const res = await axios.get(`${baseUrl}/jobslist?category=${selectedCategory}`);
    //             let newData = res.data.jobsList
    //         setData(newData.reverse());


    //         }else{
    //             const res = await axios.get(`${baseUrl}/jobslist`);
    //             let newData = res.data.jobsList
    //             setData(newData.reverse());
    //         }


    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchJobsList();
    // }, [])

    const data = [
        {
            "_id": "64fee2afb18985ff229702ee",
            "landmark": "radiantInfoTech",
            "jobCode": "25775757",
            "jobImage": "1.jpeg",
            "jobTitle": "Doloremque dicta bla",
            "salary": 64,
            "category": "Cruise",
            "location": "Eius voluptate amet",
            "isFullTime": false,
            "workHours": "Ullamco quia rerum c",
            "daysOff": "15",
            "accomodation": false,
            "fooding": true,
            "shortDescription": "Ea consectetur aliqu",
            "reqQualification": "Ipsum iure nesciunt",
            "responsiblities": "Eum quia doloremque ",
            "skillsRequired": "Fugiat optio cum a",
            "createdAt": "2023-09-11T09:49:35.760Z",
            "updatedAt": "2023-09-11T09:49:35.760Z",
            "__v": 0
        },
        {
            "_id": "64fee2c0b18985ff229702f8",
            "landmark": "radiantInfoTech",
            "jobCode": "25792355",
            "jobImage": "2.jpeg",
            "jobTitle": "Aliquip ipsum neque ",
            "salary": 74,
            "category": "Security",
            "location": "Dolorum voluptatum e",
            "isFullTime": false,
            "workHours": "Nemo explicabo Aspe",
            "daysOff": "8",
            "accomodation": false,
            "fooding": false,
            "shortDescription": "Saepe mollitia possi",
            "reqQualification": "Natus aliquid volupt",
            "responsiblities": "Corrupti error quos",
            "skillsRequired": "Ea distinctio Sit r",
            "createdAt": "2023-09-11T09:49:52.358Z",
            "updatedAt": "2023-09-11T09:49:52.358Z",
            "__v": 0
        },
        {
            "_id": "64fee2cfb18985ff22970302",
            "landmark": "radiantInfoTech",
            "jobCode": "25807022",
            "jobImage": "3.jpeg",
            "jobTitle": "Facere iusto quis au",
            "salary": 15,
            "category": "Office",
            "location": "Iste est officia min",
            "isFullTime": false,
            "workHours": "Sint corrupti et d",
            "daysOff": "3",
            "accomodation": false,
            "fooding": true,
            "shortDescription": "Impedit aliquid dol",
            "reqQualification": "Rerum et ex ducimus",
            "responsiblities": "Lorem impedit volup",
            "skillsRequired": "Voluptas quis accusa",
            "createdAt": "2023-09-11T09:50:07.025Z",
            "updatedAt": "2023-09-11T09:50:07.025Z",
            "__v": 0
        },
        {
            "_id": "64fee2ddb18985ff2297030c",
            "landmark": "radiantInfoTech",
            "jobCode": "25821206",
            "jobImage": "3.jpeg",
            "jobTitle": "Fugit repellendus ",
            "salary": 41,
            "category": "Minery",
            "location": "Nihil cum voluptas q",
            "isFullTime": false,
            "workHours": "Qui proident dolore",
            "daysOff": "14",
            "accomodation": false,
            "fooding": false,
            "shortDescription": "Distinctio Hic dolo",
            "reqQualification": "Praesentium et volup",
            "responsiblities": "Ipsa culpa et repel",
            "skillsRequired": "Aspernatur inventore",
            "createdAt": "2023-09-11T09:50:21.209Z",
            "updatedAt": "2023-09-11T09:50:21.209Z",
            "__v": 0
        },
        {
            "_id": "64fee2f4b18985ff22970316",
            "landmark": "radiantInfoTech",
            "jobCode": "25844074",
            "jobImage": "4.jpeg",
            "jobTitle": "Distinctio Magni ve",
            "salary": 47,
            "category": "Minery",
            "location": "Praesentium laboris ",
            "isFullTime": false,
            "workHours": "In ullam adipisci ra",
            "daysOff": "21",
            "accomodation": false,
            "fooding": true,
            "shortDescription": "Amet rerum voluptat",
            "reqQualification": "Sunt quo fugit prov",
            "responsiblities": "Quidem ipsam dolorem",
            "skillsRequired": "Blanditiis exercitat",
            "createdAt": "2023-09-11T09:50:44.078Z",
            "updatedAt": "2023-09-11T09:50:44.078Z",
            "__v": 0
        },
        {
            "_id": "64fee313b18985ff22970320",
            "landmark": "radiantInfoTech",
            "jobCode": "25875961",
            "jobImage": "5.jpeg",
            "jobTitle": "Cum officia minima u",
            "salary": 27,
            "category": "Aviation",
            "location": "Excepteur repellendu",
            "isFullTime": false,
            "workHours": "Voluptatem fugiat a",
            "daysOff": "28",
            "accomodation": false,
            "fooding": true,
            "shortDescription": "Quam voluptatem vero",
            "reqQualification": "Omnis et deleniti ve",
            "responsiblities": "Tempor quia rerum in",
            "skillsRequired": "Aut animi rerum ten",
            "createdAt": "2023-09-11T09:51:15.966Z",
            "updatedAt": "2023-09-11T09:51:15.966Z",
            "__v": 0
        },
        {
            "_id": "64fee328b18985ff2297032a",
            "landmark": "radiantInfoTech",
            "jobCode": "25896543",
            "jobImage": "6.jpeg",
            "jobTitle": "Quis voluptatem cupi",
            "salary": 96,
            "category": "Technician",
            "location": "At expedita occaecat",
            "isFullTime": false,
            "workHours": "Ipsum aliqua Dolore",
            "daysOff": "21",
            "accomodation": false,
            "fooding": false,
            "shortDescription": "Veritatis in adipisi",
            "reqQualification": "At et repudiandae vo",
            "responsiblities": "Ea deserunt dolor en",
            "skillsRequired": "Eaque sunt voluptas",
            "createdAt": "2023-09-11T09:51:36.546Z",
            "updatedAt": "2023-09-11T09:51:36.546Z",
            "__v": 0
        },
        {
            "_id": "64feec07b18985ff229704d6",
            "landmark": "radiantInfoTech",
            "jobCode": "28167871",
            "jobImage": "7.jpeg",
            "jobTitle": "Quis facilis aliquam",
            "salary": 22,
            "category": "Aviation",
            "location": "Voluptatum dicta min",
            "isFullTime": false,
            "workHours": "Ut veniam libero la",
            "daysOff": "22",
            "accomodation": false,
            "fooding": false,
            "shortDescription": "Perspiciatis volupt",
            "reqQualification": "Similique a possimus",
            "responsiblities": "Excepteur in autem l",
            "skillsRequired": "Vitae impedit place",
            "createdAt": "2023-09-11T10:29:27.874Z",
            "updatedAt": "2023-09-11T10:29:27.874Z",
            "__v": 0
        },
        {
            "_id": "64feec18b18985ff229704d9",
            "landmark": "radiantInfoTech",
            "jobCode": "28184684",
            "jobImage": "8.jpeg",
            "jobTitle": "Labore minima repreh",
            "salary": 62,
            "category": "Construction",
            "location": "Debitis dolores ut d",
            "isFullTime": false,
            "workHours": "Aliquam sed culpa e",
            "daysOff": "3",
            "accomodation": false,
            "fooding": false,
            "shortDescription": "Enim omnis sapiente ",
            "reqQualification": "Sed et consequatur ",
            "responsiblities": "In expedita cum quis",
            "skillsRequired": "Ut accusamus et unde",
            "createdAt": "2023-09-11T10:29:44.686Z",
            "updatedAt": "2023-09-11T10:29:44.686Z",
            "__v": 0
        },
        {
            "_id": "64feec2bb18985ff229704dc",
            "landmark": "radiantInfoTech",
            "jobCode": "28203200",
            "jobImage": "9.jpeg",
            "jobTitle": "Minima id dolor quia",
            "salary": 53,
            "category": "Refinery",
            "location": "Ullam natus consequa",
            "isFullTime": false,
            "workHours": "Sed porro id iste do",
            "daysOff": "18",
            "accomodation": false,
            "fooding": true,
            "shortDescription": "Esse quis ratione d",
            "reqQualification": "Beatae voluptatem ut",
            "responsiblities": "Qui culpa rerum dol",
            "skillsRequired": "Reprehenderit aut n",
            "createdAt": "2023-09-11T10:30:03.202Z",
            "updatedAt": "2023-09-11T10:30:03.202Z",
            "__v": 0
        },
        {
            "_id": "6512b08828de435c6bffcaa5",
            "landmark": "radiantInfoTech",
            "jobCode": "23656159",
            "jobImage": "10.jpeg",
            "jobTitle": "Saepe quisquam venia",
            "salary": 98,
            "category": "Perspiciatis culpa",
            "location": "Cillum totam possimu",
            "isFullTime": false,
            "workHours": "Ut debitis possimus",
            "daysOff": "17",
            "accomodation": false,
            "fooding": false,
            "shortDescription": "Ducimus veniam at ",
            "reqQualification": "Quia cumque maioresSky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top.",
            "responsiblities": "Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top.",
            "skillsRequired": "Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top.",
            "createdAt": "2023-09-26T10:20:56.162Z",
            "updatedAt": "2023-09-26T10:20:56.162Z",
            "__v": 0
        },
        {
            "_id": "6512df25758fcc3d78de45f4",
            "landmark": "radiantInfoTech",
            "jobCode": "35589328",
            "jobImage": "11.jpeg",
            "jobTitle": "Dolores vitae omnis ",
            "salary": 270000,
            "category": "Consequat Est proi",
            "location": "Ad est cupiditate q",
            "isFullTime": false,
            "workHours": "Beatae facilis verit",
            "daysOff": "27",
            "accomodation": false,
            "fooding": true,
            "shortDescription": "Accusantium explicab",
            "reqQualification": "Hello Internet is an audio podcast hosted by educational YouTube content creators Brady Haran and CGP Grey.[2][3] The podcast debuted in 2014 and released 136 numbered episodes and 18 unnumbered episodes until February 2020, when the last episode was published. The podcast is currently indefinitely suspended and inactive.[4] Listeners of the podcast are known as \"Tims\".[5] The episodes of the podcast are usually about the interests of the creators and the differences between the hosts' lifestyles.",
            "responsiblities": "Hello Internet is an audio podcast hosted by educational YouTube content creators Brady Haran and CGP Grey.[2][3] The podcast debuted in 2014 and released 136 numbered episodes and 18 unnumbered episodes until February 2020, when the last episode was published. The podcast is currently indefinitely suspended and inactive.[4] Listeners of the podcast are known as \"Tims\".[5] The episodes of the podcast are usually about the interests of the creators and the differences between the hosts' lifestyles.",
            "skillsRequired": "Hello Internet is an audio podcast hosted by educational YouTube content creators Brady Haran and CGP Grey.[2][3] The podcast debuted in 2014 and released 136 numbered episodes and 18 unnumbered episodes until February 2020, when the last episode was published. The podcast is currently indefinitely suspended and inactive.[4] Listeners of the podcast are known as \"Tims\".[5] The episodes of the podcast are usually about the interests of the creators and the differences between the hosts' lifestyles.",
            "createdAt": "2023-09-26T13:39:49.329Z",
            "updatedAt": "2023-09-26T13:39:49.329Z",
            "__v": 0
        }
    ]


    const handleApplyNowClick = (jobId) => {
        navigate(`/resume?jobId=${jobId}`);
    };

    const itemsToDisplay = displayAll ? data : data.slice(0, 5)

    return (
        <>
            <Box
                bg={useColorModeValue('blue.500', 'gray.800')}
                color='gray.100'
            >
                <div>
                    {selectedCategory ? (<Heading fontSize={'4xl'} fontFamily={'body'} pt={5}>
                        Latest {selectedCategory} Jobs
                    </Heading>) : (<Heading fontSize={'4xl'} fontFamily={'body'} pt={5}>
                        Latest Jobs
                    </Heading>)}


                    {/* {data && data.length !== 0 ?  ( */}
                    <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr', '2xl': '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                        <>{itemsToDisplay ? (itemsToDisplay.map((job, index) => {
                            return (<>

                                <Card maxW='sm' key={job.jobCode} >
                                    <CardBody w='100%' h='10' bg='' >
                                        <AspectRatio>
                                            <Image
                                                src={`/uploads/jobImages/${job.jobImage}`}
                                                alt={job.jobTitle}
                                                borderRadius='lg'
                                            />
                                        </AspectRatio>
                                        {
                                            new Date(job.updatedAt) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? (
                                                <Box display='flex' alignItems='baseline' p="2" >
                                                    <Badge borderRadius='full' colorScheme='red'>
                                                        New
                                                    </Badge>
                                                </Box>
                                            ) : (null)
                                        }
                                        <Stack mt='1' spacing='3'>
                                            <Heading size='md'>{job.jobTitle}</Heading>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter alignContent={'middle'} align="center">
                                        <ButtonGroup spacing='3' >
                                            <Center>

                                                <Button
                                                    variant='ghost'
                                                    colorScheme='blue'
                                                    rounded='full'
                                                    onClick={() => {
                                                        onOpen()
                                                        setModalJobData(job)
                                                        setReqQualifications(job.reqQualification)
                                                        setReqSkills(job.skillsRequired)
                                                        setReqResponsiblities(job.responsiblities)
                                                    }}
                                                >
                                                    Details
                                                </Button>
                                                <Button variant='solid' colorScheme='blue' rounded='full'
                                                    onClick={() => handleApplyNowClick(job.jobCode)}
                                                >
                                                    Apply now
                                                </Button>
                                            </Center>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </>)
                        })) : <Spinner
                            thickness='4px'
                            speed='0.65s'
                            color='blue.500'
                            size='xl' />}
                        </>
                    </Grid>
                    {/* ) : (<Text>Jobs not available at this moment.</Text>) } */}

                    {displayAll == false && (<Flex w="full" alignItems="center" justifyContent="center">
                        <Box pb={"15px"}>
                            <Button
                                bg={'whiteAlpha.800'}
                                rounded={'full'}
                                color={'blue.500'}
                                _hover={{ bg: 'whiteAlpha.900', color: 'blue.600' }}
                                onClick={() => navigate("/jobs")}
                            >
                                View All Jobs
                            </Button>
                        </Box>
                    </Flex>)
                    }

                </div>
                {/* JOB DESCRIPTION MODAL */}
                <Box pos='relative' zIndex={"9999"} mt={"3%"}  >
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent minW={"80%"} >
                            <ModalBody>

                                <Box
                                    w={'100%'}
                                    rounded="10px"
                                    position="relative"
                                >
                                    <Box>
                                        <Center>
                                            <Image
                                                maxH={"md"}
                                                roundedTop={'md'}
                                                alt={modalJobData.jobTitle}
                                                src={
                                                    `/uploads/jobImages/${modalJobData.jobImage}`
                                                }
                                                fit={'cover'}
                                                align={'center'}
                                                w={{ sm: '90%', lg: '50%' }}
                                            />
                                        </Center>
                                    </Box>
                                    <Box px={{ base: '5', sm: '5', md: '20', lg: '250' }}
                                        py={5}
                                    >
                                        <Box mt="1" justifyContent="center" alignContent="center">
                                            <Box
                                                fontSize="2xl"
                                                fontWeight="semibold"
                                                as="h4"
                                                lineHeight="tight"
                                                textAlign="center"
                                            >
                                                <Stack spacing={{ base: 6, md: 10 }}>
                                                    <Box as={'header'}>
                                                        <Heading
                                                            lineHeight={1.1}
                                                            fontWeight={600}
                                                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                                                        >
                                                            {modalJobData.jobTitle}
                                                        </Heading>
                                                        <Text
                                                            fontSize={'md'}
                                                            fontWeight={'300'}>
                                                            Job code: {modalJobData.jobCode}
                                                        </Text>
                                                        <Text
                                                            fontWeight={300}
                                                            fontSize={'2xl'}
                                                            pt={5}
                                                        >
                                                            NRs. {modalJobData.salary} per month
                                                        </Text>
                                                    </Box>

                                                    <Stack
                                                        spacing={{ base: 4, sm: 6 }}
                                                        direction={'column'}
                                                        divider={
                                                            <StackDivider borderColor='gray.200' />
                                                        }>
                                                        <VStack spacing={{ base: 4, sm: 6 }}>
                                                            <Text
                                                                fontSize={'2xl'}
                                                                fontWeight={'300'}>
                                                                {modalJobData.shortDescription}
                                                            </Text>

                                                        </VStack>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}
                                                            >
                                                                Details
                                                            </Text>

                                                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} fontSize={{ base: '14px', lg: '18px' }}>
                                                                <List spacing={2}>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Country / City:
                                                                        </Text>{' '}
                                                                        {modalJobData.location}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Field:
                                                                        </Text>{' '}
                                                                        {modalJobData.category}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Type:
                                                                        </Text>{' '}
                                                                        {modalJobData.isFulltime = true ? "Fulltime" : "Part-time"}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Work Hours:
                                                                        </Text>{' '}
                                                                        {modalJobData.workHours}
                                                                    </ListItem>

                                                                </List>
                                                                <List spacing={2}>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Day Off:
                                                                        </Text>{' '}
                                                                        Saturday, Sunday
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Housing:
                                                                        </Text>{' '}
                                                                        {modalJobData.housing = true ? "Yes" : "No"}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Food:
                                                                        </Text>{' '}
                                                                        {modalJobData.fooding == true ? "Yes" : "No"}
                                                                    </ListItem>
                                                                </List>
                                                            </SimpleGrid>
                                                        </Box>

                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Qualifications Required
                                                            </Text>
                                                            <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.reqQualification ? (
                                                                        modalJobData.reqQualification
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No qualification information available</span>
                                                                    )}
                                                                </Text>
                                                            </VStack>
                                                        </Box>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Skills Required
                                                            </Text>
                                                            <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.skillsRequired ? (
                                                                        modalJobData.skillsRequired
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No skills information available</span>
                                                                    )}
                                                                </Text>
                                                            </VStack>
                                                        </Box>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Responsiblities
                                                            </Text>
                                                            <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.responsiblities ? (
                                                                        modalJobData.responsiblities
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No responsiblities information available</span>
                                                                    )}
                                                                </Text>
                                                            </VStack>
                                                        </Box>
                                                    </Stack>
                                                    <Box
                                                        align='center'
                                                    >
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                {/* </ScrollDiv> */}
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' rounded='30px' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='solid' colorScheme='blue' rounded='30px' size={'md'} onClick={() => handleApplyNowClick(modalJobData.jobCode)}>
                                    Apply now
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </>
    )
}

export default AllJobs

