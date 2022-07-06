const Factor = ({ factorType, data }) => {
  return (
    <div className="flex flex-col divide-y-2">
      <h2 className="pb-4 text-lg font-semibold">
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
            <p className="font-semibold">پرداخت نشده</p>
            <p className="rounded-lg bg-blue-300 p-2 py-1">
              {factorType === "sell"
                ? data.sell.notPaied.count
                : data.buy.notPaied.count}
            </p>
          </div>
          <p>
            <span className="text-base font-semibold">
              {factorType === "sell"
                ? data.sell.notPaied.fee.toLocaleString("fa-IR")
                : data.buy.notPaied.fee.toLocaleString("fa-IR")}
            </span>{" "}
            ریال
          </p>
        </section>
        <section>
          <div className="flex items-center gap-x-3">
            <p className="font-semibold">سررسید گذشته</p>
            <p className="rounded-lg bg-blue-300 p-2 py-1">
              {factorType === "sell"
                ? data.sell.outOfDate.count
                : data.buy.outOfDate.count}
            </p>
          </div>
          <p>
            <span className="text-base font-semibold">
              {factorType === "sell"
                ? data.sell.outOfDate.fee.toLocaleString("fa-IR")
                : data.buy.outOfDate.fee.toLocaleString("fa-IR")}
            </span>{" "}
            ریال
          </p>
        </section>
      </div>
    </div>
  );
};

export default Factor;
