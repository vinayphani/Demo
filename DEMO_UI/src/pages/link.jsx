import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import firebaseDb from "../api/config";
import TableComponent from "../components/TableComponents";
import APIs from "../api/index";
import { FormInput } from "../components/FormInput";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const [value, setValue] = useState({
    name: "",
    email: "",
    address: "",
    id: "",
  });
  const [ID, setId] = useState(null);
  const [data, setData] = useState(null);

  const getData = async () => {
    setData({
      ...APIs.getFunc(),
    });
  };
  useEffect(() => {
    // getData();
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
  }, []);

  const submitToFireBase = (e) => {
    e.preventDefault();
    if (ID) {
      APIs.updateFunc(ID, value);
    } else {
      APIs.insertFunc(value);
    }
    setId(null);
    setValue({});
  };
  const actionEdit = (id, val) => {
    console.log("dsfhgfhgd", id, val);
    setId(id);
    setValue(val);

    history.push("/app/home", {
      data: {
        id,
        val,
        edit: true,
      },
    });
  };
  
  const actionDelete = (id) => {
    APIs.deleteFunc(id);
  };
  console.log(value, data, ID, "ankitha");
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} container justifyContent="center">
          <div style={{ marginTop: "5%", marginBottom: "1%" }}>
            <Typography variant="h5">Enter Order information</Typography>
          </div>
        </Grid>
        {/* <Grid item md={12}>
          <FormInput
            setValue={setValue}
            value={value}
            submitToFireBase={submitToFireBase}
            ID={ID}
          />
        </Grid> */}
        <button
          onClick={() => {
            // history.push("/app/link");
            // console.log(history, "lllllll");
            history.push(
              "/app/home"
              // (actionDelete = actionDelete),
              // (actionEdit = actionEdit),
              // (data = data || {})
            );
          }}
        >
          Back
        </button>

        <Grid item md={12}>
          <TableComponent
            actionDelete={actionDelete}
            actionEdit={actionEdit}
            data={data || {}}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
