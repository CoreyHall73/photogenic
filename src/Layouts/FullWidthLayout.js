import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const FullWidthLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {/* Layout content here */}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default FullWidthLayout;
