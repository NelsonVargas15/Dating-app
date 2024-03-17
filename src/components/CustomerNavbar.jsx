import PropTypes from 'prop-types';
import { Navbar, Nav, Header } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';


const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Header className="CustomNavbar" id="navbar">
      <Navbar  appearance="inverse" {...props}>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item href="/" eventKey="1" icon={<HomeIcon />}>
            Home
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item  href="/achievements" eventKey="4" icon={<CogIcon />}>
            Achievements
          </Nav.Item>
        </Nav>
      </Navbar>
    </Header>
  );
};

CustomNavbar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  activeKey: PropTypes.string,
};

export default CustomNavbar;