import styled from "styled-components";
import links from "../links";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebarAction } from "../redux/action";




const SmallSidebar = () => {
    
const dispatch = useDispatch();
    const toggleSidebar = () => {
        dispatch(toggleSidebarAction());
      };

  return (
    <Wrapper>
      <div className="contain">
        <div onClick={toggleSidebar} style={{cursor:'pointer'}}>
        <FaTimes className="button"  />
        </div>
        <div className="menu">
          <Logo />

          {links.map((link) => (
            <Link key={link.id} className="link" to={link.path} onClick={toggleSidebar}>
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
  @media (min-width: 992px) {
    display: none;
    transition: var(--transition);
  }

  display: block;
  margin: 0px;
  text-transform: capitalize;
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  z-index: 99;
  position: fixed;
  transition: var(--transition);

  .button{
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
  }
  .contain {
    background: white;
    padding: 20px;
    margin: 30px;
    border-radius: 20px;
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

`;
export default SmallSidebar;
