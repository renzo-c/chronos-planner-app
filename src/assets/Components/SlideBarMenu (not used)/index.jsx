import React from 'react';
import '../../../styles/slideBarMenu.css';

const SlideBarMenu = () => (
  <div className="area">
    <nav className="mainMenu">
      <ul>
        <li>
          <a href="./home">
            <i className="fa fa-home fa-2x" />
            <span className="nav-text">Dashboard </span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="./home">
            <i className="fa fa-laptop fa-2x" />
            <span className="nav-text">Stars Components </span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="./home">
            <i className="fa fa-list fa-2x" />
            <span className="nav-text">Forms </span>
          </a>
        </li>
        <li>
          <a href="./home">
            <i className="fa fa-bar-chart-o fa-2x" />
            <span className="nav-text">Graphs and Statistics </span>
          </a>
        </li>
        <li>
          <a href="./home">
            <i className="fa fa-font fa-2x" />
            <span className="nav-text">Quotes </span>
          </a>
        </li>
        <li>
          <a href="./home">
            <i className="fa fa-map-marker fa-2x" />
            <span className="nav-text">Tables </span>
          </a>
        </li>
        <li>
          <a href="./home">
            <i className="fa fa-info fa-2x" />
            <span className="nav-text">Documentation </span>
          </a>
        </li>
      </ul>
      <ul className="logout">
        <li>
          <a href="./home">
            <i className="fa fa-power-off fa-2x">
              <span className="nav-text">Logout </span>
            </i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default SlideBarMenu;
