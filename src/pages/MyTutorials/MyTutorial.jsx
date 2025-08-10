import React from "react";
import MyTutorialCard from "./MyTutorialCard";

const MyTutorial = ({ myTutorials, refreshTutorials }) => {
  return (
    <div className="overflow-x-auto flex justify-center my-10">
      <div className=" md:block">
        <table className="table-auto max-w-[1200px] w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border text-gray-800 dark:text-gray-200">Image</th>
              <th className="p-2 border text-gray-800 dark:text-gray-200">Language</th>
              <th className="p-2 border text-gray-800 dark:text-gray-200">Price</th>
              <th className="p-2 border text-gray-800 dark:text-gray-200">Description</th>
              <th className="p-2 border text-gray-800 dark:text-gray-200">Review</th>
              <th className="p-2 border text-gray-800 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTutorials.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No tutorials found.
                </td>
              </tr>
            ) : (
              myTutorials.map((tutorial) => (
                <MyTutorialCard
                  key={tutorial._id}
                  tutorial={tutorial}
                  refreshTutorials={refreshTutorials}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorial;
