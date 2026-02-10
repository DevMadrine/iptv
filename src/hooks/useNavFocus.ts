import { activeElement, ElementNode } from "@lightningtv/solid";

export function useNavFocus(
  getNavMenu: () => ElementNode | undefined,
  getPageContainer: () => ElementNode | undefined,
) {
  let lastFocused: ElementNode | undefined;

  function hasFocus(node?: ElementNode) {
    return !!node?.states?.has?.("$focus");
  }

  function focusNavMenu() {
    const navMenu = getNavMenu();
    if (!navMenu) return false;
    if (hasFocus(navMenu)) return false;

    lastFocused = activeElement() || lastFocused || getPageContainer();
    try {
      navMenu.setFocus?.();
      return true;
    } catch {
      return false;
    }
  }

  function restoreFocus() {
    (lastFocused || getPageContainer())?.setFocus?.();
  }

  function shouldRestoreFromNav() {
    const navMenu = getNavMenu();
    return hasFocus(navMenu) && activeElement() !== lastFocused;
  }

  return { hasFocus, focusNavMenu, restoreFocus, shouldRestoreFromNav };
}
