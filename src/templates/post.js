import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCalendar, FaGlobe, FaTag } from "react-icons/fa"

import "./post.css"

export default ({ data }) => {
  const { markdownRemark: post } = data
  const date = new Date(post.frontmatter.date).toLocaleDateString("de-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  const {
    frontmatter: { title, tags, source },
  } = post

  const getDomain = url => {
    const urlArr = url.split(".")
    const domainWithProtocol = urlArr[urlArr.length - 2]
    const tldWithPath = urlArr[urlArr.length - 1]
    const domainWithProtocolArr = domainWithProtocol.split("/")
    const domain = domainWithProtocolArr[domainWithProtocolArr.length - 1]
    const tld = tldWithPath.split("/")[0]
    return `${domain}.${tld}`
  }

  return (
    <Layout>
      <SEO title={title} />
      <div className="post__header">
        <div className="post__header__date">
          <FaCalendar className="post__header__date__icon" />
          <div>{date}</div>
        </div>
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="post__header__source"
          >
            <FaGlobe className="post__header__source__icon" />
            <div>{getDomain(source)}</div>
          </a>
        )}
        <h1 className="post__header__title">{title}</h1>
        <div className="post__header__tags">
          {tags.map(tag => (
            <Link to={`/?tag=${tag}`} key={tag} className="post__header__tag">
              <FaTag className="post__header__tag__icon" />
              <div>{tag}</div>
            </Link>
          ))}
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        tags
        source
      }
    }
  }
`
