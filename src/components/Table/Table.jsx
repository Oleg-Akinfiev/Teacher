import React from "react";

import BasicTable from "./BasicTable";

const Table = () => {
  return (
    <div>
      <div className="container">
        <div className="table__title">Расписание занятий</div>
        <BasicTable />
      </div>
    </div>
  );
};

export default Table;
