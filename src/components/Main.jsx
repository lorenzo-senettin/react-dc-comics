import React from "react";
import comics from "../data/comics.js";

export default function Main() {
  return (
    <main className="main">
      <div className="content-container">
        <div className="comics-cards-container">
          {comics.map((comic, index) => (
            <div className="comic-card" key={index}>
              <img src={comic.thumb} alt={comic.title} />
              <p>{comic.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="feature-menu">
        <ul>
          <li>
            <a href="DIGITAL COMICS">
              <img src="./buy-comics-digital-comics.png" alt="digital comics" />
              <p>digital comics</p>
            </a>
          </li>
          <li>
            <a href="MERCHANDISE">
              <img src="./buy-comics-merchandise.png" alt="dc merchandise" />
              <p>dc merchandise</p>
            </a>
          </li>
          <li>
            <a href="SUBSCRIPTIONS">
              <img src="./buy-comics-subscriptions.png" alt="subscriptions" />
              <p>subscriptions</p>
            </a>
          </li>
          <li>
            <a href="SHOP LOCATOR">
              <img src="./buy-comics-shop-locator.png" alt="shop locator" />
              <p>comic shop locator</p>
            </a>
          </li>
          <li>
            <a href="POWER VISA">
              <img src="./buy-dc-power-visa.svg" alt="power visa" />
              <p>dc power visa</p>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
