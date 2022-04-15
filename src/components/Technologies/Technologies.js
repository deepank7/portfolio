import React from "react";
import {
  DiFirebase,
  DiGit,
  DiJavascript,
  DiReact,
  DiZend,
} from "react-icons/di";
import { SiNextDotJs } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've experience working on multiple stack of technolgies like JavaScript,
      Java, SQL, Ruby on Rails. My major experience lies in the front-end
      technolgies like JS, React, NextJs.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>JS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size="3rem" />
        <ListContainer>
          <ListTitle>Next</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
