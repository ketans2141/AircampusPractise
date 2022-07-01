for(i=1;i<=5;i++){
    let stars="";
    for(j=1;j<=5;j++){
        if(i==j){
            stars=stars+"*";
        }
        else if((i+j)==6){
            stars=stars+"*";
        }
        else{
            stars=stars+" ";
        }
    }
    console.log(stars);
}