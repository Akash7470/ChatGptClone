import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const UserInput = ({
  handleKeyDown,
  handleChange,
  handleSendMessage,
  textFieldRef,
  buttonDisabled,
}) => {
  const inputFieldStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "77vw",
    bgColor: "white",
    marginTop: "20px",
    paddingLeft: "20px",
    gap: "1vw",
  };

  return (
    <div style={inputFieldStyle}>
      <TextField
        fullWidth
        inputRef={textFieldRef}
        label="Type a Message....."
        variant="outlined"
        onChange={handleChange}
        autoFocus={true}
        defaultValue={""}
        onKeyDown={handleKeyDown}
        autoSave="Off"
        autoComplete="Off"
      />
      <Button
        key={2}
        disabled={buttonDisabled}
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        style={{ padding: "8px" }}
      >
        Send
      </Button>
    </div>
  );
};

export default UserInput;
