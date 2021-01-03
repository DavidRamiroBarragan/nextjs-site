import { FunctionComponent } from "react";
import { Category, Post } from "../../shared/types";
import Section from "../Section/Section";

interface FeedProps {
  posts: Post[];
  categories: Category[];
}

const Feed: FunctionComponent<FeedProps> = ({ posts, categories }) => {
  return (
    <>
      {categories.map((currentCategory) => {
        const inSection = posts.filter(
          (post) => post.category === currentCategory
        );

        return (
          <Section
            key={currentCategory}
            title={currentCategory}
            posts={inSection}
          />
        );
      })}
    </>
  );
};

export default Feed;
