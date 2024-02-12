import LoaderIcon from "../../../assets/icons/loader.svg?react";

const Loader = () => {
  return (
    <div role="status" className="flex justify-center">
      <LoaderIcon className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
