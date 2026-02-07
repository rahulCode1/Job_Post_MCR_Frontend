import { createContext, useContext, useState } from "react";

const JobContext = createContext();
const useJobContext = () => useContext(JobContext);
export default useJobContext;

export const JobProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchJobs = (e, searchText) => {
    e.preventDefault();

    setSearchText(searchText);
  };

  return (
    <JobContext.Provider
      value={{ searchText, setSearchText, handleSearchJobs }}
    >
      {children}
    </JobContext.Provider>
  );
};
