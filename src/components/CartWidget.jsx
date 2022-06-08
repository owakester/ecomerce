import Logo from "../carshop.svg";

function CartWidget() {
  return (
    <div className=" rounded-full p-1 bg-cyan-300 opacity-90">
      <img className="m-1 " src={Logo} height={30} width={30} />
      <p className="text-xs font-bold text-red-500">1</p>
    </div>
  );
}

export default CartWidget;
