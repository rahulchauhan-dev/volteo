import CrewIDCard from "./components/CrewIDCard";
import NoticeCard from "./components/NoticeCard";
import SideBarNav from "./components/SideBarNav";
import StatementCard from "./components/StatementCard";
import ToDoCard from "./components/ToDoCard";
import TopBar from "./components/TopBar";

function App() {
  return (
    <main className="m-2">
      <SideBarNav />
      <div className="ml-[7.5rem]">
        <TopBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 ">
          <div>
            <CrewIDCard />
            <StatementCard />
          </div>
          <div>
            <NoticeCard />
          </div>
          <div>
            <ToDoCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
