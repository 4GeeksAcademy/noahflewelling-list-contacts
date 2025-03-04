import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactDetails = () => {
    const { store } = useContext(Context);
    const { theid } = useParams();
    const contact = store.contacts[theid];

    if (!contact) return <h1>⚠️ Contact Not Found</h1>;

    return (
        <div className="jumbotron">
            <h1 className="display-4">📞 {contact.name}</h1>
            <p>📧 {contact.email}</p>
            <p>📱 {contact.phone}</p>
            <hr className="my-4" />
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    Back to Contacts
                </span>
            </Link>
        </div>
    );
};
