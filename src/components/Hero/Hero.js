import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Deepank Sharma
      </SectionTitle>
      <SectionText>
        Front end developer, experienced in React and Next
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
