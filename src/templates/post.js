import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
  return (
    <Layout>
      <SEO title={title} />
      <div className="post__header">
        <div className="post__header__date">{date}</div>
        <h1 className="post__header__title">{title}</h1>
        {tags.map(tag => (
          <Link to={`/?tag=${tag}`} key={tag} className="post__header__tag">
            {tag}
          </Link>
        ))}
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="post__header__source"
          >
            source
          </a>
        )}
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
