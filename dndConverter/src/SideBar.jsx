import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { BsFillCollectionFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaHome size="28" />} text = 'Home'/>
        <Divider />
        <SideBarIcon icon={<BsPlus size="38" />} text = 'Add Creature'/>
        <SideBarIcon icon={<BsFillCollectionFill  size="28" />} text = 'Collection'/>
        <Divider />
        <SideBarIcon icon={<IoPersonSharp size="28" />} text = 'Profile'/>
        <SideBarIcon icon={<BsGearFill size="28" />} text = 'Settings'/>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;