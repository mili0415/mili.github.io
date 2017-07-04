/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import styles from './index.styl'

const ARTICLE_LIST = MY_ARTICLE_DATA;

export default class extends Page {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    console.log(ARTICLE_LIST)
    return (
      <section id="main-content">
        <section className="wrapper">
          {
            ARTICLE_LIST.map((v, k) => {
              return (
                <div key={k} className="item">
                  <div className="article-header">
                    <a className="article-title"  href={`#/article/${v.filename}`}>{v.title}</a>
                    <span className="article-author">时间：{v.createTime}</span>
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
        <nav id="page-nav">
          <a className="extend prev disabled" rel="prev">« Prev</a>
          <span className="page-number current">1</span>
          <a className="page-number" href="/page/2/">2</a>
          <a className="page-number" href="/page/3/">3</a>
          <span className="space">…</span>
          <a className="page-number" href="/page/9/">9</a>
          <a className="extend next" rel="next" href="/page/2/">Next »</a>
        </nav>
      </section>
    )
  }
}