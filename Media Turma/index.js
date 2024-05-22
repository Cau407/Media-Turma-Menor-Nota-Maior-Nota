var nAlunos = parseInt(prompt("Qual o número de alunos em sua sala?"))
var alunosComNota = 0
var somaNotas = 0
var maiorNota = 0
var menorNota = 10

while (alunosComNota < nAlunos){
  var notaAluno = parseFloat(prompt("Qual a nota do aluno?"))
  somaNotas += notaAluno
  if(notaAluno > maiorNota){
    maiorNota = notaAluno
  }
  if(notaAluno < menorNota){
    menorNota = notaAluno
  }
  alunosComNota++
}

var mediaTurma = somaNotas / nAlunos

console.log(`A media da turma foi ${mediaTurma}, sendo a maior nota ${maiorNota} e a menor nota ${menorNota}`)