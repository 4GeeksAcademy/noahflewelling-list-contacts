import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";
import { ContactList } from "./views/contactList.js"; // Updated to ContactList
import { ContactDetails } from "./views/contactDetails.js"; // Updated to ContactDetails
import injectContext from "./store/appContext.js";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

const Layout = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ContactList />} />
                    <Route path="/single/:theid" element={<ContactDetails />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
