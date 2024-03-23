let guest = [
    {
        nameGuest: "Brad Pitt",
        id: 1
    },

    {
        nameGuest: "Jonnhy Depp",
        id: 2

    },
    {

        nameGuest: 'Cristiano Ronaldo',
        id: 3
    },
    {
        nameGuest: 'Georgina Rodriguez',
        id: 4

    },
    {
        nameGuest: 'Chiara Ferragni',
        id: 5

    },
    {
        nameGuest: 'Amal Clooney',
        id: 6

    },

    {
        nameGuest: 'Fedez',
        id: 7

    },
    {
        nameGuest: 'Amadeus',
        id: 8

    },
    {
        nameGuest: 'Fiorello',
        id: 9

    }

];


guest.forEach((guest, i) => {
    if (i < 5) {
        guest['tableName'] = 'tavolo1';
    } else { guest['tableName'] = 'tavolo2' };
    guest['place'] = i + 1;
    console.log(guest);
});

/* Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84 */

const student =[
    {
        id:213,
        nameStudent: 'Marco della Rovere',
        grades: 78

    },
    {
        id:110,
        nameStudent: 'Paola Cortellessa',
        grades: 96

    },
    {
        id:250,
        nameStudent: 'Andrea Mantegna',
        grades: 48

    },
    {
        id:145,
        nameStudent: 'Gaia Borromini',
        grades: 74

    },
    {
        id:196,
        nameStudent: 'Luigi Grimaldello',
        grades: 68

    },
    {
        id:102,
        nameStudent: 'Piero della Francesca',
        grades: 50

    },
    {
        id:120,
        nameStudent: 'Francesco da Polenta',
        grades: 84

    }
];

const nameUppercas = student.map((nameS) => nameS.nameStudent.toUpperCase());
console.log(nameUppercas);

const gradesBest = student.filter((student) => {
    if(student.grades>70){return true}
});
const gradesId = gradesBest.filter((student) => {
    if(student.id>120){return true}
});
console.log(gradesBest, gradesId);