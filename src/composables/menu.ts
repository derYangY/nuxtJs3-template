export const useMenu = () => {
  const menu = useState("menu", () => "index");
  function change_menu(value: string) {
    menu.value = value;
  }
  return {
    menu,
    change_menu,
  };
};
