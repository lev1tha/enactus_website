import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./navigate.module.css";
import Burger from "../../share/components/burger";

export default function Index() {
  const defaultWindowSize = 800;
  const [windowSize, setWinodwSize] = useState(false);
  const [modalBurger, setModalBurger] = useState(false);

  useEffect(() => {
    const currentSize = window.innerWidth;

    if (currentSize >= defaultWindowSize) setWinodwSize(true);
    else setWinodwSize(false);
  }, [windowSize]);

  const handleMenuCall = () => {
    setModalBurger((prev) => !prev);
  };

  return (
    <>
      <div className={style.navigation_container}>
        <div
          className={
            modalBurger ? style.logo_navigate_active : style.logo_navigation
          }
        >
          <img src="/assets/svg/logo.svg" alt="logotype" />
        </div>
        {windowSize ? (
          <>
            <nav className={style.navigation_list}>
              <Link>
                <span>Сообщество</span>
              </Link>
              <Link>
                <span>О нас</span>
              </Link>
              <Link>
                <span>Что мы делаем</span>
              </Link>
              <Link>
                <span>Услуги</span>
              </Link>
              <Link>
                <span>Ивенты</span>
              </Link>
              <Link>
                <span>Новости</span>
              </Link>
              <Link>
                <span></span>
              </Link>
              <Link>
                <span>Контакты</span>
              </Link>
              <Link>
                <span>Публикации</span>
              </Link>
              <Link>
                <span>WorldWide</span>
              </Link>
            </nav>
            <button className={style.button_call}>Связаться</button>
          </>
        ) : (
          <div className={style.menu} onClick={handleMenuCall}>
            <img src="/assets/svg/menu.svg" alt="" />
          </div>
        )}
      </div>
      {modalBurger && <Burger />}
    </>
  );
}
