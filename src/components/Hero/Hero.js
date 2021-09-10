import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import { LeftSection } from "./HeroStyles";
import { ProfilePicture } from "../../constants/constants";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(2),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Hero = (props) => {
  const classes = useStyles();
  return (
    <Section row nopadding>
      <LeftSection>
        <Box>
        <SectionTitle main center>
          <Avatar
            className={classes.avatar}
            src={ProfilePicture.image}
            alt="Deepank Sharma"
          />
          <Typography className={classes.title} variant="h2">
            <Typed strings={["Deepank Sharma"]} typeSpeed={40} />
          </Typography>
        </SectionTitle>
        <SectionText>
          <Typography className={classes.subtitle} variant="h3">
            <Typed
              strings={[
                "Front-end Developer",
                "Web Developer",
                "React Developer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </Typography>
        </SectionText>
        </Box>
      </LeftSection>
    </Section>
  );
};

export default Hero;
