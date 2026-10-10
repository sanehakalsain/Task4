
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setError("Please enter your first name and last name.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        setLoading(true);

        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                formData.email.trim(),
                formData.password
            );

            await setDoc(doc(db, "users", result.user.uid), {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: result.user.email
            });

            navigate("/login");
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered.");
            } else if (err.code === "auth/invalid-email") {
                setError("Please enter a valid email address.");
            } else if (err.code === "auth/weak-password") {
                setError("Please choose a stronger password.");
            } else {
                setError("Registration failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-4 py-10">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">

                <h1 className="mb-2 text-center text-3xl font-bold">
                    Create an Account
                </h1>

                <p className="mb-6 text-center text-gray-600">
                    Join DEV@Deakin
                </p>

                {error && (
                    <p
                        role="alert"
                        className="mb-4 rounded bg-red-100 p-3 text-red-700"
                    >
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label htmlFor="firstName" className="mb-1 block">
                            First Name
                        </label>

                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            autoComplete="given-name"
                            className="w-full rounded border p-3"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="mb-1 block">
                            Last Name
                        </label>

                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            autoComplete="family-name"
                            className="w-full rounded border p-3"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1 block">
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="w-full rounded border p-3"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-1 block">
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            autoComplete="new-password"
                            minLength={6}
                            className="w-full rounded border p-3"
                            required
                        />

                        <p className="mt-1 text-sm text-gray-500">
                            Password must contain at least 6 characters.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>

                </form>

                <p className="mt-6 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}
