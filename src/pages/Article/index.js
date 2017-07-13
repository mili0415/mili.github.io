/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import fetch from 'utils/fetch'
import articleList from 'data/article'
import highlight from 'highlight.js'
import LeftMenu from '../LeftMenu'
import styles from './index.styl'

export default class extends Page {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: '匿名',
      createTime: '',
      title: '',
      tags: []
    }
  }

  componentDidMount() {
    let {params} = this.props
    let {path} = params
    let article = articleList.find(v => v.filename == path)
    article.component().then(content => {
      this.setState({
        content,
        author: article.author,
        createTime: article.createTime,
        title: article.title,
        tags: article.tags || []
      });
    });
    this.setState({pageTitle: document.title});
    document.title = article.title;
  }
  componentWillUnmount() {
    document.title = this.state.pageTitle;
  }
  componentDidUpdate(prevProps, prevState) {
    var blocks = Array.from(document.querySelectorAll('pre code'));
    blocks.forEach(block => highlight.highlightBlock(block));
  }

  render () {
    let {content, author, createTime, title, tags} = this.state
    return (
      <div className="article">
        <LeftMenu curUrl="list" />
        {
          !!content
          ?  <section id="main-content">
              <section className="wrapper">
                <h1>{title}</h1>
                <div className="author">
                  <span>{author},   {createTime}</span>
                </div>
                <div className="article-tags">
                  {
                    tags.map(v => <span>{v}</span>)
                  }
                </div>
                <div dangerouslySetInnerHTML={{__html: content}}></div>
              </section>
            </section>
          : null
        }
      </div>
    )
  }
}