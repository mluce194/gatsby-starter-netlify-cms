import React from 'react';
import { Link } from 'gatsby'
import styled from "styled-components"

const LanguageSwitch = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form>
                <select>
                    <option value="">Choose your language</option>
                    <option value="french">Français</option>
                    <option value="english">English</option>
                </select>
            </form>
        )
    }
}

export default LanguageSwitch;