// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsChecked } from "../redux/slice/comparisonSlice";

// const CheckBox = () => {
//   const isChecked = useSelector((state) => (state.comparison.isChecked))
//   const dispatch = useDispatch()
//   const onCheckboxChange = ({
//       target: {
//         checked,
//         dataset: { chkboxname },
//       },
//     }) => {
//         dispatch (setIsChecked({
//         ...isChecked,
//         [chkboxname]: checked,
//       }));
//     },
//     onFormSubmit = (e) => {
//       e.preventDefault();
//     };

 
//   return (
//     <form onSubmit={onFormSubmit}>
//       {["chckbox1"].map((checkbox) => (
//         <label key={checkbox}>
//           <input
//             type="checkbox"
//             data-chkboxname={checkbox}
//             onChange={onCheckboxChange}
//             checked={isChecked[checkbox]}
//           />
//         </label>
//       ))}
//     </form>
//   );
// };

// export default CheckBox;
