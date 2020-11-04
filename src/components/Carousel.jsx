import React from "react";
import "./carousel.scss";
import "./carousel.js";

const Carousel = () => {
  return (
    <div>
      <div class="container">
        <header class="header">
          <a class="header__logo">
            mir<span>r</span>or
          </a>
          <nav class="header__menu">
            <ul class="header__menu__list">
              <li class="header__menu__item">
                <a class="header__menu__link">works</a>
              </li>
              <li class="header__menu__item">
                <a class="header__menu__link">culture</a>
              </li>
              <li class="header__menu__item">
                <a class="header__menu__link">news</a>
              </li>
              <li class="header__menu__item">
                <a class="header__menu__link">careers</a>
              </li>
              <li class="header__menu__item">
                <a class="header__menu__link">contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="sliders-container">
          <ul class="pagination">
            <li class="pagination__item">
              <a class="pagination__button"></a>
            </li>
            <li class="pagination__item">
              <a class="pagination__button"></a>
            </li>
            <li class="pagination__item">
              <a class="pagination__button"></a>
            </li>
            <li class="pagination__item">
              <a class="pagination__button"></a>
            </li>
          </ul>
        </main>
        <footer class="footer">
          <nav class="footer__menu">
            <ul class="footer__menu__list">
              <li class="footer__menu__item">
                <a class="footer__menu__link">facebook</a>
              </li>
              <li class="footer__menu__item">
                <a class="footer__menu__link">dribbble</a>
              </li>
              <li class="footer__menu__item">
                <a class="footer__menu__link">instagram</a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Carousel;
