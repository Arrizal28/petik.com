import { Button, Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getairport, clear } from "../../Redux/Actions/airportAction";
import { scheduleFlightSearch } from "../../Redux/Actions/airportAction";
import swal from "sweetalert";
import { DatePicker } from "antd";
import "./panel.scss";

function PanelSearch() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [newvalue, setNewvalue] = useState("");
  const sameairport = origin === destination;
  const emptysearch = origin === "" && destination === "";
  const [date, setDate] = React.useState(false);

  function onSelectDate(date, dateString) {
    setDate(dateString);
  }

  const navigate = useNavigate();

  const { resairport } = useSelector((state) => state.airport);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sameairport) {
      swal({
        title: "airports can't be the same!",
        icon: "warning",
        button: "OK",
      });
      return;
    }
    if (emptysearch) {
      swal({
        title: "name airport required!",
        icon: "warning",
        button: "OK",
      });
      return;
    }
    if (origin !== "" && destination !== "" && date !== "") {
      const data = {
        origin: origin,
        destination: destination,
        date: date,
      };
      dispatch(scheduleFlightSearch(data));
      navigate("/searchflight");
    }
  };

  const onChange = (value) => {
    setOrigin(value);
    setNewvalue("");
  };

  const onChangeke = (value) => {
    setDestination(value);
    setNewvalue("");
  };

  const handleSearch = (newvalue) => {
    if (newvalue) {
      setNewvalue(newvalue);
    } else {
      setNewvalue("");
    }
  };

  useEffect(() => {
    if (newvalue === "") {
      dispatch(clear());
      return;
    }
    const timeoutId = setTimeout(() => {
      dispatch(getairport(newvalue));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [newvalue, dispatch]);

  return (
    <div className="container d-flex">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-12 panel col-sm-12 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-lg-12 panel1 col-sm-12 d-flex justify-content-center align-items-center">Ticket Flight</div>
            <div className="row panel2 d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-sm-12">
                <Select
                  showSearch
                  autoClearSearchValue
                  size="large"
                  placeholder="From"
                  optionFilterProp="children"
                  className="lebarm"
                  allowClear
                  filterOption={(input, option) => (option?.label ?? "").toUpperCase().includes(input.toUpperCase())}
                  onSearch={handleSearch}
                  onChange={onChange}
                  options={
                    newvalue.length > 1 &&
                    resairport?.data?.content?.map((item) => ({
                      value: item.iata,
                      label: `${item.servedCity},(${item.iata})${item.name},${item.country.name}`,
                    }))
                  }
                >
                  {newvalue.length > 1 &&
                    (resairport?.data?.content || []).map((item) => {
                      return (
                        <Select.Option key={item.aid} value={item.iata}>
                          `${item.servedCity},($
                          {item.iata})${item.name},$
                          {item.country.name}`
                        </Select.Option>
                      );
                    })}
                </Select>
              </div>
              <div className="col-lg-6 col-sm-12">
                <Select
                  showSearch
                  autoClearSearchValue
                  size="large"
                  placeholder="To"
                  optionFilterProp="children"
                  className="lebarm"
                  allowClear
                  filterOption={(input, option) => (option?.label ?? "").toUpperCase().includes(input.toUpperCase())}
                  onSearch={handleSearch}
                  onChange={onChangeke}
                  options={
                    newvalue.length > 1 &&
                    resairport?.data?.content.map((item) => ({
                      value: item.iata,
                      label: `${item.servedCity},(${item.iata})${item.name},${item.country.name}`,
                    }))
                  }
                >
                  {newvalue.length > 1 &&
                    (resairport?.data?.content || []).map((item) => {
                      return (
                        <Select.Option key={item.aid} value={item.iata}>
                          `${item.servedCity},($
                          {item.iata})${item.name},$
                          {item.country.name}`
                        </Select.Option>
                      );
                    })}
                </Select>
              </div>
            </div>
            <div className="row panel3 justify-content-center">
              <div className="col-lg-6 col-12">
                <DatePicker className="lebarm" size="large" format={"YYYY-MM-DD"} onChange={onSelectDate} />
              </div>
              <div className="col-lg-6 col-12">
                <Button type="primary" size="large" className="lebarmsearchbtn" onClick={handleSubmit}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelSearch;
