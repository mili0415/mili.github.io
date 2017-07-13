/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import LeftMenu from '../LeftMenu'
import styles from './index.styl'

import articleList from 'data/article'

export default class Index extends Page {
  render () {
    return (
      <div>
        <LeftMenu curUrl="list"/>
        <section id="main-content">
          <section className="wrapper">
            {
              articleList.map((v, k) => {
                return (
                  <div key={k} className="item">
                    <div className="article-header">
                      <a className="article-title">{v.title}</a>
                      <span className="article-author">{v.createTime}</span>
                    </div>
                    <div className="article-info">
                      <p>{v.summary}</p>
                    </div>
                    <div className="article-more-link">
                      <a href={`#/article/${v.filename}`}>查看全文 >></a>
                    </div>
                  </div>
                )
              })
            }
          </section>
        </section>
      </div>
    )
  }
}