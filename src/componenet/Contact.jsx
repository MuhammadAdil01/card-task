import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact(props) {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-red-100 p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
      <p className="mb-4 text-gray-700">
        Please fill out the form below to contact us.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded-md"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-md"
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          required
          className="w-full px-4 py-2 border rounded-md"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          Send Message
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold">Contact Info</h3>
        <p><strong>Address:</strong> {props.data?.address || "Loading..."}</p>
        <p><strong>Phone:</strong> {props.data?.phone || "Loading..."}</p>
        <p><strong>Email:</strong> {props.data?.email || "Loading..."}</p>
      </div>

      <div className="mt-4 flex space-x-4">
        <a href={props.data?.facebook || "/"} className="text-blue-600 hover:underline">Facebook</a>
        <a href={props.data?.twitter || "/"} className="text-blue-400 hover:underline">Twitter</a>
        <a href={props.data?.youtube || "/"} className="text-red-600 hover:underline">YouTube</a>
      </div>
    </div>
  );
}
