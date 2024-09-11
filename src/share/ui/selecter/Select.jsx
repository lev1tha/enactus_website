import { useState, useEffect } from "react";
import style from "./select.module.css";

export default function Select() {
  const [showOption, setShowOption] = useState(false);
  const [defaultValueSelector, setDefaultValueSelector] = useState("Город");
  const [dataCity, setDataCity] = useState({});

  const handleShowOption = () => {
    setShowOption((prev) => !prev);
  };

  useEffect(() => {}, [showOption]);

  return (
    <div className={style.container}>
      <div
        onClick={handleShowOption}
        className={style.select_visible_container}
      >
        <>
          <p>{defaultValueSelector}</p>
        </>
        <div>
          <img src="/assets/svg/artwork.svg" alt="" />
        </div>
      </div>
      {showOption && (
        <div>
          <div></div>
        </div>
      )}
    </div>
  );
}
