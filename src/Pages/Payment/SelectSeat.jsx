import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormPayment } from "../../Styled/MUI/PaymentStyle";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function SelectSeat({
  totalSeatNumber,
  requestData,
  setRequestData,
  seatNumber,
  i,
}) {
  const { seatr } = useSelector((state) => state.booking);
  const [isDisabled, setIsDisabled] = useState(false);

  const SeatA = [
    "A01",
    "A02",
    "A03",
    "A04",
    "A05",
    "A06",
    "A07",
    "A08",
    "A09",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
    "A17",
    "A18",
    "A19",
  ];

  function filterArrays(SeatA, seatB) {
    return SeatA.filter(function (value) {
      return seatB.indexOf(value) === -1;
    });
  }
  let uniqueValues = filterArrays(SeatA, seatr);

  return (
    <div>
      <Row style={{ justifyContent: "center", minWidth: 500 }}>
        <FormPayment
          size="small"
          label="Seat A"
          style={{ justifyContent: "center" }}
        >
          <Select
            value={requestData?.seatNumber[i]}
            onChange={(e) => {
              totalSeatNumber = requestData?.seatNumber;
              totalSeatNumber = [...totalSeatNumber, e.target.value];
              setRequestData({
                ...requestData,
                seatNumber: totalSeatNumber,
              });
              setIsDisabled(true);
            }}
            disabled={isDisabled}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>Seat A</em>
            </MenuItem>
            {uniqueValues.map((name, i) => (
              <MenuItem key={i} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormPayment>
      </Row>
    </div>
  );
}
