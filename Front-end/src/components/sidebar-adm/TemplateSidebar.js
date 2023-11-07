import { FiHome, FiUserPlus, FiBox, FiBarChart2, FiRotateCcw, FiLogOut, FiMoon, FiFileText } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
// Sidebar Data
export const SidebarData = [
  {
    icon: FiHome,
    heading: "Painel",
  },
  {
    icon: FiMoon,
    heading: "Modo Julio",
  },
  {
    icon: FiUserPlus,
    heading: "Adicionar Usuário",
  },
  {
    icon: FiBox,
    heading: 'Products',
  },
  {
    icon: FiBarChart2,
    heading: 'Analytics',
  },
  {
    icon: FiFileText, // ícone de relatório ou log
    heading: 'Relatórios',
  },
  {
    icon: FiRotateCcw,
    heading: 'Atualizar Imovel',
    path: "/atualizar-imovel", 

  },
  {
    icon: FiLogOut,
    heading: 'Sair',
  },
];
