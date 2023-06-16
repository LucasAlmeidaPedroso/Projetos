// eslint-disable-next-line no-unused-vars
import React from "react"
import Data from "./Data"

const Work = () => {
  return (
    <>
      <section className='work'>
        <div className='heading'>
          <h3>MY WORKS</h3>
          <h1>Some Of My Competed Projects</h1>
        </div>

        <div className='content'>
          {Data.map((val) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='overlay'>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                  <div className='icon'>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Work
