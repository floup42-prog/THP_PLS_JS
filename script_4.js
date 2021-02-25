const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


  console.log("********** liste les entrepreneurs qui sont nés dans les années 70 :")
  entrepreneurs.forEach(weekContent => {
   if (weekContent.year >= 1970 && weekContent.year < 1980) {
    console.log(weekContent);
   }
    else {
      
    }
  });


  console.log("********** liste des entrepreneurs avec leurs prénoms et leurs noms:")
entrepreneurs.forEach(weekContent => {
  let tab = [];
  tab = weekContent.first + " " + weekContent.last;
  console.log(tab)
});


console.log("********** Quel âge aurait chaque entrepreneurs aujourd'hui ?")
for (i = 0; i < entrepreneurs.length; i++){
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " | would have had => " + (2020 - entrepreneurs[i].year) + " years old") ;
}


console.log("********** liste des entrepreneurs dans l'ordre alphabétique :")

alphab = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last))
console.log(alphab)