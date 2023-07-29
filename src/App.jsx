import ContactList from "./components/ContactList";
import "./App.css";
import { useState } from "react";
import SelectedContact from "./components/selectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log("Selected ID: ", selectedContactId);
  return (
    <>
      {selectedContactId ? (
        <div>
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
export default App;
