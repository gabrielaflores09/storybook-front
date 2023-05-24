import React from "react";
import { Link, LinkProps, Typography } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";

interface LinkToProps extends LinkProps {
  // to: string;
  text: React.ReactNode;
}

const LinkTo: React.FC<LinkToProps> = ({
  // to,
  text,
  //  ...linkProps
}) => {
  return (
    <Link
      // component={RouterLink}
      // to={to}
      // {...linkProps}
      style={{ cursor: "pointer" }}
    >
      <Typography variant="subtitle1" fontSize={14}>
        {text}
      </Typography>
    </Link>
  );
};

export default LinkTo;
