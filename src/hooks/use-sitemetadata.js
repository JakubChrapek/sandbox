import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          author
          title
          description
          company
        }
      }
    }
  `);
  return data.site.siteMetadata;
}

export default useSiteMetadata;