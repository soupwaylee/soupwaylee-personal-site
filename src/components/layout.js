import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <React.Fragment>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks} 
          />
          <main
            style={{
              margin: "0 auto",
              maxWidth: 650,
              padding: "1.45rem 1rem 1.45rem 1rem",
            }}
          >
            {children}
          </main>
          <Footer/>
        </React.Fragment>
      )
    }}
  />
)

export default Layout
