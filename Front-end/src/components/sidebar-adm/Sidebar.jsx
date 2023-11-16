// Importe os ícones e outros recursos necessários aqui
import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import Logo from "../../assets/logorecentro.png";
import { SidebarData } from "./TemplateSidebar.js";
import { FiMenu } from 'react-icons/fi';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Sidebar = ({ onToggleDarkMode, darkMode }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarVariants = {
    true: { left: '0' },
    false: { left: '-60%' },
  };

  const toggleSidebar = () => {
    setExpaned(prevExpanded => !prevExpanded);
  };

  const handleMenuItemClick = (index) => {
    setSelected(index);
    if (SidebarData[index].heading === "Modo Escuro") {
      onToggleDarkMode(); 
    }
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div className="bars" onClick={toggleSidebar} style={{ zIndex: '10' }}>
        <FiMenu />
      </div>
      <motion.div
        className={`sidebar ${darkMode ? "dark" : ""}`}
        variants={sidebarVariants}
        animate={isMobile ? expanded.toString() : "true"}
      >
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            const isLink = item.to; // Verifica se o item tem uma propriedade 'to'
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => handleMenuItemClick(index)}
              >
                {isLink ? (
                  <Link to={item.to} className="menu-item-link">
                    <item.icon className="icon" />
                    <span>{item.heading}</span>
                  </Link>
                ) : (
                  <>
                    <item.icon className="icon" />
                    <span>{item.heading}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
