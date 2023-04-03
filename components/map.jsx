import React from "react";

const Map = () => {
  return (
    <section className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.22360506375696!2d39.825575582407694!3d21.419265286092685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204c82533f16f%3A0xca0cff6480eeca59!2z2KPYqNix2KfYrCDYp9mE2LPYp9i52Kk!5e0!3m2!1sar!2seg!4v1680446043871!5m2!1sar!2seg"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
