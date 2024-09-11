import { useState, useEffect } from "react";
import style from "./select.module.css";

export default function Select({ initialValue, cityData, setDataCity }) {
  const [showOption, setShowOption] = useState(false);
  const [defaultValueSelector, setDefaultValueSelector] =
    useState(initialValue);
  const cities = [
    "Ош",
    "Баткен",
    "Джалал-абад",
    "Бишкек",
    "Чуй",
    "Талас",
    "Ыссык-Куль",
    "Нарын",
  ];

  const handleShowOption = () => {
    setShowOption((prev) => !prev);
  };

  const handleSelectCity = (city) => {
    setDefaultValueSelector(city);
    setDataCity(city);
    setShowOption(false);
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
        <div className={style.container_option}>
          {cities.map((city, index) => (
            <div key={index} onClick={() => handleSelectCity(city)}>
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
