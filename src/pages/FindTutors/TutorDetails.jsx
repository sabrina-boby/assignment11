import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router"; // Correct import
import { AuthContext } from "../../context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const TutorDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [tutor, setTutor] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-11-category-14-server.vercel.app/tutorials/${id}`,
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTutor(data);
      });
  }, [id]);

  const handleBookSession = () => {
    const bookingData = {
      tutorId: tutor._id,
      image: tutor.image,
      language: tutor.language,
      price: tutor.price,
      tutorEmail: tutor.email,
      email: user.email,
      review: tutor.review,
    };

    axios
      .post(
        "https://assignment-11-category-14-server.vercel.app/bookings",
        bookingData
      )
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          //sweet alert
          Swal.fire({
            title: "Successfully added into DB!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center my-10">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col  items-center">
          <div>
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-full rounded-md object-cover mb-4 md:mb-0 md:mr-6"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">Name: {tutor.name}</h2>
            <p className="text-gray-600 mb-1">Email: {tutor.email}</p>
            <p className="text-gray-600 mb-1">Language: {tutor.language}</p>
            <p className="text-gray-600 mb-1">Price: ${tutor.price} / hr</p>
            <p className="text-yellow-500 mb-3">⭐ {tutor.review}</p>
            <p className="text-gray-700">Description: {tutor.description}</p>
            <button
              onClick={handleBookSession}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mt-4"
            >
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
