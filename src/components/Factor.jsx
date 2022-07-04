import React from "react";

const Factor = ({ factorType }) => {
  return (
    <div className="flex flex-col divide-y-2">
      <h2 className="pb-4 text-lg">
        فاکتور{" "}
        <span
          className={`${
            factorType === "sell" ? "text-red-500" : "text-green-500"
          }`}
        >
          {factorType === "sell" ? "فروش" : "خرید"}
        </span>
      </h2>

      <div className="flex items-center justify-between pt-4 text-sm">
        <section>
          <div className="flex items-center gap-x-3">
            <p>پرداخت نشده</p>
            <p className="rounded-lg bg-blue-300 p-2 py-1">1</p>
          </div>
          <p>
            <span className="text-base">4168500</span> ریال
          </p>
        </section>
        <section>
          <div className="flex items-center gap-x-3">
            <p>سررسید گذشته</p>
            <p className="rounded-lg bg-blue-300 p-2 py-1">2</p>
          </div>
          <p>
            <span className="text-base">4168500</span> ریال
          </p>
        </section>
      </div>
    </div>
  );
};

export default Factor;
