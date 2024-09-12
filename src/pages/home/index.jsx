import { useEffect, useState } from "react";
import style from "./home.module.css";
import UniversityCart from "../../share/components/cartUniversity";
import Select from "../../share/ui/selecter/Select";

export default function Home() {
  const [cityData, setDataCity] = useState("Город");
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const data = [
        { name: "ОшГУ", city: "Ош" },
        { name: "ОшТУ", city: "Ош" },
        { name: "ОшКУУ", city: "Ош" },
        { name: "КГУ", city: "Бишкек" },
        { name: "БГУ", city: "Баткен" },
        { name: "АУЦА", city: "Бишкек" },
        { name: "КГМА", city: "Бишкек" },
        { name: "ДЖГУ", city: "Джалал-Абад" },
        { name: "УрФУ", city: "Екатеринбург" },
      ];
      setUniversities(data);
    };

    fetchUniversities();
  }, []);

  useEffect(() => {
    if (cityData === "Город") {
      setFilteredUniversities(universities);
    } else {
      const filtered = universities.filter(
        (university) => university.city === cityData
      );
      setFilteredUniversities(filtered);
    }
  }, [cityData, universities]);

  return (
    <div className={style.container_home_page}>
      <div className={style.title_inner}>
        <div className="title">
          <h1>Университеты</h1>
        </div>
        <div className="suptitle">
          <p>Познакомьтесь с нашими университетами</p>
        </div>
      </div>

      <div className={style.search_param}>
        <div className={style.search_form}>
          <input type="text" placeholder="Поиск..." />
          <Select
            initialValue={"Город"}
            cityData={cityData}
            setDataCity={setDataCity}
          />
        </div>
        <button className={style.button_search}>Поиск</button>
      </div>

      <div className={style.university_list}>
        {filteredUniversities.map((university, index) => (
          <UniversityCart key={index} university={university} />
        ))}
      </div>
    </div>
  );
}
