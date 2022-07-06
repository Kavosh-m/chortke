import avatar from "../assets/images/avatar.png";

const AccountCard = ({ data }) => {
  return (
    <section className="col-span-2 flex flex-col gap-y-[50px]">
      <header>
        <h1 className="text-2xl font-semibold">کارت حساب اشخاص</h1>
        <h3 className="mt-3 text-sm text-[#6F6F6F]">ثبت کالا و خدمات جدید</h3>
      </header>

      {/* Card */}
      <div className="flex-auto overflow-hidden rounded-xl bg-white">
        <div className="flex items-center justify-between py-3 pr-6 pl-4">
          <h1 className="text-xl font-semibold">
            {`${data.customerPersonalInfo.personal.companyName} - ${data.customerPersonalInfo.personal.major} ${data.customerPersonalInfo.personal.name}`}
          </h1>
          <p>
            {data.customerPersonalInfo.financial.status}{" "}
            <span className="text-2xl font-semibold leading-[38px] text-red-600">{`${data.customerPersonalInfo.financial.amount.toLocaleString(
              "fa-IR"
            )}`}</span>{" "}
            <span className="text-sm text-[#4F4F4F]">ریال</span>
          </p>
        </div>

        {/* Details */}
        <div className="flex h-full border-t-2">
          <div className="flex flex-col items-center gap-y-6 px-10 pt-4">
            <p className="text-xl font-semibold text-[#1062D0]">
              {data.customerID}
            </p>
            <div className="grid aspect-square w-24 place-items-center rounded-full border-4 border-blue-500">
              <img src={avatar} className="aspect-square w-20 object-cover" />
            </div>
            <p className="[background:_linear-gradient(251.46deg,_#568AFF_3.43%,_#3370F9_48.19%,_#578BFF_100%)] [-webkit-background-clip:_text] [-webkit-text-fill-color:_transparent] [background-clip:_text] [text-fill-color:_transparent]">
              {data.type}
            </p>
          </div>

          <div className="divide-y-2 border-r-[2px] px-5">
            <section className="flex flex-col gap-y-2 py-4">
              <p className="text-sm text-[#828282]">اعتبار مالی</p>
              <p>
                <span className="text-lg font-semibold text-[#1062d0]">
                  {data.customerPersonalInfo.financial.totalCredit.toLocaleString(
                    "fa-IR"
                  )}
                </span>{" "}
                ریال
              </p>
            </section>
            <section className="grid grid-cols-4 gap-x-14 py-4">
              <div className="col-span-3 flex flex-col gap-y-2">
                <p className="text-sm text-[#828282]">ادرس</p>
                <p className="text-sm">
                  {data.customerPersonalInfo.personal.address}
                </p>
              </div>
              <div className="col-span-1 flex flex-col gap-y-2">
                <p className="text-sm text-[#828282]">کد پستی</p>
                <p>{data.customerPersonalInfo.personal.zip}</p>
              </div>
            </section>
            <section className="grid grid-cols-4 gap-x-10 py-4">
              <div className="flex flex-col gap-y-2 ">
                <p className="text-sm text-[#828282]">تلفن</p>
                <p>{data.customerPersonalInfo.personal.tel}</p>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <p className="text-sm text-[#828282]">موبایل</p>
                <p>{data.customerPersonalInfo.personal.cellphone}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#828282]">ایمیل</p>
                <p
                  title={data.customerPersonalInfo.personal.email}
                  className="truncate"
                >
                  {data.customerPersonalInfo.personal.email}
                </p>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <p className="text-sm text-[#828282]">وبسایت</p>
                <p
                  title={data.customerPersonalInfo.personal.website}
                  className="truncate"
                >
                  {data.customerPersonalInfo.personal.website}
                </p>
              </div>
            </section>
            <section className="py-4">
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#828282]">حساب بانکی</p>
                <p>{data.customerPersonalInfo.personal.bankaccountnumber}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountCard;
