import React, { useEffect, useState, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    console.log(newSteps);

    let count = 0;

    while (count < newSteps.length) {
      console.log(newSteps);
      console.log(count,stepNumber);
      if (count == stepNumber) {
        console.log("hi im herer");
        if (count === newSteps.length - 1) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: true,
          };
        } else {
          console.log("high",count);
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: false,
          };
          console.log("after",newSteps,newSteps[0]);
        }
      }
      if (count == stepNumber - 1) {
        console.log("Low")
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        console.log("Im here else")
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index == 0 ? true : false,
          selected: index == 0 ? true : false,
        }
      )
    );
    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {newStep.map((step, index) => {
        return (
          <div
            key={index}
            className={
              index != newStep.length - 1
                ? "w-full flex items-center"
                : "flex items-center"
            }
          >
            <div className="relative flex flex-col items-center text-teal-600 h-24">
              <div
                className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center ${
                  step.selected
                    ? "bg-green-600 text-white font-bold border border-green-600"
                    : ""
                }`}
              >
                {step.completed ? (
                  <span className="text-white font-bold text-xl">
                    {" "}
                    &#10003;{" "}
                  </span>
                ) : (
                  index + 1
                )}
              </div>

              <div
                className={`absolute-top-0 text-center w-14 text-sm font-medium uppercase  ${
                  step.highlighted ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {/* {display description} */}
                {step.description}
              </div>
            </div>
            <div
              className={`flex-auto justify-content-center border-2 transition mb-12 duration-500 ease-in-out ${
                step.completed ? "border-green-600" : "border-gray-300"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;