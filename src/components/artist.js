import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    artistInfo,
    artistName,
    fullName,
  } from "./artist.module.css"

  const Artist = ({ artist, slug }) => {
    const profile = getImage(artist.artistMeta.profilePicture.localFile)
    return (
      <Link className={wrapper} to={slug}>
        <GatsbyImage
         className={image}
          image={profile}
          alt={artist.artistMeta.profilePicture.altText}
        />
        <article className={artistInfo}>
          {artist.artistMeta.artistName && <p className={artistName}>{artist.artistMeta.artistName}</p>}
          <p className={fullName}>
            {artist.artistMeta.firstName} {artist.artistMeta.lastName}
          </p>
        </article>
      </Link>
    )
  }

export default Artist;