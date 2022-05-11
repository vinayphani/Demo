import React from "react";
import route from "../route/index";
import { Route, Switch, Redirect } from "react-router-dom";
class AdminLayout extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {route.map((itm, key) => (
              <Switch>
                <Route path={itm.url} component={itm.component} key={key} />
                <Redirect exact from="/" to="/app/home" />
              </Switch>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default AdminLayout;
