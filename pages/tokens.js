import React, { useEffect,useState } from "react";
import { Table, Header, Footer } from "../components/index";
import { getAllHistory } from "../utils/context";

const tokens = () => {
  const [history, setHistory] = useState([]);
  //getting the data
  const loadData = async () => {
    const data = await getAllHistory();
    setHistory(data?.reverse());
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="bg-[#1A1A1A]">
      <Header /> 
      <div className="p-[80px]">
        <Table history={history} />
      </div>
      <Footer />
    </div>
  );
};

export default tokens;
