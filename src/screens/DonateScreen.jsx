import React from "react";
import Footer from "../components/Footer";
import Donate from "../components/Donate";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import "../assets/scss/Donate.scss";
import { Animation } from "../common/Animation";

const DonateScreen = () => {
    return (
        <div>
            <Header />
            <PageHeader Animation={Animation} title="Donate" />
            <Donate Animation={Animation} />
            <Footer Animation={Animation} />
        </div>
    )
}
export default DonateScreen;