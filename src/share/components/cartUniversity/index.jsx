import style from "./unicart.module.css";

export default function UniversityCart({ university }) {
  return (
    <div className={style.container}>
      <div className={style.visible_class}>
        {/* university.img */}
        <div className={style.hover_class}>
          <h3>{university.name}</h3>
          <p>{university.city}</p>
        </div>
      </div>
    </div>
  );
}
