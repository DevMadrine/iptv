import { createRenderer, Config as LightningConfig, loadFonts } from "@lightningtv/solid";
import { Route } from "@solidjs/router";
import { HashRouter, useFocusManager } from "@lightningtv/solid/primitives";
import App from "./screens/App";

import fonts from "./fonts";
import { merge } from "lodash-es";
import { config } from "#devices/common";
import { lazy } from "solid-js";

const RestaurantMealsScreen  = lazy(() => import("./screens/RestaurantMealsScreen"));
const RestaurantScreen = lazy(() => import("./screens/RestaurantScreen"));
const WelcomeScreen = lazy(() => import("./screens/WelcomeScreen"));
const LiveTvScreen = lazy(() => import("./screens/LiveTvScreen"))


merge(LightningConfig, config.lightning);

const { render } = createRenderer();
loadFonts(fonts);
render(() => {
  useFocusManager(config.keys, config.keyHoldOptions);
  return (
    <HashRouter root={App}>
      {/* <Route path="/" component={WelcomeScreen} /> */}
      <Route path="/" component={RestaurantScreen} /> 
      <Route path="/restaurant-meals/:category" component={RestaurantMealsScreen} />
      {/* <Route path="/" component={LiveTvScreen} />  */}
    </HashRouter>
  );
});
