import { useEffect, useState } from "react";
import style from "./home.module.css";
import UniversityCart from "../../share/components/cartUniversity";
import Select from "../../share/ui/selecter/Select";

export default function Home() {
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
        <input type="text" placeholder="Поиск..." />
        <Select />

        <button></button>
      </div>

      <div className="university_list">
        <UniversityCart />
      </div>
    </div>
  );
}
