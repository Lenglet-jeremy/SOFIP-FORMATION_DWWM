function calculDuree(secondes){
    let copy_parameter = secondes

    if(copy_parameter / 3600 >= 1){
        console.log("Le film a durée " + Math.round(copy_parameter / 3600) + " heures");
        copy_parameter -= Math.round(copy_parameter / 3600);
        console.log(copy_parameter / 3600)* 100 / 100;
    }
    if(copy_parameter / 60 >= 1){
        console.log("Le film a durée " + Math.round(copy_parameter / 60) + " minutes");
        copy_parameter -= Math.round(copy_parameter / 60);
    }
    if(copy_parameter >= 1){
        console.log("Le film a durée " + Math.round(copy_parameter / 3600) + " secondes");
    }
}

calculDuree(3630);