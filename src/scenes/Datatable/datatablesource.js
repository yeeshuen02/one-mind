import "./datatable.css";

export const listColumns = [
  { field: "PatientID", 
    headerName: "Patient ID", 
    width: 130 ,
    headerClassName: 'id-header',
  cellClassName: 'id-cell',
  },
  {
    field: "Name",
    headerName: "Name",
    width: 220,
    headerClassName: 'name-header',
  cellClassName: 'name-cell',
  },
  {
    field: "Age",
  headerName: "Age",
  width: 100,
  headerClassName: 'age-header',
  cellClassName: 'age-cell',
  },
  {
      field: "Gender",
      headerName: "Gender",
      width: 120,
      headerClassName: 'gender-header',
  cellClassName: 'gender-cell',
  },
  {
    field: "Date",
    headerName: "Date",
    width: 150,
    renderCell: (params) => formatDate(params.value) ,
    headerClassName: 'date-header',
  cellClassName: 'date-cell',
  },
  {
      field: "Score",
      headerName: "PHQ-9 Score",
      width: 150,
      headerClassName: 'score-header',
  cellClassName: 'score-cell',
  },

  {
    field: "Status",
    headerName: "Status",
    width: 120,
    headerClassName: 'status-header',
    cellClassName: 'status-cell',
  },
];

const formatDate = (timestamp) => {
  if (!timestamp) return ''; 
  const dateObject = timestamp.toDate();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return dateObject.toLocaleDateString(undefined, options);
};