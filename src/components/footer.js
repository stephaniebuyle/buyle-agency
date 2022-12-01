
import * as React from "react"
import {
    wrapper,
    title,
    socials,
    instagram,
    facebook,
  } from "./footer.module.css"

  const Footer = ({ siteTitle, companyInfo }) => {
    return (
      <footer className={wrapper}>
        <section>
          <p className={title}>{siteTitle}</p>
          <p>Codobi</p>
          <p>All rights reserved.</p>
        </section>
        <section>
          <p>{`${companyInfo.address}, ${companyInfo.zipCode} ${companyInfo.city}`}</p>
          <div className={socials}>
            Follow us:
            <a
              className={instagram}
              target="__blank"
              href={companyInfo.instagram}
            />
            <a
              className={facebook}
              target="__blank"
              href={companyInfo.facebook}
            />
          </div>
        </section>
      </footer>
    )
  }
  
  export default Footer