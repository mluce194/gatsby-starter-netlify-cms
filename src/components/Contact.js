import React from 'react'
import "./contact.css"

const Contact = (props) => (
            <section className="blocContact">
                <div><strong>Nous contacter</strong>
                <p>{props.contact}</p>
                
                </div>
                <div>
                    {props.map}
                </div>
            </section>
        )

export default Contact;