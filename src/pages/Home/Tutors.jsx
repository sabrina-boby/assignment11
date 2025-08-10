import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Tutors = () => {
    const [tutors, setTutors] = useState([]);
    // const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://assignment-11-category-14-server.vercel.app/tutorials`)
            .then((res) => res.json())
            .then((data) => {
                setTutors(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const displayedTutors = tutors.slice(0, 6);

    return (
        <div className="my-10 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Tutors</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {displayedTutors.length > 0 ? (
                        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 max-w-6xl mx-auto">
                            {displayedTutors.map((tutor) => (
                                <div
                                    key={tutor._id}
                                    className="border rounded-lg shadow p-4 flex flex-col"
                                >
                                    <img
                                        src={tutor.image}
                                        alt={tutor.name}
                                        className="h-40 w-full object-cover rounded mb-4"
                                        onError={(e) => (e.target.src = "/default-img.png")}
                                    />
                                    <p className="mb-1">
                                        <strong>Name:</strong> {tutor.name}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Email:</strong> {tutor.email}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Language:</strong> {tutor.language}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Price:</strong> ${tutor.price}
                                    </p>
                                    {/* <p className="text-sm text-gray-700 flex-grow">
                                        {tutor.description.length > 100
                                            ? tutor.description.slice(0, 100) + "..."
                                            : tutor.description}
                                    </p> */}
                                    <p className="mb-1">
                                        <strong>Review:</strong> {tutor.review || "No reviews yet"}
                                    </p>
                                    <Link to={`/tutor/${tutor._id}`}>
                                        <div className="text-center mt-8">
                                            <button
                                                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No tutors found.</p>
                    )}

                    <Link to={`/find-tutors`}>
                        <div className="text-center mt-8">
                            <button
                                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                View All
                            </button>
                        </div>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Tutors;
