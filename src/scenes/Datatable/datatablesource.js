export const listColumns = [
    { field: "Document", 
      headerName: "Patient ID", 
      width: 70 
    },
    {
      field: "Name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "Age",
      headerName: "Age",
      width: 100,
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
    },
    {
        field: "Score",
        headerName: "PHQ-9 Score",
        width: 120,
    },

    {
      field: "Status",
      headerName: "Status",
      width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    },
  ];