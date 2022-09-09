function cinemaTikets (input){
    let index = 0;
    let command = input[index];
    index++;

    let studentCount = 0;
    let standardCount = 0;
    let kidCount = 0;
    let totalTickets = 0;

    while (command!=="Finish"){
        let name = command;
        let freeSeats= Number (input[index]);
        index++;
        let soldTicket = 0;

        let tempCommand = input[index];
        index++;

        while (tempCommand!=="End"){
            let ticket = tempCommand;
            soldTicket++;

            switch(ticket){
                case "student": studentCount++; break;
                case "standard" : standardCount++; break;
                case "kid" : kidCount++; break;
            }
            if (soldTicket===freeSeats){
                
                break;
            }

            
            tempCommand = input[index];
            index++;
        }
        totalTickets += soldTicket;
        let percentage = soldTicket/freeSeats*100;

        console.log (`${name} - ${percentage.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    let percenrageStudent = studentCount/totalTickets*100;
    let percentageStandart = standardCount/totalTickets*100;
    let percentageKid = kidCount/totalTickets*100;
    console.log(`${percenrageStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandart.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKid.toFixed(2)}% kids tickets.`);
   

}
cinemaTikets(["Shutter Island",
   "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"]);

