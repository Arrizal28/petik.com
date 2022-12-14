import React from "react";
import "./flightitem.css";
import { Divider, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { flightid } from "../../Redux/Actions/bookingAction";

function FlightItem() {
  const dispatch = useDispatch();
  const { listflight } = useSelector((state) => state.airport);
  const navigate = useNavigate();

  return (
    <>
      {listflight?.data?.map((item) => {
        return (
          <div className="flightitem " key={item.id}>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex flex-column align-items-start fitem rounded-4">
                <div className="d-flex flex-column w-100 px-3 py-2">
                  <div>{item.airline}</div>
                  <div className="d-flex flex-md-row flex-wrap w-100 justify-content-between align-items-center tiket px-3">
                    <div className="d-flex flex-row align-items-start content1">
                      <h2 className="fw-md-bold time">{item.departureTime}</h2>
                      <h2 className="tgray">{item.origin}</h2>
                    </div>
                    <div className="d-flex flex-column align-items-start content2">
                      <h5 className="tgray">{item.departureDate}</h5>
                    </div>
                    <div className="d-flex flex-row align-items-start content3">
                      <h2 className="fw-md-bold time">{item.arrivalTime}</h2>
                      <h2 className="tgray">{item.destination}</h2>
                    </div>
                    <div className="d-flex flex-column align-items-start content4">
                      <h5 className="tgray">{item.arrivalDate}</h5>
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex flex-row w-100 justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-start">
                      <h4 className="fw-bold tblue">1 stop</h4>
                    </div>
                    <div className="d-flex flex-row align-items-start">
                      <Button
                        type="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(flightid(item.id));
                          navigate(`/inputdata/${item.id}`);
                        }}
                      >
                        Choose
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FlightItem;
