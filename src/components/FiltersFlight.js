import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel"; // Corrected this line
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox, FormGroup } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const MAX = 1000;
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

const FiltersFlight = () => {
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
          defaultValue="economy"
          name="radio-buttons-group"
        >
          <FormControlLabel value="economy" control={<Radio />} label="Economy" />
          <FormControlLabel value="business" control={<Radio />} label="Business" />
          <FormControlLabel value="firstClass" control={<Radio />} label="First Class" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ width: 120 }} className="!my-4">
        <Slider
          marks={marks}
          step={50}
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
          Amenities
        </FormLabel>
        <FormControlLabel control={<Checkbox />} label="In-flight Entertainment" />
        <FormControlLabel control={<Checkbox />} label="WiFi" />
        <FormControlLabel control={<Checkbox />} label="Meals Included" />
        <FormControlLabel control={<Checkbox />} label="Extra Legroom" />
      </FormGroup>
    </div>
  );
};

export default FiltersFlight;
