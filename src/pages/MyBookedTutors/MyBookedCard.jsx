import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const MyBookedCard = ({ booking }) => {
  // Handle review button click
  const handleReview = (tutorId) => {
    axios
      .patch(`https://assignment-11-category-14-server.vercel.app/tutorials/${tutorId}/review`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Review Added!", "", "success");
          // Optionally reload the page or update state
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error adding review", "", "error");
      });
  };
  return (
    <div>
      <div
        key={booking._id}
        className="flex flex-col items-center border mb-4 p-4 rounded shadow w-fit"
      >
        <div className="flex flex-col items-center mb-5">
          <img
            src={booking.image}
            alt="Tutor"
            className="w-72 h-56 rounded-md object-cover mb-4"
          />
          <div>
            <h3 className="text-xl font-bold">{booking.tutorEmail}</h3>
            <p>Language: {booking.language}</p>
            <p>Price: ${booking.price} / hr</p>
            {/* <p>Review: {booking.review} </p> */}
          </div>
        </div>

        <button
          onClick={() => handleReview(booking.tutorId)}
          className=" md:mt-0 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default MyBookedCard;
