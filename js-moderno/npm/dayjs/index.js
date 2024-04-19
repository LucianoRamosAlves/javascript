const dayjs = require('dayjs'); //* pego o module baixado


function birthday(date) {
  const birthday = dayjs(date) //* passo o parametro acima, nesse caso date, birthday é uma data do dayjs
  const today = dayjs() //* pego dia de hoje
  const ageInYears = today.diff(birthday, 'year') //* calcula a diferença entre 2 datas , veja que é TODAY diff BIRTHDAY passo uma data 1 , diff , data 2 e se eu quero em anos , ou minutos,etc..
  const nextBirthday = birthday.add(ageInYears + 1, 'year') //* descubro o proximo aniversario
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("1995-09-02")