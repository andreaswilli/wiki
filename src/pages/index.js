import React from "react"
import qs from "qs"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

export default ({ data, location }) => {
  const {
    allMarkdownRemark: { nodes: posts },
  } = data
  const tag = qs.parse(location.search, { ignoreQueryPrefix: true }).tag

  return (
    <Layout>
      <SEO title={tag || "Pages"} />
      <h1>
        {tag ? (
          <>
            <span>Tag: {tag} </span>
            <Link to="/">x</Link>
          </>
        ) : (
          "Pages"
        )}
      </h1>
      <ul className="posts">
        {posts
          .filter(
            ({ frontmatter: { tags } }) =>
              tag === undefined || tags.indexOf(tag) !== -1
          )
          .sort(({ frontmatter: { date: a } }, { frontmatter: { date: b } }) =>
            a < b ? 1 : a > b ? -1 : 0
          )
          .map(({ frontmatter: { path, title }, excerpt }) => (
            <li key={path} className="posts__post">
              <Link to={path} className="posts__post__link">
                <h3 className="posts__post__link__title">{title}</h3>
                {excerpt && <div>{excerpt}</div>}
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export const allPostsQuery = graphql`
  query AllPosts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          path
          date
          tags
        }
        excerpt
      }
    }
  }
`
