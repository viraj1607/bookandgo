import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox, FormGroup } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const Filters = () => {
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };
  return (
    <div className="my-8 mx-4 md:mx-0">
      <h2 className="text-xl md:text-[25px] font-bold">Select Filters</h2>
      <FormControl className="!my-4">
        <FormLabel
          id="demo-radio-buttons-group-label"
          className="!text-lg md:!text-[20px] !font-bold"
        >
          Category
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="three"
          name="radio-buttons-group"
        >
          <FormControlLabel value="three" control={<Radio />} label="3 Star" />
          <FormControlLabel value="four" control={<Radio />} label="4 Star" />
          <FormControlLabel value="five" control={<Radio />} label="5 Star" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ width: 120 }} className="!my-4">
        <Slider
          marks={marks}
          step={10}
          value={val}
          valueLabelDisplay="auto"
          min={MIN}
          max={MAX}
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            onClick={() => setVal(MIN)}
            sx={{ cursor: "pointer" }}
          >
            ${MIN}
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setVal(MAX)}
            sx={{ cursor: "pointer" }}
          >
            ${MAX}
          </Typography>
        </Box>
      </Box>

      <FormGroup className="!my-4">
        <FormLabel className="!text-lg md:!text-[20px] !font-bold">
          Aminities
        </FormLabel>
        <FormControlLabel control={<Checkbox />} label="Breakfast Included" />
        <FormControlLabel control={<Checkbox />} label="Bar" />
        <FormControlLabel control={<Checkbox />} label="Swimming Pool" />
        <FormControlLabel control={<Checkbox />} label="Indoor Games" />
        <FormControlLabel control={<Checkbox />} label="Kids Play Area" />
      </FormGroup>
    </div>
  );
};

export default Filters;
