/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import styles from './index.styl'

class LeftMenu extends Page {
  render () {
    const {curUrl} = this.props
    return (
      <aside>
        <div id="sidebar"  className="nav-collapse ">
          <ul className="sidebar-menu" id="nav-accordion">
            <p className="centered">
              <a href="/"></a>
            </p>
            <h5 className="centered">喵喵喵</h5>
            <li className="mt">
              <a className={curUrl == 'index' ? "active" : ''} href="/#">
                <span>首页</span>
              </a>
            </li>
            <li className="mt">
              <a href="#/list" className={curUrl == 'list' ? "active mt" : "mt"}>
                <span>列表</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}

module.exports = LeftMenu