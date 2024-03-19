import "./datatable.css";
import { Link } from "react-router-dom";

export const listColumns = [
  {
    field: "index",
    headerName: "No.",
    width: 50,
    headerClassName: "index-header",
    cellClassName: "index-cell",
  },

  {
    field: "PatientID",
    headerName: "Patient ID",
    width: 130,
    headerClassName: "id-header",
    cellClassName: "id-cell",
  },
  {
    field: "Name",
    headerName: "Name",
    width: 220,
    headerClassName: "name-header",
    cellClassName: "name-cell",
  },
  {
    field: "Age",
    headerName: "Age",
    width: 100,
    headerClassName: "age-header",
    cellClassName: "age-cell",
  },
  {
    field: "Gender",
    headerName: "Gender",
    width: 120,
    headerClassName: "gender-header",
    cellClassName: "gender-cell",
  },
  {
    field: "Date",
    headerName: "Date",
    width: 150,
    renderCell: (params) => formatDate(params.value),
    headerClassName: "date-header",
    cellClassName: "date-cell",
  },
  {
    field: "Score",
    headerName: "PHQ-9 Score",
    width: 150,
    headerClassName: "score-header",
    cellClassName: "score-cell",
  },

  {
    field: "Status",
    headerName: "Status",
    width: 120,
    headerClassName: "status-header",
    cellClassName: "status-cell",
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.Status}`}>
          {params.row.Status}
        </div>
      );
    },
  },
];

const formatDate = (timestamp) => {
  if (!timestamp) return "";
  const dateObject = timestamp.toDate();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return dateObject.toLocaleDateString(undefined, options);
};
