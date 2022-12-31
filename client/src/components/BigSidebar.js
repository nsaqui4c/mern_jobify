import styled from "styled-components";
import links from "../links";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebarAction } from "../redux/action";

const BigSidebar = () => {
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(toggleSidebarAction());
  };
  return (
    <Wrapper>
      <div className="contain">
        <div className="menu">
          <Logo />

          {links.map((link) => (
            <Link
              key={link.id}
              className="link"
              to={link.path}
              onClick={toggleSidebar}
            >
              <span style={{ color: "var(--primary-500)" }}>{link.icon}</span>
              <span> {link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  background: white;
  height: 100%;

  @media (min-width: 992px) {
    display: block;
    width: 200px;
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link {
    display: grid;
    margin: 20px auto;
    color: var(--grey-500);
    padding: 1rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    grid-template-columns: 20px 90px;
    grid-column-gap: 20px;

    justify-content: space-between;
    &:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
  }

  .contain {
    padding-top: 25px;
  }
`;

export default BigSidebar;
