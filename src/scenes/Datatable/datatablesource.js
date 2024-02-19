import "./datatable.css";

export const listColumns = [
  { field: "PatientID", 
    headerName: "Patient ID", 
    width: 150 ,
    headerClassName: 'id-header',
  cellClassName: 'id-cell',
  },
  {
    field: "Name",
    headerName: "Name",
    width: 370,
    headerClassName: 'name-header',
  cellClassName: 'name-cell',
  },
  {
    field: "Age",
  headerName: "Age",
  width: 150,
  headerClassName: 'age-header',
  cellClassName: 'age-cell',
  },
  {
      field: "Gender",
      headerName: "Gender",
      width: 170,
      headerClassName: 'gender-header',
  cellClassName: 'gender-cell',
  },
  {
    field: "Date",
    headerName: "Date",
    width: 250,
    renderCell: (params) => formatDate(params.value) ,
    headerClassName: 'date-header',
  cellClassName: 'date-cell',
  },
  {
      field: "Score",
      headerName: "PHQ-9 Score",
      width: 200,
      headerClassName: 'score-header',
  cellClassName: 'score-cell',
  },

  {
    field: "Status",
    headerName: "Status",
    width: 220,
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