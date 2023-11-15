import { FiHome, FiUserPlus, FiBarChart2, FiRotateCcw, FiLogOut, FiMoon, FiFileText, FiPlusSquare } from 'react-icons/fi';

export const SidebarData = [
  {
    icon: FiHome,
    heading: "Painel",
  },
  {
    icon: FiMoon,
    heading: "Modo Escuro",
  },
  {
    icon: FiUserPlus,
    heading: "Adicionar Usuário",
  },
  {
    icon: FiBarChart2,
    heading: 'Analytics',
  }, {
    icon: FiPlusSquare, // Este é o ícone de adicionar que você importou
    heading: 'Adicionar Imóvel',
    to: "/adicionar-imovel",
  },
  {
    icon: FiRotateCcw,
    heading: 'Atualizar Imovel',
    to: "/atualizar-imovel",
  },
  {
    icon: FiFileText,
    heading: 'Relatórios',
  },

  {
    icon: FiLogOut,
    heading: 'Sair',
    to: "/",
  },
];
