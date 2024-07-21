import React from "react";

const Table = ({ history }) => {
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-100 bg-[#7765F3]">
      <h2 className="mb-4 text-2xl font-semibold leading-3">
        Recent transactions
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID #</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">input </th>
              <th className="px-4 py-2">Output</th>
              <th className="px-4 py-2">status</th>
            </tr>
          </thead>
          <tbody>
            {history?.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.historyId}</td>
                <td className="border px-4 py-2">{item.userAddress}</td>
                <th className="px-4 py-2">{item.tokenB}</th>
                <th className="px-4 py-2">{item.tokenA}</th>
                <th className="px-4 py-2">{item.inputValue}</th>
                <th className="px-4 py-2">{item.outputValue}</th>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-[#7765f3] text-gray-900">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
