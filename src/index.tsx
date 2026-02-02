import { createRenderer, Config as LightningConfig, loadFonts } from "@lightningtv/solid";
import { Route } from "@solidjs/router";
import { HashRouter, useFocusManager } from "@lightningtv/solid/primitives";
import App from "./screens/App";

import fonts from "./fonts";
import { merge } from "lodash-es";
import { config } from "#devices/common";
import WelcomeScreen from "./screens/WelcomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import RestaurantMealsScreen from "./screens/restaurantMealsScreen";

merge(LightningConfig, config.lightning);

const { render } = createRenderer();
loadFonts(fonts);
render(() => {
  useFocusManager(config.keys, config.keyHoldOptions);
  return (
    <HashRouter root={App}>
      {/* <Route path="/" component={WelcomeScreen} /> */}
      {/* <Route path="/" component={RestaurantScreen} />  */}
      <Route path="/" component={RestaurantMealsScreen} /> 
    </HashRouter>
  );
});
