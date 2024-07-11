// import { Outlet } from "react-router-dom";
import { Flex } from "antd";
import AppBar from "./AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <Flex vertical style={{width:"100vw", height:"100vh"}}

>
      <AppBar />
      {children}
    </Flex>
  );
};

export default Layout;



// css 
// .layout {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   background-color: #f9f9f9;
// }

// .appBar {
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// .mainContent {
//   flex: 1;
//   padding: 20px;
// }