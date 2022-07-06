import { useState } from "react";
import { sortAsc, sortDesc } from "../utils/sorting";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const tableHeaders = [
  { id: "1", title: "#" },
  { id: "2", title: "تاریخ" },
  { id: "3", title: "شماره" },
  { id: "4", title: "شرح" },
  { id: "5", title: "بدهکار" },
  { id: "6", title: "بستانکار" },
  { id: "7", title: "تراز" },
  { id: "8", title: "تشخیص" },
];

const toPersianDate = (d) => {
  return new Date(d).toLocaleDateString("fa-IR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
};

const TabularTransactions = ({ data, isAscending, setIsAscending }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [numOfRowsPerPage, setNumOfRowsPerPage] = useState(10);

  //   const [selectedValue, setSelectedValue] = useState(10);

  // sort data before mapping on UI
  let sortedData = () => {
    return isAscending ? data.sort(sortAsc) : data.sort(sortDesc);
  };

  const changeSortingType = () => {
    setIsAscending(!isAscending);
  };

  // callback that handles changing page in react paginate
  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <table className="w-full bg-white">
        <thead className="bg-[#eef5ff]">
          <tr className="text-sm">
            {tableHeaders.map((header) => {
              return header.id === "2" ? (
                <th
                  key={header.id}
                  className="cursor-pointer py-[15px] pr-4 pl-3"
                  onClick={changeSortingType}
                >
                  <div className="flex w-full items-center justify-between">
                    {header.title}
                    <div>
                      <VscTriangleUp
                        color={isAscending ? "#828282" : "#BDBDBD"}
                      />
                      <VscTriangleDown
                        color={!isAscending ? "#828282" : "#BDBDBD"}
                      />
                    </div>
                  </div>
                </th>
              ) : (
                <th key={header.id} className="py-[15px] pr-4 text-right">
                  {header.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-sm font-semibold">
          <tr>
            {tableHeaders.map((_, i) => (
              <td className="px-4 pt-[35px] pb-2" key={i.toString(32)}>
                <div
                  className={`${
                    (i === 0 || i === tableHeaders.length - 1) && "hidden"
                  } h-[1px] w-full bg-[#AEAEAE]`}
                ></div>
              </td>
            ))}
          </tr>
          {sortedData()
            .slice(
              pageNumber * numOfRowsPerPage,
              pageNumber * numOfRowsPerPage + numOfRowsPerPage
            )
            .map((item, index) => (
              <tr key={index.toString(32)}>
                <td className="py-[13px] px-4">{index + 1}</td>
                <td className="py-[13px] px-4">{toPersianDate(item.date)}</td>
                <td className="py-[13px] px-4 text-[#1062D0]">{item.num}</td>
                <td className="py-[13px] px-4 text-[#1062D0]">{item.desc}</td>
                <td className="py-[13px] px-4">
                  <div className="flex items-center justify-between">
                    {item.bedehkarAmount.toLocaleString("fa-IR")}
                    <span className="font-normal text-[#828282]">ریال</span>
                  </div>
                </td>
                <td className="py-[13px] px-4">
                  <div className="flex items-center justify-between">
                    {item.bestankarAmount.toLocaleString("fa-IR")}
                    <span className="font-normal text-[#828282]">ریال</span>
                  </div>
                </td>
                <td className="py-[13px] px-4">
                  <div className="flex items-center justify-between">
                    {item.taraz.toLocaleString("fa-IR")}
                    <span className="font-normal text-[#828282]">ریال</span>
                  </div>
                </td>
                <td className="py-[13px] px-4 text-[#CB0B0B]">
                  {item.tashkhis}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-3 flex items-center justify-between rounded-br-[12px] rounded-bl-[12px] bg-[#FBFBFB] py-3 pl-4 pr-[14px]">
        <ReactPaginate
          previousLabel={<BsChevronRight size="24px" />}
          previousClassName="text-[#AEAEAE]"
          nextLabel={<BsChevronLeft size="24px" />}
          nextClassName="text-[#AEAEAE]"
          disabledLinkClassName="text-[#82828240] cursor-default"
          disabledClassName="text-[#82828240]"
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(sortedData().length / numOfRowsPerPage)}
          onPageChange={onPageChange}
          containerClassName="bg-[#FBFBFB] flex items-center"
          pageClassName="mx-1 text-[#828282]"
          breakClassName="mx-1"
          activeLinkClassName="text-[#1062D0] bg-[#FBFBFB] border border-[#1062D0] rounded-lg cursor-default"
          pageLinkClassName="py-[4px] px-[13px] bg-[#FBFBFB]"
          activeClassName=""
          breakLabel={<FaEllipsisH />}
          forcePage={pageNumber}
        />
        <section className="flex items-center gap-x-2 text-sm text-[#4F4F4F]">
          <p>نشان دادن</p>
          <select
            value={numOfRowsPerPage}
            onChange={(e) => setNumOfRowsPerPage(e.target.value)}
            className="h-8 rounded-lg border border-[#AEAEAE] text-xs font-semibold text-[#1062D0] outline-none"
            id="cars"
            name="cars"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <p>ردیف در صفحه</p>
        </section>
      </div>
    </div>
  );
};

export default TabularTransactions;
