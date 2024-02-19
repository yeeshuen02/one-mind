export const listColumns = [
  { field: "PatientID", 
    headerName: "Patient ID", 
    width: 180 
  },
  {
    field: "Name",
    headerName: "Name",
    width: 370,
  },
  {
    field: "Age",
    headerName: "Age",
    width: 120,
  },
  {
      field: "Gender",
      headerName: "Gender",
      width: 120,
  },
  {
    field: "Date",
    headerName: "Date",
    width: 150,
    renderCell: (params) => formatDate(params.value) 
  },
  {
      field: "Score",
      headerName: "PHQ-9 Score",
      width: 180,
  },

  {
    field: "Status",
    headerName: "Status",
    width: 120,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  },
];

const formatDate = (timestamp) => {
  if (!timestamp) return ''; 
  const dateObject = timestamp.toDate();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return dateObject.toLocaleDateString(undefined, options);
};