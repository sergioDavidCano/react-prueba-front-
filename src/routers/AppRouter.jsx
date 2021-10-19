import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
// import { HomeScreen } from "../components/Authh/LoginScreen";
import { AuthRouter } from "./AuthRouter";
import { Pokemons } from "../components/pokemons/Pokemons";
import { CalendarScreen } from "../components/calendary/CalendarScreen";
import { PrivateRoute } from "./routerPermission/PrivateRoute";
import { PublicRoute } from "./routerPermission/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../redux/actions/auth";
import { ColumnsInfo } from "../components/columns/ColumnInfo";
// import { SortingTable } from "../components/columns/SortingTable";
// import { FilteringTable } from "../components/columns/FilteringTable";
// import { PaginationsTable } from "../components/columns/PaginationsTable";
// import { RowSelection } from "../components/columns/RowSelection";
// import { ColumnOrder } from "../components/columns/ColumnOrder";
// import { ColumnHiding } from "../components/columns/ColumnHiding";
// import { StickyTable } from "../components/columns/StickyTable";
export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);
  const { checking } = useSelector((state) => state.auth);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticaded={checking}
          />
          <PrivateRoute
            exact
            path="/calendar"
            component={CalendarScreen}
            isAuthenticaded={checking}
          />
          <PrivateRoute 
          exact 
          path="/pokemons" 
          component={Pokemons} 
          isAuthenticaded={checking}
          />
          <PrivateRoute 
          exact 
          path="/table" 
          component={ColumnsInfo} 
          isAuthenticaded={checking}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
