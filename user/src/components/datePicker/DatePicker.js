import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import "react-datepicker/dist/react-datepicker.css";
import "./chakra-react-datepicker.css";
import SelectField from "../common/SelectField";
import { generateTimeOptions } from "../../utils";

const customDateInput = ({ value, onClick, onChange }, ref) => (
  <Input
    placeholder="Date"
    autoComplete="off"
    background="white"
    value={value}
    ref={ref}
    onClick={onClick}
    onChange={onChange}
    _focus={{
      borderColor: "#e5e7eb",
      boxShadow: "none",
    }}
    readOnly
  />
);
customDateInput.displayName = "DateInput";

const CustomInput = forwardRef(customDateInput);

const icon = <CalendarIcon fontSize="sm" />;

const DatePicker = ({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  pickerName,
  ...props
}) => {
  const times = generateTimeOptions();
  const isDateSelectable = (date) => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return date >= startOfMonth && date <= endOfMonth;
  };

  return (
    <div className="flex flex-col gap-1 mt-[12px] w-full">
      <h6>{pickerName}</h6>
      <div className="flex flex-row justify-between">
        <div className="w-[48%]">
          <InputGroup className="dark-theme">
            <ReactDatePicker
              selected={selectedDate}
              onChange={onDateChange}
              className="react-datepicker__input-text"
              customInput={<CustomInput />}
              dateFormat="MM/dd/yyyy"
              filterDate={isDateSelectable}
              popperPlacement="bottom-start"
              {...props}
            />
            <InputRightElement color="gray.500" children={icon} />
          </InputGroup>
        </div>
        <div className="w-[45%]">
          <SelectField
            label="Time"
            items={times}
            onChange={onTimeChange}
            selectedValue={selectedTime}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
