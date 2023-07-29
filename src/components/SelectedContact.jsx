import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  console.log("contact: ", selectedContactId);
  useEffect(() => {
    async function fetchcontact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchcontact();
  }, []);
  return (
    <>
      <h2>Selected Contact</h2>
      {contact ? (
        <>
          <p>Name: {contact.name}</p>
          <p>Username: {contact.username}</p>
          <p>Email: {contact.email}</p>
          <p>City: {contact.address.city}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website: {contact.website}</p>
          <p>Company name: {contact.company.name}</p>
        </>
      ) : (
        <p>Loading</p>
      )}{" "}
      <button onClick={() => setSelectedContactId(null)}>Clear</button>
    </>
  );
}
