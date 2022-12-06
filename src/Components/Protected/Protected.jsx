import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { whoami } from "../../Redux/Actions/authaction";
import { useDispatch, useSelector } from "react-redux";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [token, navigate]);

  useEffect(() => {
    (async () => {
      if (token) {
        dispatch(
          whoami((status) => {
            if (status === 401) {
              navigate("/login");
            }
          })
        );
      }
    })();
  }, [token, navigate, dispatch]);

  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
}

export default Protected;
