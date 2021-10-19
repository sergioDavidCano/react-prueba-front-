import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
export const BasicTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((columns) => (
              <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {
          footerGroups.map( footerGroups=> (
            <tr {...footerGroups.getFooterGroupProps()}>   
               {
                 footerGroups.headers.map(columns => (
                   <th {...columns.getFooterProps()}>
                     {
                       columns.render('Footer')
                     }
                   </th>
                 ))
               }
            </tr>
          ))
        }
      </tfoot>
    </table>
  );
};
