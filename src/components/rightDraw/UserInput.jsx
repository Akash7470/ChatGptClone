import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const UserInput = ({
  handleKeyDown,
  handleChange,
  handleClick,
  textFieldRef,
}) => {
  const inputFieldStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    // borderRadius: "50%",
  };
  return (
    <div style={inputFieldStyle}>
      <Stack
        width={"52vw"}
        height={"6vh"}
        position={"fixed"}
        bottom={"40px"}
        spacing={2}
        direction="row"
        // display={"flex"}
        // alignItems={"center"}
        // gap={1}
        // borderRadius={"50%"}
      >
        <TextField
          fullWidth
          inputRef={textFieldRef}
          placeholder="Fire question to Asset Pandas Bot....."
          onChange={handleChange}
          autoFocus={true}
          defaultValue={""}
          onKeyDown={handleKeyDown}
          autoSave="Off"
          autoComplete="Off"
          sx={{ bolder: "1px solid blue", borderRadius: "100px" }}
        />
        <Button
          sx={{
            width: "10vw",
            border: "1px solid blue",
            borderRadius: "50px",
            bgcolor: "skyblue",
          }}
        >
          {"Submit"}
        </Button>
      </Stack>
    </div>
  );
};

export default UserInput;
