import SideBar from './SideBar';
import ContentContainer from './Content';
import ChannelBar from './ChannelBar';

export default function App() {
  return (
    <div className="flex">
      {/* <ChannelBar /> */}
      <SideBar />
      <ContentContainer />
    </div>
  )
}