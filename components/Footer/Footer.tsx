import { FunctionComponent } from "react";
import { Center } from "../Center/style";
import { Container } from "../Footer/style";

const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Center>
        <a href="https://newline.co">Newline.co</a> {currentYear}
      </Center>
    </Container>
  );
};

export default Footer;
