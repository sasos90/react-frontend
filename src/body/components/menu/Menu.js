import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

class Menu extends Component {

  renderMenu() {
    const menu = [
      {
        headline: {title: 'Overview', link: '/', exact: true}
      }, {
        headline: {title: 'Team', link: '/players'},
        subItems: [
          {title: 'Players', link: '/players'},
          {title: 'Tactics', link: '/tactics'},
          {title: 'Training', link: '/training'},
          {title: 'Hire players', link: '/hireplayers'}
        ]
      }, {
        headline: {title: 'Matches', link: '/tournaments'},
        subItems: [
          {title: 'Tournaments', link: '/tournaments'},
          {title: 'Sign in', link: '/signtournament'}
        ]
      }, {
        headline: {title: 'User', link: '/settings'},
        subItems: [
          {title: 'Settings', link: '/settings'},
          {title: 'Find user', link: '/finduser'},
          {title: 'Forum', link: '/forum'},
          {title: 'Help & Support', link: '/support'}
        ]
      }, {
        headline: {title: 'Logout', link: '/logout', exact: true}
      }
    ];

    return <div>{menu.map((item, a) => {
      return <div key={a}>
        <div className="menu-headline"><NavLink to={item.headline.link} exact={item.headline.exact} activeClassName={`active`}>{item.headline.title}</NavLink></div>
          {item.subItems &&
            <ul>
              {item.subItems.map((subItem, b) => (
                <li key={b}><NavLink to={subItem.link} activeClassName={`active`}>{subItem.title}</NavLink></li>
              ))}
            </ul>}
      </div>;
    })}</div>;
  }

  render() {
    return (
      <div className="Menu">
        <div>Menu</div>
        {this.renderMenu()}
      </div>
    );
  }
}

export default Menu;
