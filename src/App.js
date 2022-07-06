import AccountCard from "./components/AccountCard";
import Info from "./components/Info";
import User from "./components/User";
import customers from "./fakeData/customers.json";

function App() {
  return (
    <div className="container mx-auto min-h-screen bg-[#D3D9E1] pt-[121px] pr-[168px] pb-72 pl-20">
      <main className="grid grid-cols-3 gap-8 font-iransansweb">
        {/* Private account card */}
        <AccountCard data={customers[0]} />

        {/* User section */}
        <User data={customers[0]} />

        {/* Info table section */}
        <Info />
      </main>
    </div>
  );
}

export default App;
