import InteractiveMenu from "../../Shared/Templates/InteractiveMenu";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../Shared/Store/store";
import {
  addEmployee,
  removeEmployee,
  checkEmployee,
  displayEmployees,
} from "../../Features/Lab1/taskOneSlice";

export interface IEmployee {
  name: string;
  position: string;
  education: string;
  experience: string;
}

const Worker = () => {
  const dispatch = useDispatch();
  const workers = useSelector<AppRootState, Array<IEmployee>>(
    (state) => state.taskOneSlice
  );

  let result = "";
	const workersToString = JSON.stringify(workers);

  const addEmployeeHandler = (name: string, position: string, education: string, experience: string) => {
    dispatch(addEmployee({name, position, education, experience}));
  };

  const removeEmployeeHandler = (name: string) => {
		dispatch(removeEmployee({name}));
	};

  const checkEmployeeHandler = (name: string) => {
		dispatch(checkEmployee({name}));
	};

  const displayEmployeesHandler = () => {
    dispatch(displayEmployees({}));
  };

  return (
    <InteractiveMenu
      field1="ФИО: "
      field2="Должность: "
      field3="Образование: "
      field4="Стаж работы (лет): "
      button1="Добавить сотрудника"
      button2="Удалить сотрудника"
      button3="Проверить наличие сотрудника"
      button4="Показать всех сотрудников"
      result={result}
    >
      null
    </InteractiveMenu>
  );
};

export default Worker;
