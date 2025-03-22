import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface ToggleProps {
  toggle?: boolean;
  handleToggle: () => void;
}

const AntSwitch = styled(Switch)(({  }) => ({
  width: 44,
  height: 24,
  padding: 2,
  display: "flex",
  alignItems: "center",
  position: "relative",

  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 18,
      height: 18,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(20px)",
    },
  },

  "& .MuiSwitch-switchBase": {
    padding: 3,
    transition: "transform 0.3s ease, background-color 0.3s ease",

    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        opacity: 1,
        background: "linear-gradient(90deg, #00c6ff, #0072ff)",
        boxShadow: "0 0 6px rgba(0, 183, 255, 0.6)",
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    boxSizing: "border-box",
  },
}));

export default function CustomizedSwitches({
  toggle,
  handleToggle,
}: ToggleProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{toggle ? "Dashboard" : "Analytics"}</Typography>
      <AntSwitch
        inputProps={{ "aria-label": "toggle switch" }}
        checked={toggle}
        onChange={handleToggle}
      />
    </Stack>
  );
}
