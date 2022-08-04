
import { useDisclosure } from '@chakra-ui/hooks';
import { Button, IconButton } from '@chakra-ui/button';
import React from 'react'
import { ViewIcon } from '@chakra-ui/icons';
import { 
    Modal, 
    ModalBody, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    ModalCloseButton, 
    Text,
    Image } from '@chakra-ui/react';

const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
    
        {
            children?<span onClick={onOpen}>{children}</span> :(
                <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
                )}

   

    <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent h="410px">
        <ModalHeader
            fontSize="40px"
            d="flex"
            justifyContent="center"
        >{user.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between" 
        >
            <Image
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user.name}
            />
            <Text
                fontSize={{base: "20px", md: "30px"}}
            >
                Email: {user.email}
            </Text>
        </ModalBody>

        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
    </ModalContent>
</Modal>
    </>
  )
}

export default ProfileModal