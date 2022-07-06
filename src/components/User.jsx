import { useDispatch } from "react-redux/es/exports";
import { setCurrentCustomer } from "../redux/app/slices/customerSlice";
import Factor from "./Factor";

const User = ({ data, customers }) => {
  const dispatch = useDispatch();

  const onChangeUser = (e) => {
    dispatch(setCurrentCustomer(e.target.value));
  };

  return (
    <section className="col-span-1 flex flex-col items-center">
      <div className="w-full px-6">
        <p className="mb-[13px]">شخص</p>
        <select
          className="h-10 w-full rounded-lg border border-[#AEAEAE] bg-[#F1F1F1] text-[#333333] outline-none"
          onChange={onChangeUser}
        >
          {customers.map((customer) => (
            <option
              key={customer.customerID}
              value={customer.customerID}
              className="text-sm text-[#333333]"
            >
              {`${customer.customerPersonalInfo.personal.companyName} - ${customer.customerPersonalInfo.personal.major} ${customer.customerPersonalInfo.personal.name}`}
            </option>
          ))}
        </select>
      </div>

      {/* Info */}
      <div className="mt-[40px] w-full rounded-xl bg-white">
        <div className="flex w-full flex-col gap-y-4 px-6 pt-5 pb-4 text-sm">
          <section className="flex flex-col gap-y-2">
            <p>بازه زمانی</p>
            <div>calendar</div>
          </section>
          <section className="flex flex-col gap-y-2">
            <p>پروژه</p>
            <div>
              <select
                className="h-10 w-full rounded-lg border border-[#AEAEAE] text-[#AEAEAE] outline-none"
                id="cars"
                name="cars"
              ></select>
            </div>
          </section>
        </div>

        {/*Factors section - sell and buy */}
        <div className="mx-4 flex flex-col gap-y-12 rounded-xl bg-[#f9fafe] p-6">
          <Factor
            factorType="sell"
            data={data.customerPersonalInfo.financial.factors}
          />
          <Factor
            factorType="buy"
            data={data.customerPersonalInfo.financial.factors}
          />
        </div>
      </div>
    </section>
  );
};

export default User;
