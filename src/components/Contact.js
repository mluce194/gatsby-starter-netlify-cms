import React from "react";
import "./contact.css";

const Contact = (props) => (
  <section className="blocContact">
    <div class="columns">
      <div class="column is-one-third blocContact__adresse">
        <strong>Nous contacter</strong>
        <p>{props.contact}</p>
      </div>
      <div class="column is-two-thirds blocContact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.009194638696!2d6.476461651858684!3d46.36920557901969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c3e62c89280f5%3A0x26a7cc340ebc4616!2sBeraudo%20Paul-Marie!5e0!3m2!1sfr!2sfr!4v1593324449367!5m2!1sfr!2sfr"
          style={{width: "100%", height: "450px"}}
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
