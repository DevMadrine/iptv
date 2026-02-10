import { createRenderer, Config as LightningConfig, loadFonts } from "@lightningtv/solid";
import { Route } from "@solidjs/router";
import { HashRouter, useFocusManager } from "@lightningtv/solid/primitives";
import AppWrapper from "./screens/AppWrapper";
import NavLayout from "./components/navigation/NavLayout";

import fonts from "./fonts";
import { merge } from "lodash-es";
import { config } from "#devices/common";
import { lazy } from "solid-js";

const RestaurantMealsScreen  = lazy(() => import("./screens/RestaurantMealsScreen"));
const RestaurantScreen = lazy(() => import("./screens/RestaurantScreen"));
const WelcomeScreen = lazy(() => import("./screens/WelcomeScreen"));
const LiveTvScreen = lazy(() => import("./screens/LiveTvScreen"));
const FacilityScreen = lazy(() => import("./screens/FacilityScreen"))


merge(LightningConfig, config.lightning);

const { render } = createRenderer();
loadFonts(fonts);
render(() => {
  useFocusManager(config.keys, config.keyHoldOptions);
  return (
    <HashRouter root={AppWrapper}>
      <Route path="/" component={WelcomeScreen} />
      <Route path="/restaurant-meals/:category" component={RestaurantMealsScreen} />
      <Route path="/tv" component={LiveTvScreen} />
      <Route path="" component={NavLayout}>
        <Route path="/facilities" component={FacilityScreen} />
        <Route path="/restaurant" component={RestaurantScreen} />
      </Route>
    </HashRouter>
  );
});
