import { format } from "date-fns";
import { ColumnsFilter } from "./ColumnsFilter";
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "id",
    accessor: "id",
    Filter: ColumnsFilter,
    disableFilters:true,
    sticky: 'left'
  },
  {
    Header: "First name",
    Footer: "First name",
    accessor: "first_name",
    Filter: ColumnsFilter,
    sticky: 'left'
  },
  {
    Header: "Last name",
    Footer: "Last name",
    accessor: "last_name",
    Filter: ColumnsFilter,
    sticky: 'left'
  },
  {
    Header: "Date of birth",
    Footer: "Date of birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    Filter: ColumnsFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnsFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnsFilter,

  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: ColumnsFilter,

  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    Filter: ColumnsFilter,

  },
  
];
export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "id",
    accessor: "id",
    Filter: ColumnsFilter,
    disableFilters:true,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First name",
        Footer: "First name",
        accessor: "first_name",
        Filter: ColumnsFilter,
      },
      {
        Header: "Last name",
        Footer: "Last name",
        accessor: "last_name",
        Filter: ColumnsFilter,
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of birth",
        Footer: "Date of birth",
        accessor: "date_of_birth",
        Filter: ColumnsFilter,
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumnsFilter,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        Filter: ColumnsFilter,
      },
    ],
  },
];
