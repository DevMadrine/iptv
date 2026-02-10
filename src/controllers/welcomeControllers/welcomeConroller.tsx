import { createWelcomeModel} from "@/models/welcomeModel/welcomeData";
import { WelcomeNavigationView } from "@/views/welcome/welcomeNavigationView";
import { useNavigate } from "@solidjs/router";


export default function WelcomeController(props: any) {
  const model = createWelcomeModel();
  const navigate = useNavigate();

  function handleNavigation(route: string) {
    navigate(route);
  }

  return (
    <WelcomeNavigationView
      ref={props.ref}
      items={model.navigationItems}
      onSelect={handleNavigation}
      onDown={props.onDown}
    />
  );
}
