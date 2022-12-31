import { useEffect, useRef,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { BigSidebar, SmallSidebar, Navbar } from "../../components";
import { toggleSidebarAction } from "../../redux/action";

const SharedLayout = () => {
  const dashboard = useRef();

  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSidebarAction());
  };

  const sidebar=useRef()
  let doShow=null
  const {show} = useSelector((state) => state.toggleSidebar);

  useEffect(()=>{
    if(show){
        sidebar.current.classList.add('hide-sidebar')
        dashboard.current.classList.add("dashboar-full");
    }
    else{
        sidebar.current.classList.remove('hide-sidebar')
        dashboard.current.classList.remove("dashboar-full");
    }
  },[show])

  return (
    <Wrapper>
       
      <main className="dashboard" ref={dashboard}>
        <div className={doShow} ref={sidebar}>
          <SmallSidebar />
          <BigSidebar />
        </div>
        <div className="right-side">
          <Navbar toggleMenu={toggleMenu} />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .dashboard {
    height: 100vh;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: 200px 1fr;
      .right-side {
        display: grid;
        grid-template-rows: 100px 1fr;
        grid-row-gap: 1px;
      }
    }
  }
  .dashboar-full {
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .dashboard-page {
    box-shadow: -1px -1px var(--grey-200);
    height: 100%;
    /* @media (min-width: 992px) {
        position:fixed;
        top:100px;
        left:200px;
    }
    height:100vh;
    width:100vw; */
  }
  .hide-sidebar {
    transition: var(--transition);
    display: none;
  }
`;

export default SharedLayout;
