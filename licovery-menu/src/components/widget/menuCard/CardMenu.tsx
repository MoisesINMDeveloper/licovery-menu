import MenuCard from "../../ui/menu-card/menuCard";
import Content from "./content.json";

export const CardMenu = () => {
  return (
    <div>
      {Content.categories.map((menuProducts, i) => (
        <MenuCard key={i} menuProducts={menuProducts} />
      ))}
    </div>
  );
};
