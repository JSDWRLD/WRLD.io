import React from "react";

const Alert = ({ type, text }) => {
    return (
        <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
            <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "#95d600"
        } items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex`}
        role='alert'
            >
                <p
                className={`flex rounded-full ${
                    type === "danger" ? "#95d600" : "bg-slate-500"
                } uppercase px-2 py-1 text-xs font-semibold mr-3`}
                >
                {type === "danger" ? "Failed" : "Success"}
                </p>
                <p className='mr-2 text-left'>{text}</p>
            </div>
        </div>
    )
}

export default Alert