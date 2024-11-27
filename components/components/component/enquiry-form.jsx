import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export function EnquiryForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        // Validation: At least one of phone or email must be provided
        if (!email && !phone) {
            alert("Please provide either an email address or a phone number.");
            return; // Prevent form submission
        }

        const templateParams = {
            user_name: name,
            user_email: email,
            user_phone: phone,
            check_in: checkIn,
            check_out: checkOut,
            message: message
        };

        emailjs
            .send(
                "service_31f8hvm",
                "template_9ibyxd8",
                templateParams,
                "fhT7oysOLd67US4z0"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    console.log("FAILED...", err);
                }
            );
    };
    return (
        <form
            onSubmit={sendEmail}
            className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold text-green-800">
                    Enquire for Long Stays
                </h2>
                <p className="text-gray-500">
                    Fill in the form and our team will get back to you with the
                    best rates.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="phone"
                    >
                        Phone
                    </label>
                    <input
                        type="text"
                        name="user_phone"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your phone number"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="check-in"
                    >
                        Check-in
                    </label>
                    <input
                        type="date"
                        name="check_in"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        required
                        onChange={(e) => setCheckIn(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="check-out"
                    >
                        Check-out
                    </label>
                    <input
                        type="date"
                        name="check_out"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        required
                        onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>
            </div>
            <div className="space-y-1">
                <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="px-4 py-2 font-medium text-white bg-green-800 rounded-md hover:bg-green-700"
                >
                    Send Enquiry
                </button>
            </div>
        </form>
    );
}
