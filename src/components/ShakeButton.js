import {
    setTreeShake,
    selectAllApples,
    setAppleDown,
    setAppleBasket,
  } from "../store/features/treeSlice";
import { useDispatch, useSelector } from "react-redux";
  
const ShakeButton = (props) => {
  const isShake = useSelector(({ tree }) => tree.treeShake);
  const apples = useSelector(selectAllApples);
  const dispatch = useDispatch();

  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  function handleShakingTree() {
    dispatch(setTreeShake());
    setTimeout(function () {
      dispatch(setTreeShake());
      handleApplesDown();
    }, 3000);
  }
  
  function handleApplesDown() {
    for (let item = 0; item < apples.length; item++) {
      const fallingtime = generateRandomNumber(1, 5);
      const randomBoolean = generateRandomNumber(0, 2) >= 0.5;
      const basketDistance = generateRandomNumber(445, 585);
      if (apples[item].isDropped === false) {
        dispatch(
          setAppleDown({
            id: item,
            transition: `${fallingtime}s`,
            isDropped: randomBoolean,
          })
        );
      }

      setTimeout(function () {
        dispatch(
          setAppleBasket({ id: item, transition: "3s", left: basketDistance })
        );
      }, fallingtime * 1000 + 1000);
    }
  }
  return (
    <button
      className="shake-button"
      onClick={handleShakingTree}
      disabled={props.disabled || isShake}
    >
      {isShake ? "Apple Tree is Shaking!" : "Shake Apple Tree!"}
    </button>
  );
}

export default ShakeButton
