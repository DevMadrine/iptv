import { createRenderer, Config as LightningConfig, loadFonts } from "@lightningtv/solid";
import { Route } from "@solidjs/router";
import { HashRouter, useFocusManager } from "@lightningtv/solid/primitives";
import AppWrapper from "../../../App";
import NavLayout from "../../../shared/navigation/NavLayout";

import fonts from "../../../fonts";
import { merge } from "lodash-es";
import { config } from "#devices/common";
import { lazy } from "solid-js";

const RestaurantMealsScreen = lazy(() => import("../pages/RestaurantMealsScreen"));
const RestaurantScreen = lazy(() => import("../pages/RestaurantScreen"));
const WelcomeScreen = lazy(() => import("../../welcome/pages/WelcomeScreen"));
const LiveTvScreen = lazy(() => import("../../tv/pages/LiveTvScreen"));
const FacilityScreen = lazy(() => import("../../facilities/pages/FacilityScreen"));
const SettingsScreen = lazy(() => import("../../settings/pages/SettingsScreen"));

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
      <Route path="/settings" component={SettingsScreen} />
      <Route path="" component={NavLayout}>
        <Route path="/facilities" component={FacilityScreen} />
        <Route path="/restaurant" component={RestaurantScreen} />
      </Route>
    </HashRouter>
  );
});
