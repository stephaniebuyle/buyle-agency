import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  companyInfo,
  socials,
  facebook,
  instagram,
  link
} from "../page.module.css"

const ContactPage = ({
    data: {
      wpPage: { contactUsFields },
    },
  }) => {
    const image = getImage(contactUsFields.picture.localFile)
  
    return (
      <Layout>
        <section className={header}>
          <article className={headerInfo}>
            <h2 className={subtitle}>{contactUsFields.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: contactUsFields.description,
              }}
            />
            <div className={companyInfo}>
              <a className={link} href={`mailto:${contactUsFields.email}`}>
                {contactUsFields.email}
              </a>
              <a className={link} href={`tel:${contactUsFields.phoneNumber}`}>
                {contactUsFields.phoneNumber}
              </a>
              <p>{`${contactUsFields.address}, ${contactUsFields.zipCode} ${contactUsFields.city}`}</p>
              <div className={socials}>
                Follow us:
                <a
                  className={instagram}
                  target="__blank"
                  href={contactUsFields.instagram}
                >
                  {" "}
                </a>
                <a
                  className={facebook}
                  target="__blank"
                  href={contactUsFields.facebook}
                >
                  {" "}
                </a>
              </div>
            </div>
          </article>
          <GatsbyImage
            className={headerPicture}
            image={image}
            alt={contactUsFields.picture.altText}
          />
        </section>
      </Layout>
    )
  }

export default ContactPage

export const query = graphql`
  query {
   wpPage(slug: {eq: "contact-us"}) {
    contactUsFields {
      description
      title
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      address
      city
      email
      phoneNumber
      zipCode
      facebook
      instagram
    }
  }
 }
`