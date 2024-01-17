import React, { useContext, useState } from "react";
import { Box, ListItem, Stack, IconButton } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DehazeIcon from "@mui/icons-material/Dehaze";
import MyContext from "../context/MyContext";

const LeftDraw = () => {
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const contextData = useContext(MyContext);

  console.log(contextData, "contetData:--");
  const visibleBtn = () => {
    setHiddenBtn(!hiddenBtn);
    console.log("Hello");
  };

  const stackStyle = {
    width: "17vw",
    overflowY: "scroll",
    maxHeight: "80vh",
    text: "center",
  };
  const listItems = {
    boxShadow: 2,
    borderRadius: 2,
    bgcolor: "silver",
    color: "black",
    lineHeight: "2",
  };

  return (
    <>
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          left: "3vw",
          display: {
            sx: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        {/* {hiddenBtn ? (
          <ArrowForwardIcon sx={{ color: "red" }} onClick={visibleBtn} />
        ) : (
          <ArrowBackIcon sx={{ color: "red" }} onClick={visibleBtn} />
        )} */}
        <DehazeIcon sx={{ color: "red" }} onClick={visibleBtn} />
      </IconButton>
      <Box
        sx={{
          bgcolor: "black",
          color: "white",
          maxWidth: { md: "17vw", lg: "17vw" },
          height: "100vh",
          display: {
            xs: hiddenBtn ? "block" : "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Navbar />
        <Stack spacing={2} sx={stackStyle}>
          {contextData
            ?.slice()
            .reverse()
            .map((ques, index) => {
              return (
                <ListItem sx={listItems} key={index}>
                  {ques.length > 20
                    ? ques.substring(0, 20).concat(" ....")
                    : ques}
                </ListItem>
              );
            })}
        </Stack>
        <Footer />
      </Box>
    </>
  );
};

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = () => (
//     <Box
//       sx={{ width:250 }}
//       role="presentation"
//       onClick={toggleDrawer}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

export default LeftDraw;
