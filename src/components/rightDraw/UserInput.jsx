import React from "react";
import { Box, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const UserInput = ({ handleKeyDown, handleChange, handleClick }) => {
  const inputFieldStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  };
  return (
    <div style={inputFieldStyle}>
      <Box
        width={"50vw"}
        position={"fixed"}
        bottom={"40px"}
        display={"flex"}
        alignItems={"center"}
        gap={1}
      >
        <TextField
          fullWidth
          placeholder="Fire question to Asset Pandas Bot....."
          variant="outlined"
          onChange={handleChange}
          autoFocus={true}
          onKeyDown={handleKeyDown}
        />
        <SendIcon sx={{ rotate: "320deg" }} onClick={handleClick} />
      </Box>
    </div>
  );
};

export default UserInput;
