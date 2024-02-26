import Products from "@/types";
const MenuCard = ({ menuProducts }: { menuProducts: Products }) => {
  return (
    <div>
      {menuProducts.products.map((product, i) => (
        <article
          className="flex flex-col justify-center items-center w-[80vw] my-10 h-auto"
          key={i}
        >
          <div className="flex-col w-[80vw]">
            <span className="text-white text-2xl">{product.title}</span>
            <img
              className="w-contain h-contain my-2 rounded-lg shadow-gray-900 shadow-2xl"
              src={product.images[0]}
              alt={product.title}
            />

            <p className=" text-white mt-2">{product.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default MenuCard;
