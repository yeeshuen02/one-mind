import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { listColumns } from "./datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import AddPatient from "../AddPatients/AddPatient";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Datatable = ({search, selectedValue, selectedDate, selectedGenderOption, filterScore, selectedStatusOption}) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
      //Listen to realtime data
      const unsub = onSnapshot(collection(db, "PatientList"), (snapShot) => {
        const list = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOriginalData(list);
      }, (error)=>{
        console.log(error)
      });

      return () =>{
        unsub();
      }
  }, []);

  console.log(data)

  // for filtering data
  useEffect(() => {
    let filteredData = [...originalData];

    //search for name or id
    if (search.length > 0) {
      filteredData = filteredData.filter(
        (item) =>
          (item.Name && item.Name.toLowerCase().includes(search.toLowerCase())) ||
          (item.PatientID && item.PatientID.toLowerCase().includes(search.toLowerCase()))
      );
    }

    //filter age
    if (selectedValue) {
      const [minAge, maxAge] = selectedValue.split('-').map(Number);
      filteredData = filteredData.filter(
        (item) =>
        item.Age >= minAge && item.Age <= maxAge 
      );
    }  

    //filter date
    if (selectedDate){
      const formattedSelectedDate = new Date(selectedDate).toLocaleDateString();
      filteredData = filteredData.filter(
        (item) => {
          if (item.Date && item.Date.toDate) {
            const itemDate = item.Date.toDate().toLocaleDateString();
            return itemDate === formattedSelectedDate;
          }
          return false;
        }
      );
    }

    //filter gender
    if (selectedGenderOption) {
      filteredData = filteredData.filter(
        (item) =>
          item.Gender=== selectedGenderOption
          // item.Gender.toLowerCase() === selectedGenderOption.toLowerCase()

      );
    }

    //filter score
    if (filterScore) {
      filteredData = filteredData.filter(
        (item) =>
          item.Score === filterScore
      );
    }

    //filter status
    if (selectedStatusOption) {
      filteredData = filteredData.filter(
        (item) =>
          item.Status === selectedStatusOption
      );
    }

    setData(filteredData);
  }, [search, selectedValue, selectedDate, selectedGenderOption, filterScore, selectedStatusOption, originalData]);

  //action column
  const actionColumn = [{
    field: "action", width: 100, headerName: "",
    renderCell:(params)=>{
      return(
        <div onClick={()=>handleDelete(params.row.id)}>
          <IconButton color="primary" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      )
    }
  }]

  //delete patient
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this patient information? This action is irreversible.");

    if (isConfirmed){
      try{
        await deleteDoc(doc(db, "PatientList", id));
        setData(data.filter((item) => item.id !== id));
      }catch(err){
        console.log(err)
      }
    }
  };

  return (
      <div className="datatable">
        <div className="datatableTitle">
          Patient List
          <Link to="/addpatient" className="addpatient">
            + Add Patient
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={listColumns.concat(actionColumn)}
          initialState={{
            ...data.initialState,
            pagination: { paginationModel: { pageSize: 8 } },
          }}
          // pageSizeOptions={[0,8]}
          //checkboxSelection
        />
      </div>
    );
};

export default Datatable;