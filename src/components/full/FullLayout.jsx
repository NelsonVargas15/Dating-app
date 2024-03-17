import { Outlet } from "react-router-dom";
import { Container, Content } from "rsuite";
import CustomNavbar from "../CustomerNavbar";

const FullLayout = () => {
  return (
    <Container>
      <CustomNavbar />
      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Container>
  );
};

export default FullLayout;
