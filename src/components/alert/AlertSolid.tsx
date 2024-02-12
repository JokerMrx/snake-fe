import { FC } from "react";

import CloseIcon from "../../assets/icons/close.svg?react";

import { IAlertProps } from "./alert.types";

const ALERT_BG_COLOR = {
  default: "bg-gray-500",
  error: "bg-red-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  primary: "bg-blue-500"
};

const ALERT_BTN_CLOSE_STYLE = {
  default:
    "focus:ring-offset-gray-600 focus:ring-gray-500 dark:focus:ring-offset-gray-700 dark:focus:ring-gray-500",
  error:
    "focus:ring-offset-red-800 focus:ring-red-500 dark:focus:ring-offset-red-500 dark:focus:ring-red-700",
  success:
    "focus:ring-offset-green-800 focus:ring-green-500 dark:focus:ring-offset-green-500 dark:focus:ring-green-700",
  warning:
    "focus:ring-offset-yellow-800 focus:ring-yellow-500 dark:focus:ring-offset-yellow-500 dark:focus:ring-yellow-700",
  primary:
    "focus:ring-offset-blue-800 focus:ring-blue-500 dark:focus:ring-offset-blue-500 dark:focus:ring-blue-700"
};

const AlertSolid: FC<IAlertProps> = ({
  message,
  variant = "default",
  onClose
}) => {
  const handleClose = () => {
    onClose("");
  };

  return (
    <div
      className={`max-w-xs ${ALERT_BG_COLOR[variant]} text-sm text-white rounded-md shadow-lg absolute bottom-0 left-0 mb-3 ml-3`}
      role="alert"
    >
      <div className="p-4 flex items-center">
        {message}

        <div className="ml-auto grid place-content-center">
          <button
            type="button"
            className={`ml-5 inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white transition-all text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${ALERT_BTN_CLOSE_STYLE[variant]}`}
            onClick={handleClose}
          >
            <span className="sr-only">Close</span>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertSolid;
