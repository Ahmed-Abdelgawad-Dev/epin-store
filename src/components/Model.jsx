import React, { useContext } from "react";
import { Context } from "../ContextApi";

const Model = () => {
  /**
   * @type {import('../types').ContextState}
   */
  const { modal, closeModal } = useContext(Context);

  return (
    // <!-- Main modal -->
    <div
      id="defaultModal"
      className={`fixed
      ${modal.hidden ? "hidden" : ""}
      flex
      justify-center
      top-0
      left-0
      right-0
      bottom-0
      z-50
      w-full
      p-4
      overflow-x-hidden
      overflow-y-auto
      md:inset-0
      h-modal
      md:h-full`}
      style={{
        backgroundColor: "#00000099",
      }}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {modal.title}
            </h3>
            <button
              type="button"
              onClick={(e) => {
                closeModal();
              }}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            {modal.body.split("\n").map((p, id) => (
              <p
                key={id.toString()}
                className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              >
                {p}
              </p>
            ))}
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={(e) => modal.success.onClick(e)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {modal.success.text}
            </button>
            <button
              onClick={(e) => modal.decline.onClick(e)}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              {modal.decline.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
