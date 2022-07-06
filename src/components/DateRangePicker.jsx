import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateRangePicker = () => {
  const [values, setValues] = useState([
    new DateObject({ calendar: persian, year: 1400, month: 12, day: 28 }),
    new DateObject({ calendar: persian, year: 1401, month: 12, day: 28 }),
  ]);

  return (
    <div className="flex items-center justify-between rounded-lg border border-[#AEAEAE] pl-3">
      <DatePicker
        style={{
          width: "100%",
          height: "40px",
          textAlign: "center",
          borderRadius: "8px",
          border: "none",
          outline: "none",
        }}
        containerStyle={{
          width: "100%",
          border: "none",
        }}
        value={values}
        onChange={setValues}
        range
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        format="DD MMMM YYYY"
      />
      {/* Calandar icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4376 12.9688V4.6875C18.4376 3.82599 17.7366 3.125 16.8751 3.125H15.8594V3.90625C15.8594 4.33777 15.5097 4.6875 15.0782 4.6875C14.6467 4.6875 14.2969 4.33777 14.2969 3.90625V3.125H10.7422V3.90625C10.7422 4.33777 10.3925 4.6875 9.96098 4.6875C9.52946 4.6875 9.17973 4.33777 9.17973 3.90625V3.125H5.66409V3.90625C5.66409 4.33777 5.31436 4.6875 4.88283 4.6875C4.45131 4.6875 4.10158 4.33777 4.10158 3.90625V3.125H3.12501C2.2635 3.125 1.56251 3.82599 1.56251 4.6875V16.875C1.56251 17.7365 2.2635 18.4375 3.12501 18.4375H16.8751C17.7366 18.4375 18.4376 17.7365 18.4376 16.875C18.4376 16.4435 18.7873 16.0938 19.2188 16.0938C19.6504 16.0938 20.0001 16.4435 20.0001 16.875C20.0001 18.5982 18.5983 20 16.8751 20H3.12501C1.40183 20 0 18.5982 0 16.875V4.6875C0 2.96432 1.40183 1.5625 3.12501 1.5625H4.10158V0.78125C4.10158 0.349731 4.45131 0 4.88283 0C5.31436 0 5.66409 0.349731 5.66409 0.78125V1.5625H9.17973V0.78125C9.17973 0.349731 9.52946 0 9.96098 0C10.3925 0 10.7422 0.349731 10.7422 0.78125V1.5625H14.2969V0.78125C14.2969 0.349731 14.6467 0 15.0782 0C15.5097 0 15.8594 0.349731 15.8594 0.78125V1.5625H16.8751C18.5983 1.5625 20.0001 2.96432 20.0001 4.6875V12.9688C20.0001 13.4003 19.6504 13.75 19.2188 13.75C18.7873 13.75 18.4376 13.4003 18.4376 12.9688ZM15.8594 12.3828V14.2188C15.8594 15.0803 15.1585 15.7812 14.2969 15.7812H12.461C11.5995 15.7812 10.8985 15.0803 10.8985 14.2188V12.3828C10.8985 11.5213 11.5995 10.8203 12.461 10.8203H14.2969C15.1585 10.8203 15.8594 11.5213 15.8594 12.3828ZM14.2979 14.2188L14.2969 12.3828H12.461V14.2188H14.2969H14.2979Z"
          fill="#828282"
        />
      </svg>
    </div>
  );
};

export default DateRangePicker;
