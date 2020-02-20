import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background: rgb(210,238,227);
  background: linear-gradient(0deg, rgba(210,238,227,0.3225665266106442) 35%, rgba(0,239,139,0.3757878151260504) 100%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  margin-top: 0;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    color: #fff;
  }

  p, a {
    color: #fff;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
    font-weight: 500;
    &:hover {
      color: #00ef8b;
    }
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query { 
      image: file(relativePath: { eq: "hero.jpg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      } 
    }
  `)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>FEM + Gatsby &hearts;</h1>
        <p>
          Go to <Link to="/about">about</Link> to learn more about us. &rarr;
      </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
