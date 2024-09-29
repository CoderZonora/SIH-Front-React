import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ui/theme-provider";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="relative flex items-center">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${
          theme === "dark" ? "hidden" : "block text-white"
        }`}
      />
      <div className="absolute left-6">
        <Switch
          checked={theme === "dark"}
          onClick={handleThemeChange}
          className="ml-2"
        />
      </div>
      <Moon
        className={`h-[1.2rem] w-[1.2rem] ${
          theme === "dark" ? "block" : "hidden"
        }`}
      />
    </div>
  );
}
