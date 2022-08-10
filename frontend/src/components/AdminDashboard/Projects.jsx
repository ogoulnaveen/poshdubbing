import React from "react";
import Button from "../ReusableComponents/Button";
import WrapperMin from "../ReusableComponents/WrapperMin/WrapperMin";
import HeadingThree from "./../ReusableComponents/HeadingThree";

const Projects = () => {
  const tableData = [
    {
      id: 1,
      name: "Route To El-Dorado: The Golden Cast",
      size: "5.6 MB",
      LastModified: "27 APR, 2022",
    },
    {
      id: 2,
      name: "Route To El-Dorado: The Golden Cast",
      size: "8.9 MB",
      LastModified: "27 MAY, 2022",
    },
    {
      id: 3,
      name: "Route To El-Dorado: The Golden Cast",
      size: "55.6 MB",
      LastModified: "27 JUNE, 2022",
    },
  ];

  return (
    <WrapperMin>
      <HeadingThree className="my-8">My Projects</HeadingThree>
      <div class="flex items-center justify-center h-fit">
        <div class="container">
          <table class="w-full flex flex-row flex-no-wrap  overflow-hidden  my-5">
            <thead class="text-gray-500">
              <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">Name</th>
                <th class="p-3 text-left">Size</th>
                <th class="p-3 text-left" width="140px">
                  Last Modified
                </th>
                <th class="p-3 text-left" width="110px">
                  Download
                </th>
                <th class="p-3 text-left" width="110px">
                  Choose
                </th>
              </tr>
              <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">Name</th>
                <th class="p-3 text-left">Size</th>
                <th class="p-3 text-left" width="140px">
                  Last Modified
                </th>
                <th class="p-3 text-left" width="110px">
                  Download
                </th>
                <th class="p-3 text-left" width="110px">
                  Choose
                </th>
              </tr>
              <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">Name</th>
                <th class="p-3 text-left">Size</th>
                <th class="p-3 text-left" width="140px">
                  Last Modified
                </th>
                <th class="p-3 text-left" width="110px">
                  Download
                </th>
                <th class="p-3 text-left" width="110px">
                  Choose
                </th>
              </tr>
            </thead>
            <tbody class="flex-1 sm:flex-none">
              <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td class=" hover:bg-gray-100 p-3">
                  Route To EL-Dorado: The Golden Cast
                </td>
                <td class=" hover:bg-gray-100 p-3 truncate">5.6 MB</td>
                <td class=" hover:bg-gray-100 p-3">27 APR, 2022</td>
                <td class=" hover:bg-gray-100 p-3">
                  <a
                    href="#id"
                    className={`inline-block text-center font-semibold leading-none rounded-full transition hover:bg-[#012054] w-32 text-[#012054] hover:text-white border border-[#012054] py-1.5 text-sm`}
                  >
                    Download
                  </a>
                </td>

                <td class=" hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <a
                    href="#id"
                    className={`inline-block text-center font-semibold leading-none rounded-full transition hover:bg-[#012054] w-32 text-[#012054] hover:text-white border border-[#012054] py-1.5 text-sm`}
                  >
                    Choose
                  </a>
                </td>
              </tr>
              <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td class=" hover:bg-gray-100 p-3">
                  Route To EL-Dorado: The Golden Cast
                </td>
                <td class=" hover:bg-gray-100 p-3 truncate">5.6 MB</td>
                <td class=" hover:bg-gray-100 p-3">27 APR, 2022</td>
                <td class=" hover:bg-gray-100 p-3">
                  <a
                    href="#id"
                    className={`inline-block text-center font-semibold leading-none rounded-full transition hover:bg-[#012054] w-32 text-[#012054] hover:text-white border border-[#012054] py-1.5 text-sm`}
                  >
                    Download
                  </a>
                </td>

                <td class=" hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <a
                    href="#id"
                    className={`inline-block text-center font-semibold leading-none rounded-full transition hover:bg-[#012054] w-32 text-[#012054] hover:text-white border border-[#012054] py-1.5 text-sm`}
                  >
                    Choose
                  </a>
                </td>
              </tr>
              <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td class=" hover:bg-gray-100 p-3">
                  Route To EL-Dorado: The Golden Cast
                </td>
                <td class=" hover:bg-gray-100 p-3 truncate">5.6 MB</td>
                <td class=" hover:bg-gray-100 p-3">27 APR, 2022</td>
                <td class=" hover:bg-gray-100 p-3">
                  <a
                    href="#id"
                    className={`inline-block text-center font-semibold leading-none rounded-full transition hover:bg-[#012054] w-32 text-[#012054] hover:text-white border border-[#012054] py-1.5 text-sm`}
                  >
                    Download
                  </a>
                </td>

                <td class=" hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <a
                    href="#id"
                    className={`inline-block text-center font-semibold leading-none rounded-full transition hover:bg-[#012054] w-32 text-[#012054] hover:text-white border border-[#012054] py-1.5 text-sm`}
                  >
                    Choose
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </WrapperMin>
  );
};

export default Projects;
