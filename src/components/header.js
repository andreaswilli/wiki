import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaCode } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#48484A`,
      marginBottom: `4.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 720,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, color: "white" }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            display: "flex",
          }}
        >
          <FaCode style={{ marginRight: "8px" }} />
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
