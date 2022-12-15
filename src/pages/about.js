import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  missionSection,
  missionInfo,
} from "../page.module.css"

const AboutPage = ({
  data: {
    wpPage: { aboutUsFields },
  },
}) => {
  const goalPicture = getImage(aboutUsFields.goalPicture.localFile)
  const missionPicture = getImage(aboutUsFields.missionPicture.localFile)

  return (
    <Layout pageTitle="About Us">
      <section className={header}>
        <article className={headerInfo}>
          <h2 className={subtitle}>{aboutUsFields.goalTitle}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutUsFields.goalDescription,
            }}
          />
        </article>
        <GatsbyImage
          className={headerPicture}
          image={goalPicture}
          alt={aboutUsFields.goalPicture.altText}
        />
      </section>
      <section className={missionSection}>
        <GatsbyImage
          className={headerPicture}
          image={missionPicture}
          alt={aboutUsFields.missionPicture.altText}
        />
        <article className={missionInfo}>
          <h2 className={subtitle}>{aboutUsFields.missionTitle}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutUsFields.missionDescription,
            }}
          />
        </article>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
  wpPage(slug: {eq: "about-us"}) {
    aboutUsFields {
      goalDescription
      goalTitle
      goalPicture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      missionTitle
      missionDescription
      missionPicture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`