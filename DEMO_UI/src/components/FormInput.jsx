import react from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
export const FormInput = (props) => {
  const { setValue, value, submitToFireBase, ID } = props;
  return (
    <form onSubmit={submitToFireBase}>
      <Grid container spacing={2}>
        <Grid item md={12} container justifyContent="center">
          <div style={{ display: "flex", width: "30%", alignItems: "center" }}>
            <Typography variant="body1" style={{ paddingRight: 4 }}>
              {" "}
              Order Name:{" "}
            </Typography>

            <TextField
              required
              variant="outlined"
              size="small"
              fullWidth
              value={value.name || ""}
              onChange={(e) => {
                setValue({
                  ...value,
                  name: e.target.value,
                });
              }}
            />
          </div>
        </Grid>
        <Grid item md={12} container justifyContent="center">
          <div style={{ display: "flex", width: "30%", alignItems: "center" }}>
            <Typography variant="body1" style={{ paddingRight: 4 }}>
              {" "}
              Order Number:{" "}
            </Typography>
            <TextField
              required
              value={value.number || ""}
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => {
                setValue({
                  ...value,
                  number: e.target.value,
                });
              }}
            />
          </div>
        </Grid>
        <Grid item md={12} container justifyContent="center">
          <div style={{ display: "flex", width: "30%", alignItems: "center" }}>
            <Typography variant="body1" style={{ paddingRight: 4 }}>
              {" "}
              Order Address:{" "}
            </Typography>
            <TextField
              required
              value={value.address || ""}
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => {
                setValue({
                  ...value,
                  address: e.target.value,
                });
              }}
            />
          </div>
        </Grid>
        <Grid item md={12} container justifyContent="center">
          <div style={{ display: "flex", width: "30%", alignItems: "center" }}>
            <Typography variant="body1" style={{ paddingRight: 4 }}>
              {" "}
              Order Id:{" "}
            </Typography>
            <TextField
              required
              value={value.id || ""}
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => {
                setValue({
                  ...value,
                  id: e.target.value,
                });
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          md={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={2}>
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                style={{ marginLeft: 30 }}
              >
                {ID ? "EDIT" : "SAVE"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
