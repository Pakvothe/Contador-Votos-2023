import { Redirect, Route, Switch } from "wouter";
import { Landing } from "../pages";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
