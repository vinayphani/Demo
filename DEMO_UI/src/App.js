import {
  BrowserRouter,
  BrowserRouterProps,
  Route,
  Switch,
} from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
function App() {
  return (
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
        <BrowserRouter>
          <Switch>
            <Route render={(props) => <AdminLayout {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
