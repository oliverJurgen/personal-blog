import styled from "@emotion/styled"

import MyPhoto from "../../content/assets/profile-pic.jpg"

const Avatar = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
`

Avatar.defaultProps = {
  src: MyPhoto,
  alt: "Oliver Escoto",
  width: "50px",
  height: "50px",
}

export default Avatar
