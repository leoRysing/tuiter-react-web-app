import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
  return(
      <div>
        <Nav/>
        <h1>Tuiter</h1>
        <NavigationSidebar/>
        <WhoToFollowList/>
      </div>
  );
}
export default Tuiter