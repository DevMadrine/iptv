import { createWelcomeModel} from "@/models/welcomeModel/welcomeData";
import { WelcomeNavigationView } from "@/views/welcome/welcomeNavigationView";


export default function WelcomeController() {
  const model = createWelcomeModel();

  function handleNavigation(route: string) {
    console.log("Navigate to:", route);

    // later:
    // router.navigate(route)
    // or firebolt.launchApp(route)
  }

  return (
    <WelcomeNavigationView
      items={model.navigationItems}
      onSelect={handleNavigation}
    />
  );
}
