import { useThemeMode } from "../context/ThemeModeContext";
import { WiMoonAltWaningGibbous1 } from "react-icons/wi";
import { WiMoonAltWaningCrescent6 } from "react-icons/wi";

function ThemeMode() {
  const { isDarkMode, toggleThemeMode } = useThemeMode();
  return (
    <button onClick={toggleThemeMode}>
      {isDarkMode === "light" ? (
        <WiMoonAltWaningGibbous1 className="w-8 h-8" />
      ) : (
        <WiMoonAltWaningCrescent6 className="w-8 h-8" />
      )}
    </button>
  );
}

export default ThemeMode;
