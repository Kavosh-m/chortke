import { useState } from "react";
import Factor from "./Factor";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const User = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <section className="col-span-1 flex flex-col items-center">
      <div className="w-full">
        <p>شخص</p>
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <Listbox.Button>{selectedPerson.name}</Listbox.Button>
          <Listbox.Options>
            {people.map((person) => (
              <Listbox.Option
                key={person.id}
                value={person}
                disabled={person.unavailable}
              >
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>

      {/* Info */}
      <div className="mt-12 w-full rounded-xl bg-white">
        <div className="flex w-full flex-col gap-y-4 px-6 pt-5 pb-4 text-sm">
          <section className="flex flex-col gap-y-2">
            <p>بازه زمانی</p>
            <div>calendar</div>
          </section>
          <section className="flex flex-col gap-y-2">
            <p>پروژه</p>
            <div>combo</div>
          </section>
        </div>

        {/*Factors section - sell and buy */}
        <div className="mx-4 flex flex-col gap-y-12 rounded-xl bg-[#f9fafe] p-6">
          <Factor factorType="sell" />
          <Factor factorType="buy" />
        </div>
      </div>
    </section>
  );
};

export default User;
