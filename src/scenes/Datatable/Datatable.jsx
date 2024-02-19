import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { listColumns } from "./datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import AddPatient from "../AddPatients/AddPatient";

const Datatable = ({search, selectedValue, selectedDate, selectedGenderOption, filterScore, selectedStatusOption}) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
      //Listen to realtime data
      const unsub = onSnapshot(collection(db, "PatientList"), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()}); 
        });
        setData(list);
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
    let filteredData = originalData;

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
          const itemDate = item.Date.toDate().toLocaleDateString();
          return itemDate === formattedSelectedDate;
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
          columns={listColumns}
          initialState={{
            ...data.initialState,
            pagination: { paginationModel: { pageSize: 8 } },
          }}
            // pageSizeOptions={[0,8]}

          checkboxSelection
        />
      </div>
    );
};

export default Datatable;