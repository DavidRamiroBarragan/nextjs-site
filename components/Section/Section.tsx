import { FunctionComponent } from "react";
import Post from "../Post/Post";
import { Post as PostType } from "../../shared/types";
import { Grid, Title } from "./style";

interface SectionProps {
  title: string;
  posts: PostType[];
}

const Section: FunctionComponent<SectionProps> = ({ title, posts }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post: PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
    </section>
  );
};

export default Section;
