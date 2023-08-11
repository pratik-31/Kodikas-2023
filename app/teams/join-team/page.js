"use client";
// import Buttons from "@components/Buttons/Buttons";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import "./page.css";

function page() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  console.log({ userId });

  const [requests, setRequests] = useState([]);

  const handleAcceptTeam = async (teamId) => {
    try {
      await fetch("/api/team/confirm", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, teamId }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRejectTeam = async (teamId) => {
    try {
      await fetch("/api/team/confirm", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, teamId }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getRequests = async () => {
    const response = await fetch(`/api/team/confirm/${userId}`);
    const data = await response.json();
    setRequests(data.data);
  };

  useEffect(() => {
    getRequests();
  }, [userId]);

  function componentRender() {
    return (
      <div className="mt-30">
        {requests?.length === 0 ? (
          <h1 className="h-auto font-bold text-subHeaderText text-4xl mx-auto mt-16 text-center">
            You have not any team request.
          </h1>
        ) : (
          <>
            <section className="text-gray-600  px-2 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -m-4">
                  {requests &&
                    requests.map((request) => (
                      <div className="p-4 lg:w-1/2 md:w-full teamButton">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h2 className="text-white text-6xl title-font font-2xl mb-3">
                              Join Team
                            </h2>
                            <h1 className="leading-relaxed text-base">
                              Team Name : {request.team.teamName}
                              {/* Team Name : Poogle */}
                            </h1>
                            <p className="leading-relaxed text-base mb-5">
                              Team Leader: {request.teamLeader.name}
                              {/* Team Leader: Pratik Kumar Agarwal */}
                            </p>
                            <button
                              type="submit"
                              onClick={() => {
                                handleRejectTeam(request.team);
                              }}
                              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                            >
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Cancel Request
                              </span>
                            </button>
                            {/* <a className="mt-3 text-indigo-500 inline-flex me-2 items-center">
                    <Buttons title={"Cancel Request"} />
                  </a> */}
                            <button
                              type="submit"
                              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                              onClick={() => {
                                handleAcceptTeam(request.team);
                              }}
                            >
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Confirm Request
                              </span>
                            </button>
                            {/* <a className="mt-3 text-indigo-500 inline-flex ms-2 items-center">
                    <Buttons title={"Confirm Request"} />
                  </a> */}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    );
  }

  return <>{componentRender()}</>;
}

export default page;