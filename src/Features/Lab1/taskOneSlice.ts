import { IEmployee } from "./TaskOne";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IRemoveEmployeeAction,
  IAddEmployeeAction,
  ICheckEmployeeAction,
  IDisplayEmployeesAction,
} from "./taskOneSlice_types";

const initialState: Array<IEmployee> = [
  {
    name: "Арнольд Шварцнеггер",
    position: "Front-End Team Leader",
    education: "Высшее",
    experience: "10 лет",
  },
];

const taskOneSlice = createSlice({
  name: "todoLists",
  initialState: initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<IAddEmployeeAction>) => {
      const { name, position, education, experience } = action.payload;
      const employee = {
        name,
        position,
        education,
        experience,
      };

      state.unshift(employee);
    },

    removeEmployee: (state, action: PayloadAction<IRemoveEmployeeAction>) => {
      return state.filter(
        (employee: IEmployee) => employee.name !== action.payload.name
      );
    },

    checkEmployee: (state, action: PayloadAction<ICheckEmployeeAction>) => {
      const exists = state.some(
        (employee) => employee.name === action.payload.name
      );

      if (exists) {
        alert("Сотрудник найден в файле!");
      } else {
        alert("Сотрудник не найден!");
      }
    },

    displayEmployees: (
      state,
      action: PayloadAction<IDisplayEmployeesAction>
    ) => {

		},
  },
});

export const { addEmployee, removeEmployee, checkEmployee, displayEmployees } =
  taskOneSlice.actions;

export default taskOneSlice.reducer;
