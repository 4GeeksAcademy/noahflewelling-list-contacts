const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [
                { name: "Alice Johnson", phone: "555-1234", email: "alice@example.com" },
                { name: "Bob Smith", phone: "555-5678", email: "bob@example.com" }
            ]
        },
        actions: {
            addNewContact: () => {
                const store = getStore();
                const newContact = { name: "New Contact", phone: "000-0000", email: "new@example.com" };
                setStore({ contacts: [...store.contacts, newContact] });
            },
            deleteContact: (index) => {
                const store = getStore();
                setStore({ contacts: store.contacts.filter((_, i) => i !== index) });
            },
            editContact: (index) => {
                const store = getStore();
                let updatedContacts = [...store.contacts];
                updatedContacts[index].name = prompt("Enter new name", updatedContacts[index].name) || updatedContacts[index].name;
                updatedContacts[index].phone = prompt("Enter new phone", updatedContacts[index].phone) || updatedContacts[index].phone;
                updatedContacts[index].email = prompt("Enter new email", updatedContacts[index].email) || updatedContacts[index].email;
                setStore({ contacts: updatedContacts });
            }
        }
    };
};
export default getState;
