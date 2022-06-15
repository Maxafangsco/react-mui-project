import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box
    flex={2}
     p={2}
     sx={{ display: {xs: "none", sm:"block"}}}
    >
       <Box sx={{position:"fixed"}}>
      <Typography variant='h6' fontWeight={100} width={300}>Online Friends</Typography>

      <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1531604269568-ad1b8de0a633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
      <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1624893829306-cf75e7138f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1611301040782-7373f08d2df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJveXMlMjBwaG90b3Nob290fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
    <ImageList cols={4} rowHeight={300} gap={5} sx={{ width: 200, height: 100 }}>
      <ImageListItem>
         <img 
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
             alt=''
          />
      </ImageListItem>

      <ImageListItem>
         <img 
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
             alt=''
          />
      </ImageListItem>


      <ImageListItem>
         <img 
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
             alt=''
          />
      </ImageListItem>

      <ImageListItem>
         <img 
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
             alt=''
          />
      </ImageListItem>

      <ImageListItem>
         <img 
            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
             alt=''
          />
      </ImageListItem>
    </ImageList>

    <Typography variant='h6' fontWeight={100} mt={2}>
      Latest Conversation
      
      </Typography>


      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
      </Box>
  )
}

export default RightBar