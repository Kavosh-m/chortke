import AccountCard from "./components/AccountCard";
import Info from "./components/Info";
import User from "./components/User";

function App() {
  return (
    <div className="container mx-auto min-h-screen bg-[#d3d9e1] pt-[121px] pr-[168px] pl-20">
      <main className="grid grid-cols-3 gap-8 font-iransansweb">
        {/* Private account card */}
        <AccountCard />

        {/* User section */}
        <User />

        {/* Info table section */}
        <Info />
      </main>
    </div>
  );
}

export default App;
