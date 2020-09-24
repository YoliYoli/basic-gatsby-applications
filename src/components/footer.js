import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { faFemale  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer(){
return(
<footer>
© {new Date().getFullYear()}, {` `} <a href="https://www.linkedin.com/in/yolichaviano/"> Yoli Chaviano </a>
<p>MIAMI {` `} <FontAwesomeIcon icon={faFemale} size="1x"/>{` `}</p>
</footer>


)
}

   
    
    
          
          
      









