import React from "react";

const AccountCard = () => {
  return (
    <section className="col-span-2">
      <header>
        <h1>کارت حساب اشخاص</h1>
        <h3>ثبت کالا و خدمات جدید</h3>
      </header>

      {/* Card */}
      <div className="mt-12 rounded-xl bg-white">
        <div className="flex items-center justify-between py-3 pr-6 pl-4">
          <h1>شرکت راه سازان - مهندس علی راهداری</h1>
          <p>
            بستانکار{" "}
            <span className="text-2xl text-red-600">{`${(4999222).toLocaleString(
              "ar-SA"
            )}`}</span>{" "}
            ریال
          </p>
        </div>

        {/* Details */}
        <div className="flex border-t-2">
          <div className="flex flex-col items-center gap-y-6 px-10 pt-4">
            <p>2334</p>
            <div className="grid aspect-square w-24 place-items-center rounded-full border-4 border-blue-500 bg-slate-400">
              عکس
            </div>
            <p>مشتری</p>
          </div>

          <div className="divide-y-2 border-r-[2px] px-5">
            <section className="flex flex-col gap-y-2 py-4">
              <p>اعتبار مالی</p>
              <p>
                <span className="text-[#1062d0]">100000000</span> ریال
              </p>
            </section>
            <section className="grid grid-cols-4 gap-x-3 py-4">
              <div className="col-span-3 flex flex-col gap-y-2">
                <p>ادرس</p>
                <p>
                  {
                    "خیابان ولیعصر(عج)، کوچه رهبان(شهید عتیقی نژاد) –  پلاک ۹۹۹۹ شیراز – فارس – ایران"
                  }
                </p>
              </div>
              <div className="col-span-1 flex flex-col gap-y-2">
                <p>کد پستی</p>
                <p>1234567890</p>
              </div>
            </section>
            <section className="grid grid-cols-4 py-4">
              <div className="flex flex-col gap-y-2 ">
                <p>تلفن</p>
                <p>33566852</p>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <p>موبایل</p>
                <p>9112228899</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p>ایمیل</p>
                <p className="truncate">aaa@gmail.com</p>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <p>وبسایت</p>
                <p>www.random.com</p>
              </div>
            </section>
            <section className="py-4 pb-[70px]">
              <div className="flex flex-col gap-y-2">
                <p>حساب بانکی</p>
                <p>8562325214</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountCard;
