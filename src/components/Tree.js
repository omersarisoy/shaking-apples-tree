import Apples from "./Apple";
import { useSelector } from "react-redux";
import { selectAllApples } from "../store/features/treeSlice";
import ShakeButton from "./ShakeButton";
import Basket from "./Basket";
import { TreeImage } from "@/assets/icon";

const Tree = () => {
  const apples = useSelector(selectAllApples);
  const isShake = useSelector(({ tree }) => tree.treeShake);
  const dropControl = apples.filter((item) => {
    return item.onBasket;
  });

  return (
    <>
      <div className="tree-container">
        <TreeImage className={` ${isShake && "tree-shaking"}`} />
          {apples?.map((item) => (
            <Apples
              key={item.id}
              style={item}
              className={` ${isShake && item.isDropped === false ? "apple-shaking" : ""}`}
            />
          ))}
          <ShakeButton disabled={dropControl.length === 12} />
      </div>
      <Basket />
    </>
  );
}

export default Tree

