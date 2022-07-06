import { useState } from "react";
import { Tab } from "@headlessui/react";
import TabularTransactions from "./TabularTransactions";
import customers from "../fakeData/customers.json";

const Info = () => {
  const [isAscending, setIsAscending] = useState(true);

  const data = [
    {
      id: "transactions",
      title: "تراکنش ها",
      content: (
        <TabularTransactions
          data={customers[0].transactions}
          isAscending={isAscending}
          setIsAscending={setIsAscending}
        />
      ),
    },
    {
      id: "transactionswithdetails",
      title: "تراکنش ها با جزئیات",
      content: null,
    },
    { id: "sellingandbuyings", title: "خرید و فروش کالا", content: null },
    { id: "others", title: "سایر", content: null },
    { id: "recievedbills", title: "چک های دریافتی", content: null },
  ];

  return (
    <section className="col-span-full bg-yellow-300/0">
      <Tab.Group>
        <Tab.List className="flex items-center gap-x-16">
          {data.map((item) => (
            <Tab
              className={({ selected }) =>
                selected
                  ? "rounded-[1px] border-b-[3px] border-blue-500 pb-3 font-bold outline-none"
                  : "pb-[14px] text-slate-500"
              }
              key={item.id}
            >
              {item.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {data.map((item) => (
            <Tab.Panel
              key={item.id}
              className="w-full border-t-[2px] border-[#e0e0e0] pt-6"
            >
              {item.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Info;
