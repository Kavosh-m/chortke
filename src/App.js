import AccountCard from "./components/AccountCard";
import Info from "./components/Info";
import User from "./components/User";
import { useSelector } from "react-redux";

function App() {
  const selectedCustomer = useSelector((state) => state.customer.currCustomer);
  const customers = useSelector((state) => state.customer.customers);

  return (
    <div className="container mx-auto min-h-screen bg-[#D3D9E1] pt-[121px] pr-[168px] pb-72 pl-20">
      <main className="grid grid-cols-3 gap-8 font-iransansweb">
        {/* Private account card */}
        <AccountCard data={selectedCustomer} />

        {/* User section */}
        <User data={selectedCustomer} customers={customers} />

        {/* Info table section */}
        <Info customer={selectedCustomer} />
      </main>
    </div>
  );
}

export default App;
