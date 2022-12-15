import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  artistName,
  fullName,
  artistRoles,
  artistDescription,
  artistInfo,
  artistPictures,
  artistPicture,
} from "../../page.module.css"

const ArtistPage = ({
  data: {
    wpArtist: {
      artistMeta: artist,
      roles: { nodes: roles },
    },
  },
}) => {

  const image = getImage(artist.profilePicture.localFile)
  const picture1 = getImage(artist.picture1.localFile)
  const picture2 = getImage(artist.picture2.localFile)
  const picture3 = getImage(artist.picture3.localFile)

  return (
    <Layout pageTitle="Artist Template">
      <section className={header}>
        <article className={headerInfo}>
          {artist.artistName && (
            <h3 className={artistName}>{artist.artistName}</h3>
          )}
          <div className={artistRoles}>
            {roles.map((role, i) => (
              <span>
                {role.name} {i + 1 < roles.length && "- "}
              </span>
            ))}
          </div>
          <h1 className={fullName}>
            {artist.firstName} {artist.lastName}
          </h1>
          <div
            className={artistDescription}
            dangerouslySetInnerHTML={{ __html: artist.description }}
          />
          <p>
            <span className={artistInfo}>Email:</span> {artist.email}
          </p>
          <p>
            <span className={artistInfo}>Phone:</span> {artist.phoneNumber}
          </p>
          <p>
            <span className={artistInfo}>Height:</span> {artist.height}
          </p>
          <p>
            <span className={artistInfo}>Shirt Size:</span> {artist.shirtSize}
          </p>
          <p>
            <span className={artistInfo}>Shoe Size:</span> {artist.shoeSize}
          </p>
          <p>
            <span className={artistInfo}>Origin:</span> {artist.origin}
          </p>
        </article>
        <GatsbyImage
          className={headerPicture}
          image={image}
          alt={artist.profilePicture.altText}
        />
      </section>
      <section className={artistPictures}>
       {picture1 && (
          <GatsbyImage
            className={artistPicture}
            image={picture1}
            alt={artist.picture1.altText}
          />
        )}
        {picture2 && (
          <GatsbyImage
            className={artistPicture}
            image={picture2}
            alt={artist.picture2.altText}
          />
        )}
        {picture3 && (
          <GatsbyImage
            className={artistPicture}
            image={picture3}
            alt={artist.picture3.altText}
          />
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String) {
  wpArtist(slug: {eq: $slug}) {
    artistMeta {
      firstName
      lastName
      email
      description
      artistName
      height
      origin
      phoneNumber
      shirtSize
      shoeSize
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      picture1 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      picture2 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      picture3 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    roles {
      nodes {
        name
      }
    }
  }
}
`

export default ArtistPage