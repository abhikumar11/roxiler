import React, { useEffect } from "react";
import { getMonthTranstion } from "../redux/action";
import { useDispatch } from "react-redux";

const MonthSelector = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getMonthTranstion(dispatch, 3));
     }, []);
  
     const handleSelect = (e) => {
          dispatch(getMonthTranstion(dispatch, e.target.value));
     };
     return (
          <div>
               <div>
                    <div
                         class="container mt-5"
                         style={{ width: "30%", height: "30%" }}
                    >
                         <div class="form-group">
                              <select
                                   class="form-control"
                                   id="exampleSelect"
                                   onChange={handleSelect}
                              >
                                   <option value={1}>January</option>
                                   <option value={2}>Februry</option>
                                   <option value={3} selected>
                                        March
                                   </option>
                                   <option value={4}>April</option>
                                   <option value={5}>May</option>
                                   <option value={6}>June</option>
                                   <option value={7}>July</option>
                                   <option value={8}>August</option>
                                   <option value={9}>September</option>
                                   <option value={10}>October</option>
                                   <option value={11}>November</option>
                                   <option value={12}>December</option>
                              </select>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MonthSelector;
