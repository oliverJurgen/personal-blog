// eslint-disable-next-line no-unused-vars
import React from "react"
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

const Home = () => {
  return (
    <Styled.h5>
      <span className="ml-1" role="img" aria-label="waving">
        👋
      </span>
      <span className="ml-1" role="img" aria-label="Philippines">
        🇵🇭
      </span>
      <span className="ml-1" role="img" aria-label="Programmer">
        👨‍💻
      </span>
      <Styled.h6
        sx={{
          fontSize: 4,
        }}
      >
        I&apos;m Oliver
      </Styled.h6>{" "}
      <br />
      <Styled.p
        sx={{
          fontSize: 3,
        }}
      >
        I&apos;ll worry about the content later.
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: 3,
        }}
      >
        I&apos;ll setup the site first.
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: 3,
        }}
      >
        {" "}
        I dunno what to put here yet but this should be the Home page
      </Styled.p>
    </Styled.h5>
  )
}

export default Home
