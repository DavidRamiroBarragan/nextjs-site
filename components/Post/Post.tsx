import Link from "next/link";
import { Card, Content, Figure, Title } from "./style";

const Post = () => {
  return (
    <Link href="/post/[id]" as="/post/example" passHref>
      <Card>
        <Figure>
          <img src="Post photo" alt="/image1.jpg" />
        </Figure>
        <Title>Post title!</Title>
        <Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            commodi omnis nam ipsum maxime, expedita accusantium magni minima ut
            obcaecati cumque aliquid, molestiae ex pariatur nisi ullam numquam!
            Esse, aperiam.
          </p>
        </Content>
      </Card>
    </Link>
  );
};

export default Post;
