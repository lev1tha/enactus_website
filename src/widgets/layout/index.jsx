import React from "react";
import style from "./layout.module.css";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className={style.layout_container}>
      <div className="logotype">
        <img src="/assets/svg/fulllogo.svg" alt="" />
      </div>
      <form>
        <img src="/assets/svg/search.svg" alt="" />
        <input type="text" placeholder="Поиск..." />
      </form>
      <nav>
        <div>
          <img src="/assets/svg/univer.svg" alt="" />
          <Link>
            <span>Универитеты</span>
          </Link>
        </div>
        <div>
          <img src="/assets/svg/command.svg" alt="" />
          <Link>
            <span>Команды</span>
          </Link>
        </div>
        <div>
          <img src="/assets/svg/task.svg" alt="" />
          <Link>
            <span>Проекты</span>
          </Link>
        </div>
        <div>
          <img src="/assets/svg/man.svg" alt="" />
          <Link>
            <span>Участники</span>
          </Link>
        </div>
      </nav>
      <button className={style.exit}>
        <img src="/assets/svg/exit.svg" alt="" />
        <Link>
          <span>Войти</span>
        </Link>
      </button>
    </div>
  );
}
