import * as React from "react";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./experiences-page.css";
import { styled } from "@mui/system";

const CustomToggleButton = styled(ToggleButton)(() => ({
  border: "none",
  columnGap: "20px",
  borderRadius: "15px",
  "&.Mui-selected": {
    backgroundColor: "#99ccff",
    color: "#2c4dff",
    border: "none",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
  "&:not(.Mui-selected)": {
    color: "#000",
    "&:hover": {
      backgroundColor: "#99ccff",
      border: "0.1px solid #99ccff",
      color: "#000",
      transition: ".4s,background-position 0s",
    },
  },
}));

function ToggleExperience(props) {
  const { currentToggle, changeToggleState } = props;
  const handleToggleChange = (event, newChange) => {
    changeToggleState(newChange);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      aria-label="experience type"
      exclusive
      onChange={handleToggleChange}
      value={currentToggle}
    >
      <CustomToggleButton value="work" aria-label="work" className="work-style">
        <WorkRoundedIcon />
        Work
      </CustomToggleButton>
      <CustomToggleButton value="extracurricular" aria-label="extracurricular">
        <GroupsRoundedIcon />
        Extracurriculars
      </CustomToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleExperience;
