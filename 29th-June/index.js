for(i=0;i<3;i++){
    for(j=0;j<3;j++){
        console.log(i,j);
    }
}




for(let i=1;i<=4;i++){
    let stars="";
    for(j=1;j<=5;j++){
        stars=stars+"*";
    }
    console.log(stars);
}


for(i=1;i<=5;i++){
    let stars="";
    for(j=1;j<=i;j++){
        stars=stars+"*";
    }
    console.log(stars);
}


for(i=1;i<=5;i++){
    stars="";
    for(j=1;j<=5;j++){
        stars=stars+j;
    }
    console.log(stars);
}


for(i=1;i<=5;i++){
    let stars="";
    for(j=1;j<=i+1;j++){
        stars=stars+"*"
    }
    console.log(stars);
}



for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        console.log(j)
    }
}

for(let i=1;i<=5;i++){
    let stars="";
    for(j=1;j<=i;j++){
        stars=stars+i;
    }
    console.log(stars);
}

let count=1;
for(let i=1;i<=5;i++){
    let stars="";
    for(let j=1;j<=i;j++){
        stars=stars+count;
        count=count+1;
    }
    console.log(stars);
}


