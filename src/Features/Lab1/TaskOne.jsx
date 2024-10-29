
const Worker = () => {

	return (
		<div>
			<h2>Управление Работниками</h2>

			<label for="name">ФИО:</label><br />
			<input type="text" id="name" /><br /><br />

			<label for="position">Должность:</label><br />
			<input type="text" id="position" /><br /><br />

			<label for="education">Образование:</label><br />
			<input type="text" id="education" /><br /><br />

			<label for="experience">Стаж работы (лет):</label><br />
			<input type="number" id="experience" /><br /><br />

			<button onclick="addEmployee()">Добавить сотрудника</button>
			<button onclick="removeEmployee()">Удалить сотрудника</button>
			<button onclick="checkEmployee()">Проверить наличие сотрудника</button>
			<button onclick="displayEmployees()">Показать всех сотрудников</button>

			<h3>Результат:</h3>
			<pre id="result"></pre>

		</div>

	)
}

export default Worker;