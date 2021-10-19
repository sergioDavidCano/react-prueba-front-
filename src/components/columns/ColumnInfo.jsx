import React, { useMemo } from "react";
import { useHistory } from "react-router";
import {
  useTable,
  useSortBy,
  usePagination,
  useColumnOrder,
  useRowSelect,
  useGlobalFilter,
  useFilters,
} from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA.json";
import { GROUPED_COLUMNS } from "./columns";
import { Checkbox } from "../../helpers/Checkbox";
import { GlobalFilter } from "./GlobalFilter";
import { Navbar } from "../ui/Navbar";
export const ColumnsInfo = () => {
  const history =  useHistory();
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    setColumnOrder,
    state,
    allColumns,
    selectedFlatRows,
    setGlobalFilter,
    getToggleHideAllColumnsProps,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );
  const changeOrder = () => {
    setColumnOrder([
      "id",
      "first_name",
      "last_name",
      "country",
      "phone",
      "date_of_birth",
    ]);
  };
  const changeOrderInit = () => {
    setColumnOrder([
      "id",
      "first_name",
      "last_name",
      "date_of_birth",
      "country",
      "phone",
    ]);
  };
  const { pageIndex, pageSize, globalFilter } = state;
  const params = () => {
    previousPage();
    history.push(`/table?desde=${pageIndex}`)
  };
  return (
    <>
      <Navbar />
      <table {...getTableProps()} className="table sticky">
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((columns) => (
                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                  {columns.render("Header")}
                  <span>
                    {columns.isSorted
                      ? columns.isSortedDesc
                        ? " 🔼"
                        : " 🔽"
                      : ""}
                  </span>
                  {/* <div>{columns.canFilter ? columns.render("Filter") : null}</div> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onClick={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ with: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={params} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <button onClick={changeOrder}>Orden diferente</button>
        <button onClick={changeOrderInit}>Orden inicial</button>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div>
          <div>
            <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
          </div>
          {allColumns.map((column) => (
            <div key={column.id}>
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </div>
          ))}
        </div>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map((row) => row.original),
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
    </>
  );
};
