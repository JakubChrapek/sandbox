import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx {
      nodes{
        excerpt
        frontmatter {
          author
          title
          slug
        }
      }
    }
  }
  
  `);
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt
  }))
}

export default usePosts;