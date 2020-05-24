function Student(nameStudent, emailStudent){
    let name = nameStudent;
    let email = emailStudent;
    let homeworkResults = [];

    this.getName = () => {
        return name;
    };

    this.getEmail = () => {
        return email;
    };

    this.addHomeworkResults = function(topic, success){
        homeworkResults.push({
            topic: topic,
            success: success
        })
    };

    this.getHomeworkResults = () => {
        return homeworkResults;
    };
}

function FrontendLab(students, failedLimit){
    let StudentsList = [];
    students.forEach(student => {
        if(!(student instanceof Student)){
            StudentsList.push(new Student(student.name, student.email)); 
        }
    })
    let failedHomeworksLimit = failedLimit;

    this.printStudentsList = () => {
        StudentsList.forEach(element => {
            console.log('Name: '+element.getName() + ', Email: ' + element.getEmail());
            console.log(element.getHomeworkResults());
        })
    };

    this.addHomeworkResults = (homeworkResult) => {
        homeworkResult.results.forEach(homework => {
            StudentsList.forEach(student => {
                if(homework.email === student.getEmail()){
                    student.addHomeworkResults(homeworkResult.topic, homework.success);
                }
            })
        })
    };

    this.printStudentsEligibleForTest = () => {
        StudentsList.forEach(element => {
            let results = 0;
            element.getHomeworkResults().forEach(result => {
                if(result.success === false){
                    results++;
                }
            })
            if(results <= failedHomeworksLimit){
                console.log('Name: '+element.getName() + ', Email: ' + element.getEmail());
            }
        })
    };
}
