import React from "react";
import { Link } from "react-router-dom";
import { team } from "../data/team";
import { AccordionItem } from "../components/index";

const curriculumArray = [
  {
    title: "Introduction to Computer Science",
    overview:
      "Basic concepts of computer science and its significance\nEvolution and history of computers\nOverview of hardware and software components",
  },
  {
    title: "Programming Fundamentals",
    overview:
      "Introduction to programming paradigms\nUnderstanding variables, data types, and operators\nControl structures: if statements, loops, and switch statements\nFunctions and modular programming",
  },
  {
    title: "Discrete Mathematics",
    overview:
      "Sets, relations, and functions\nLogic and propositional calculus\nCombinatorics: permutations, combinations, and binomial coefficients\nGraph theory and its applications",
  },
  {
    title: "Data Structures and Algorithms",
    overview:
      "Introduction to data structures: arrays, linked lists, stacks, and queues\nSearching and sorting algorithms: binary search, bubble sort, quicksort, etc.\nIntroduction to algorithm complexity and Big O notation",
  },
];

console.log(curriculumArray);

const About = () => {
  return (
    <div>
      {/*hero section*/}
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Introducing LearnCSForFree: Your Gateway to Computer Science
              Education
            </h2>
            <p class="mb-4">
              Welcome to LearnCSForFree, your premier destination for
              revolutionizing the way you learn about computer science. This app
              is designed to empower learners of all levels with the best
              educational videos curated from across the internet.
            </p>
            <p>
              Whether you're a beginner curious about the world of coding or a
              seasoned programmer looking to expand your knowledge,
              LearnCSForFree is here to guide you on your journey.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      {/*hero section*/}

      {/*Mission*/}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Our Mission
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            At LearnCS, our mission is clear: to make high-quality computer
            science education accessible to everyone, anywhere, and at any time.
            We believe that learning should know no boundaries, and with our
            carefully selected resources, we're committed to ensuring that you
            have access to the finest computer science content, absolutely free
            of charge.
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/courses"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                class="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Start Learning
            </Link>
          </div>
          <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">
              All videos are collected from youtube
            </span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-center">
              <Link
                target="_blank"
                to="https://youtube.com"
                class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  class="h-8"
                  viewBox="0 0 132 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z"
                    fill="white"
                  />
                  <path
                    d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z"
                    fill="currentColor"
                  />
                  <path
                    d="M124.649 18.1634V19.0465C124.649 20.1586 124.682 21.009 124.748 21.565C124.813 22.121 124.944 22.5462 125.173 22.7752C125.369 23.0368 125.696 23.1677 126.154 23.1677C126.743 23.1677 127.135 22.9387 127.364 22.4808C127.593 22.0229 127.691 21.2706 127.724 20.1913L131.093 20.3875C131.125 20.5511 131.125 20.7473 131.125 21.009C131.125 22.6117 130.7 23.8218 129.817 24.6068C128.934 25.3918 127.691 25.7843 126.089 25.7843C124.159 25.7843 122.818 25.1628 122.033 23.9527C121.248 22.7425 120.855 20.8782 120.855 18.327V15.2852C120.855 12.6686 121.248 10.7715 122.066 9.56136C122.883 8.35119 124.257 7.76245 126.187 7.76245C127.528 7.76245 128.574 8.02411 129.294 8.51472C130.013 9.00534 130.504 9.79032 130.798 10.8042C131.093 11.8509 131.223 13.29 131.223 15.1216V18.098H124.649V18.1634ZM125.14 10.837C124.944 11.0986 124.813 11.4911 124.748 12.0471C124.682 12.6032 124.649 13.4536 124.649 14.5983V15.8412H127.528V14.5983C127.528 13.4863 127.495 12.6359 127.43 12.0471C127.364 11.4584 127.201 11.0659 127.004 10.837C126.808 10.608 126.481 10.4772 126.089 10.4772C125.631 10.4445 125.336 10.5753 125.14 10.837Z"
                    fill="currentColor"
                  />
                  <path
                    d="M54.7216 17.8362L50.2734 1.71143H54.1656L55.7356 9.0052C56.1281 10.8041 56.4224 12.3414 56.6187 13.617H56.7168C56.8476 12.7011 57.142 11.1966 57.5999 9.0379L59.2353 1.71143H63.1274L58.6138 17.8362V25.5552H54.7543V17.8362H54.7216Z"
                    fill="currentColor"
                  />
                  <path
                    d="M85.6299 8.15479V25.5878H82.5554L82.2283 23.4619H82.1302C81.3125 25.0645 80.0369 25.8822 78.3688 25.8822C77.2241 25.8822 76.3737 25.4897 75.8177 24.7375C75.2617 23.9852 75 22.8077 75 21.1723V8.15479H78.9249V20.9434C78.9249 21.7284 79.023 22.2844 79.1865 22.6115C79.3501 22.9385 79.6444 23.1021 80.0369 23.1021C80.364 23.1021 80.6911 23.004 81.0181 22.775C81.3452 22.5788 81.5742 22.3171 81.705 21.99V8.15479H85.6299Z"
                    fill="currentColor"
                  />
                  <path
                    d="M105.747 8.15479V25.5878H102.673L102.346 23.4619H102.247C101.43 25.0645 100.154 25.8822 98.4861 25.8822C97.3413 25.8822 96.4909 25.4897 95.9349 24.7375C95.3788 23.9852 95.1172 22.8077 95.1172 21.1723V8.15479H99.0421V20.9434C99.0421 21.7284 99.1402 22.2844 99.3038 22.6115C99.4673 22.9385 99.7617 23.1021 100.154 23.1021C100.481 23.1021 100.808 23.004 101.135 22.775C101.462 22.5788 101.691 22.3171 101.822 21.99V8.15479H105.747Z"
                    fill="currentColor"
                  />
                  <path
                    d="M96.2907 4.88405H92.3986V25.5552H88.5718V4.88405H84.6797V1.71143H96.2907V4.88405Z"
                    fill="currentColor"
                  />
                  <path
                    d="M118.731 10.935C118.502 9.82293 118.11 9.03795 117.587 8.54734C117.063 8.05672 116.311 7.79506 115.395 7.79506C114.676 7.79506 113.989 7.99131 113.367 8.41651C112.746 8.809 112.255 9.36502 111.928 10.0192H111.896V0.828369H108.102V25.5552H111.34L111.732 23.9199H111.83C112.125 24.5086 112.582 24.9665 113.204 25.3263C113.825 25.6533 114.479 25.8496 115.232 25.8496C116.573 25.8496 117.521 25.2281 118.143 24.018C118.764 22.8078 119.091 20.8781 119.091 18.2942V15.5467C119.059 13.5516 118.96 12.0143 118.731 10.935ZM115.134 18.0325C115.134 19.3081 115.068 20.2893 114.97 21.0089C114.872 21.7285 114.676 22.2518 114.447 22.5461C114.185 22.8405 113.858 23.004 113.466 23.004C113.138 23.004 112.844 22.9386 112.582 22.7751C112.321 22.6116 112.092 22.3826 111.928 22.0882V12.2106C112.059 11.7527 112.288 11.3602 112.615 11.0331C112.942 10.7387 113.302 10.5752 113.662 10.5752C114.054 10.5752 114.381 10.7387 114.578 11.0331C114.807 11.3602 114.937 11.8835 115.036 12.6031C115.134 13.3553 115.166 14.402 115.166 15.743V18.0325H115.134Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*Mission*/}

      {/* Team section */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our team
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Join LearnCSForFree: Enthusiasts and volunteers shaping cs
              education. Embrace collaboration, diverse minds. Together, create
              impactful change. Your contribution matters.
            </p>
          </div>
          <div class="grid  gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
            {team.map((member, idx) => (
              <div
                class="text-center text-gray-500 dark:text-gray-400"
                key={idx}
              >
                <img
                  class="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={member.image}
                  alt="Avatar"
                />
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <p>{member.role}</p>
                <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                    <Link
                      to={member.linkedin}
                      target="_blank"
                      class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 455 455"
                        xmlSpace="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"></path>
                            <path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087 c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345 c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537 c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002 z"></path>
                          </g>
                        </g>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to={member.twitter}
                      class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to={member.github}
                      class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team section */}

      {/*Curriculum Overview */}
      <section className="">
        <div className="mx-auto w-[90%]">
          <h1 className="text-4xl font-bold text-center">
            Curriculum Overview
          </h1>
          <p className="text-center lg:w-[60%] w-[80%] mx-auto py-4">
            Welcome to our comprehensive educational app that covers a wide
            range of topics in computer science and programming. Our curriculum
            is designed to provide both beginners and experienced learners with
            a solid foundation in various key areas of the field. Whether you're
            interested in algorithms, programming languages, or the history of
            computers, we've got you covered.
          </p>
          <div className="">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-1/2">
                {curriculumArray.slice(0, 2).map((item, idx) => (
                  <AccordionItem
                    header={item.title}
                    text={item.overview}
                    key={idx}
                  />
                ))}
              </div>
              <div className="w-full px-4 lg:w-1/2">
                {curriculumArray.slice(2).map((item, idx) => (
                  <AccordionItem
                    header={item.title}
                    text={item.overview}
                    key={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Curriculum Overview */}

      {/* Community */}
      <section className="">
        <div className="mx-auto w-[90%]">
          <h1 className="text-center text-4xl">Community</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 py-8 items-center">
            <div className="">
              <p className="text-2xl mb-8">
                Connect, share, and learn with fellow learners on
                LearnCSForFree. Join our WhatsApp group for real-time
                discussions, mentorship, and networking opportunities. Your
                growth is our community's goal.
              </p>
              <a
                href="#"
                className="mt-4 py-4 px-4 bg-[#3b82f6] text-white font-bold"
              >
                Join WhatSapp Group
              </a>
            </div>
            <div className="">
              <img
                src="https://cdn.pixabay.com/photo/2018/03/21/06/30/community-3245739_1280.png"
                alt="community"
                className="object-cover h-[90%] w-[90%]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Community */}
      {/*CTA*/}
      <section className="">
        <div className="mx-auto w-[80%] py-8">
          <h1 className="text-center text-4xl">Ready to start learning?</h1>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="mt-4 py-4 px-4 bg-[#3b82f6] text-white font-bold capitalize"
            >
              Take first course
            </a>
          </div>
        </div>
      </section>
      {/*CTA */}
    </div>
  );
};

export default About;
