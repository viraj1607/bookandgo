import { Button } from "@mui/material";
import React from "react";

const Mbutton = ({ value, onclick }) => {
  return (
    <div>
      <Button
        onClick={onclick}
        className="!bg-[#002475] !my-4 !font-bold"
        variant="contained"
      >
        {value}
      </Button>
    </div>
  );
};

export default Mbutton;
