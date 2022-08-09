import { Box } from '@chakra-ui/layout';
import { Button, 
  Tooltip, 
  Text, 
  Menu, 
  MenuButton, 
  MenuList, 
  Avatar, 
  MenuItem, 
  MenuDivider,
  Drawer, 
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Input,
  useToast,
  Spinner, Link} from '@chakra-ui/react';
  import axios from 'axios';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import NotificationBadge, { Effect } from 'react-notification-badge';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/hooks';
import { ChatState } from '../../context/ChatProvider';
import ProfileModal from './ProfileModal';
import ChatLoading from '../ChatLoading';
import UserListItem from '../userAvatar/UserListItem';
import { getSender } from '../../config/ChatLogics';

const SideDrawer = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  
  // let navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { 
    user, 
    setSelectedChat, 
    chats, 
    setChats, 
    notification, 
    setNotification } = ChatState();


  // const logoutHandler = () => {
  //   localStorage.removeItem("userInfo");
  //   navigate('/');
  // };

const toast = useToast();


  const handleSearch = async () => {
    if(!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },

      };

      const {data} = await axios.get(`/api/user?search=${search}`, config)

      setLoading(false);
      setSearchResult(data);
    }catch(error){
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

   const accessChat = async (userId) => {
    try{
      setLoadingChat(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post("/api/chat", {userId}, config);

      if(!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setLoadingChat(false)
      onClose();

    } catch (error){
        toast({
          title: "Error fetching the chat",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
    }
   }

  return (
    <>
    <Box 
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="1px"
      >
      <Tooltip label="Search User to chat with">
        <Button variant="ghost" onClick={onOpen}>
          <i className="fas fa-search"></i>
          <Text
            color="white"
            d={{base:'none', md:'flex'}} px='4'
          >
            Search User
          </Text>
        </Button>
      </Tooltip>

      <Text color="white" fontSize="2xl"><Link href="/">SheGang Chat App</Link></Text>
      <div>
        <Menu>
          <MenuButton p={1}>
            <NotificationBadge
              count={notification.length}
              effect={Effect.SCALE}
             />
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
          <MenuList>
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
        </Menu>
        <Menu>
          <MenuButton  
            as={Button} 
            rightIcon={<ChevronDownIcon />}>
              <Avatar 
                size="sm" 
                cursor='pointer'
                name={user.name} 
                src={user.pic}
              />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
              {/* <MenuItem>My Profile</MenuItem> */}
            </ProfileModal>

            <MenuDivider />
            {/* <MenuItem onClick={logoutHandler}>Logout</MenuItem> */}
          </MenuList>
        </Menu>
      </div>
    </Box>

    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>

          <DrawerBody>
          <Box d="flex" pb={2}>
            <Input
              placeholder="Search by name or email"
              mr={2}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
              <Button 
              onClick={handleSearch}
              >
                Go
              </Button>
          </Box>
          {loading? (
            <ChatLoading />
          ): (
            searchResult?.map((user) => (
              <UserListItem
                key={user._id}
                user={user}
                handleFunction={() => accessChat(user._id)}
               />
            ))
          )}

          {loadingChat && <Spinner ml='auto' d='flex'/>}
        </DrawerBody>
      </DrawerContent>
      
    </Drawer>
    </>
  )
}

export default SideDrawer;