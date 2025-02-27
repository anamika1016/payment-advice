import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataLoading, setDataLoading] = useState(true);
  const [companyName, setCompanyName] = useState("PAYMENT ADVICE");

  const dataValue = {
    dataLoading,
    companyName,
  };

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
