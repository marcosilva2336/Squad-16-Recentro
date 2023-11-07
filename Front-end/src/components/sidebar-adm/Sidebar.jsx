import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import Logo from "../../assets/logorecentro.png";
import { SidebarData } from "./TemplateSidebar.js";
import { FiMenu } from 'react-icons/fi'
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarVariants = {
    true: { left: '0' },
    false: { left: '-60%' },
  };

  const toggleSidebar = () => {
    setExpaned((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <div className="bars" onClick={toggleSidebar} style={{ zIndex: '10' }}>
        <FiMenu />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={isMobile ? expanded.toString() : "true"}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />

        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon className="icon" />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
