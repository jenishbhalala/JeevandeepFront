import React, { useEffect } from "react";

const Map = ({ Animation }) => {
    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])
    return (
        <div className="jsx-1015591826 reveal">
            <section className="jsx-1015591826 map-area">
                
                <div id="map" className="jsx-1015591826"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14878.175150490071!2d72.89696366248778!3d21.21027464947445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7b7c18080662a88!2sSahjanand%20Business%20hub.!5e0!3m2!1sen!2sin!4v1659525147364!5m2!1sen!2sin"
                    className="jsx-1015591826 map"></iframe></div>
            </section>
        </div>
    )
}
export default Map;