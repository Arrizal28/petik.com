import "./flighttable.scss";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getscheduleFlight } from "../../../Redux/Actions/airportAction";
import { deleteflight } from "../../../Redux/Actions/adminAction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

import { Pagination, Popconfirm } from "antd";

const FlightTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { flight } = useSelector((state) => state.airport);

  useEffect(() => {
    dispatch(getscheduleFlight(page, 10));
  }, [page, dispatch]);

  const cancel = (e) => {};

  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Id</TableCell>
              <TableCell className="tableCell">Airline</TableCell>
              <TableCell className="tableCell">Origin</TableCell>
              <TableCell className="tableCell">Destination</TableCell>
              <TableCell className="tableCell">Departure Date</TableCell>
              <TableCell className="tableCell">Arrival Date</TableCell>
              <TableCell className="tableCell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flight?.data?.result.map((item) => {
              return (
                <>
                  <TableRow key={item.id}>
                    <TableCell className="tableCell">{item.id}</TableCell>
                    <TableCell className="tableCell">{item.airline}</TableCell>
                    <TableCell className="tableCell">{item.origin}</TableCell>
                    <TableCell className="tableCell">
                      {item.destination}
                    </TableCell>
                    <TableCell className="tableCell">
                      {item.departureDate}
                    </TableCell>
                    <TableCell className="tableCell">
                      {item.arrivalDate}
                    </TableCell>
                    <TableCell className="tableCell">
                      <EditIcon
                        cursor="pointer"
                        onClick={() => {
                          navigate(`/admin/form/${item.id}`);
                        }}
                      />
                      <Popconfirm
                        title="Delete the Flight Schedule"
                        description="Are you sure to delete this Flight Schedule?"
                        onConfirm={(e) => {
                          e.preventDefault();
                          dispatch(deleteflight(item.id));
                          navigate("/adminhome");
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteIcon cursor="pointer" />
                      </Popconfirm>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        current={flight?.data?.pageNumber}
        total={flight?.data?.totalRows}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </>
  );
};

export default FlightTable;
