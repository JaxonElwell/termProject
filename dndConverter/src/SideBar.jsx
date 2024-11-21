import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { BsFillCollectionFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaHome size="28" />} text='Home' onClick={() => navigate('/')} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="38" />} text='Add Creature' onClick={() => navigate('/add')} />
        <SideBarIcon icon={<BsFillCollectionFill size="28" />} text='Collection' onClick={() => navigate('/collection')} />
        <Divider />
        <SideBarIcon icon={<IoPersonSharp size="28" />} text='Profile' onClick={() => navigate('/profile')} />
        <SideBarIcon icon={<BsGearFill size="28" />} text='Settings' onClick={() => navigate('/settings')} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip', onClick }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;