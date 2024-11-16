import React, { useEffect } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { AiOutlineUser, AiOutlineSetting, AiOutlineBank } from "react-icons/ai"; // React Icons
import { useLocation, useNavigate } from "react-router-dom";
import Delivery from "./Delivery"; // Address form
import Pyment from "./Pyment"; // Payment component
import Nav from "./Nav";
import OrderSummary from "./OrderSummary";

export function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const stepFromURL = querySearch.get("step");

  // Set active step based on the query parameter on component mount
  useEffect(() => {
    const step = parseInt(stepFromURL);
    if (!isNaN(step) && step >= 0 && step <= 2) {
      setActiveStep(step);
    }
  }, [stepFromURL]);

  // Function to update both state and URL
  const handleNext = () => {
    console.log("handleNext called"); // Log when handleNext is triggered
    if (activeStep < 2) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      navigate(`?step=${nextStep}`);
    }
  };
  

  const handlePrev = () => {
    if (activeStep > 0) {
      const prevStep = activeStep - 1;
      setActiveStep(prevStep);
      navigate(`?step=${prevStep}`); // Update the URL query
    }
  };

  const steps = [
    {
      icon: (
        <AiOutlineUser
          className={`h-9 w-9 transition duration-300 ${
            activeStep === 0 ? "text-green-500" : "text-gray-400"
          }`}
        />
      ),
      label: "Address",
    },
    {
      icon: (
        <AiOutlineSetting
          className={`h-9 w-9 transition duration-300 ${
            activeStep === 1 ? "text-green-500" : "text-gray-400"
          }`}
        />
      ),
      label: "Order",
    },
    {
      icon: (
        <AiOutlineBank
          className={`h-9 w-9 transition duration-300 ${
            activeStep === 2 ? "text-green-500" : "text-gray-400"
          }`}
        />
      ),
      label: "Payment",
    },
  ];

  return (
    <div>
      <Nav />
      <div className="w-full px-4 py-4">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => navigate(`?step=${index}`)} className="flex flex-col items-center">
              <div className="flex items-center">
                {step.icon}
              </div>
              <Typography
                className={`font-semibold text-center mt-2 ${
                  activeStep === index ? "text-green-500" : "text-gray-500"
                }`}
              >
                {step.label}
              </Typography>
            </Step>
          ))}
        </Stepper>
        <div className="mt-10 flex justify-between">
          {/* Uncomment if you want to enable navigation buttons */}
          {/* <Button onClick={handlePrev} disabled={activeStep === 0}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={activeStep === 2}>
            Next
          </Button> */}
        </div>

        {/* Conditional rendering based on the active step */}
        {activeStep === 0 ? <Delivery  handleNext={handleNext} />: activeStep === 1 ? <OrderSummary /> : activeStep === 2 ? <Pyment /> : null}
        </div>
    </div>
  );
}
