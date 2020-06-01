import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Navbar__Logo = styled.div`
    margin-bottom: 1rem;
 & a {
    font-family: "Cardo", Times, serif;
    display: block;
    font-size: 1.8rem;
    color: #800000;
    line-height: 1.2;

 }
  & span {
    display: block;
    color: #7F7F7F;
    font-size: 1rem
  }
  & span:before {
    content: "-- ";
  }
`

const Logo = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

                <Navbar__Logo>
                    <Link to="/" className="navbar-item" title="Logo">
                        Paul-Marie Beraudo
                        <span>Avocat au Barreau de Thonon Les Bains</span>
                    </Link>
                </Navbar__Logo>
        )
    }
}


export default Logo;


