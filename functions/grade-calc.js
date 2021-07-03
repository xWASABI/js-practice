// Stundent score, total possible score
// 15/20 => You got a C(75%)
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59



let getGrade = function(studentScore, totalScore = 100){

    let grade = studentScore / totalScore * 100

    if (grade <= 59){

        return `You scored a ${studentScore} out of ${totalScore}, which is a grade F (${grade}%)`

    }

    if (grade >= 60 && grade <= 69){

        return `You scored a ${studentScore} out of ${totalScore}, which is a grade D (${grade}%)`

    }

    if (grade >= 70 && grade <= 79){

        return `You scored a ${studentScore} out of ${totalScore}, which is a grade C (${grade}%)`

    }

    if (grade >= 80 && grade <= 89){

        return `You scored a ${studentScore} out of ${totalScore}, which is a grade B (${grade}%)`

    }

   else if (grade >= 90 && grade <= 100){

        return `You scored a ${studentScore} out of ${totalScore}, which is a grade A (${grade}%)`

    }
}

let result = getGrade(88)

console.log(result)