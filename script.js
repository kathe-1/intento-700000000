function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    
    var age = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();
    var hours = Math.floor((today - birthdate) / (1000 * 60 * 60));
    
    if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
        age--;
        months += 12;
    }

    if (days < 0) {
        months--;
        var daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += daysInLastMonth;
    }

    document.getElementById("result").innerHTML = "Edad: " + age + " años<br>" +
                                                    "Meses: " + months + "<br>" +
                                                    "Días: " + days + "<br>" +
                                                    "Horas: " + hours;
}