import { useRecoilState } from "recoil";
import atomTheme from "./darkTheme";

export default () => {
  const [theme, setTheme] = useRecoilState(atomTheme);

  const saveTheme = (chosenTheme) => {
    setTheme(chosenTheme);
    window.localStorage.setItem("THEME_SEKOLAH", chosenTheme);
  };

  const toggleTheme = () => {
    saveTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleTheme];
};
