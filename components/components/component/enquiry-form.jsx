import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function EnquiryForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [message, setMessage] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        // Ensure all fields are filled and at least one contact detail is provided
        if (
            name.trim() !== "" &&
            (email.trim() !== "" || phone.trim() !== "") &&
            checkIn.trim() !== "" &&
            checkOut.trim() !== "" &&
            message.trim() !== ""
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [name, email, phone, checkIn, checkOut, message]);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isFormValid) return; // Prevent submission if form is invalid

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
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                        Check-in
                    </label>
                    <input
                        type="date"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                        Check-out
                    </label>
                    <input
                        type="date"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className={`px-4 py-2 font-medium text-white rounded-md ${
                        isFormValid
                            ? "bg-green-800 hover:bg-green-700"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!isFormValid}
                >
                    Send Enquiry
                </button>
            </div>
        </form>
    );
}
