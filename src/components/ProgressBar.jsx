import React, { useState } from 'react'

const ProgressBar = ({ questionNumber, totalQuestion, percentage }) => {
  let [width, setWidth] = useState(0);
  if (percentage <= 10) {
    width = "w-1/5";
  } else if (percentage <= 30) {
    width = "w-2/5";
  } else if (percentage <= 50) {
    width = "w-3/5";
  } else if (percentage <= 70) {
    width = "w-4/5";
  } else if (percentage <= 100) {
    width = "w-full";
  }
  

  return (
    <div className="border border-gray-400 rounded-md my-2">
      <div className="w-full rounded-full">
        <div className={`bg-brand text-xs font-medium text-white text-center leading-none rounded-md h-8 flex items-center justify-center ${width}`}>{questionNumber + 1} out of {totalQuestion}</div>
      </div>

    </div>
  )
}

export default ProgressBar