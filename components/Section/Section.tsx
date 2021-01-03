import { FunctionComponent } from "react";
import Post from "../Post/Post";
import { Grid, Title } from "./style";

interface SectionProps {
  title: string;
}

const Section: FunctionComponent<SectionProps> = ({ title }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        <Post />
        <Post />
        <Post />
      </Grid>
    </section>
  );
};

export default Section;
