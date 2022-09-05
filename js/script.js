let students = [];
let averages = [];

try {
	let qtdStudents = Number(prompt("Digite a quantidade de alunos que serão inseridos no sistema.")).toFixed(0);

	if (isNaN(qtdStudents)) {
		throw "O valor digitado deve ser um número.";
	}

	for (let i = 0; i < qtdStudents; i++) {
		let nameStudent = prompt("Digite o nome do estudante.");
		let nota1 = Number(prompt("Digite a primeira nota."));
		let nota2 = Number(prompt("Digite a segunda nota."));

		if (isNaN(nota1) || isNaN(nota2)) {
			alert("Estudante desconsiderado pois a nota digitada é inválida!\nDigite os dados novamente.");
			i--;

			continue;
		} else {
			let student = {
				name: nameStudent,
				nota1: nota1,
				nota2: nota2,
			};
			students.push(student);
		}
	}
} catch (error) {
	alert(error);
}

function average(students, iterator) {
	for (let i = 0; i < iterator; i++) {
		let average = (students[i].nota1 + students[i].nota2) / 2;

		averages.push({
			name: students[i].name,
			avg: average.toFixed(2),
		});

		if (averages[i].avg >= 7) {
			alert(
				`A média do(a) aluno(a) ${averages[i].name} é: ${averages[i].avg}\nParabéns, ${averages[i].name}! Você passou no concurso! :)`
			);
		} else {
			alert(
				`A média do(a) aluno(a) ${averages[i].name} é: ${averages[i].avg}\nNão foi dessa vez, ${averages[i].name}. :(`
			);
		}
	}
}
average(students, students.length);
