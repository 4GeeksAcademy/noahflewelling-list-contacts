import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>📞 Contact List</h1>
            <button className="btn btn-primary mb-3" onClick={() => actions.addNewContact()}>
                ➕ Add New Contact
            </button>
            <ul className="list-group">
                {store.contacts.map((contact, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{contact.name}</h5>
                            <p>{contact.phone}</p>
                            <p>{contact.email}</p>
                        </div>
                        <div>
                            <button className="btn btn-warning me-2" onClick={() => actions.editContact(index)}>
                                ✏️ Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => actions.deleteContact(index)}>
                                ❌ Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
