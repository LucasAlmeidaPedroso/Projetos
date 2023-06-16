// eslint-disable-next-line no-unused-vars
import React from "react"
import Blogdata from "./Blogdata"

const Blog = () => {
  return (
    <>
      <section className='blog Services'>
        <div className='container topMarign'>
          <div className='heading'>
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className='contain grid topMarign'>
            {Blogdata.map((val) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <span>{val.date}</span>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                    <a href='/'>
                      Read More
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
