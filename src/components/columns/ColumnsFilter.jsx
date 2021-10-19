import React from "react";

export const ColumnsFilter = ({ column}) => {
    const { filterValue, setFilter} = column;
  return (
    <span>
      Search:{""}
      <input value={filterValue || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};
