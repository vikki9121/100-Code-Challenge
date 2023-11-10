let startTime , endTime;
let imageSize=" ";
let image = new Image();
let bitSpeed =document.getElementById("bits");
    mbsSpeed =document.getElementById("mbs");
    kbsSpeed =document.getElementById("kbs");
    info =document.getElementById("info");


let totaleBitSpeed =0;
let totaleMbsSpeed =0;
let totaleKbsSpeed =0;
let numTest=10;

let teatCompleted=0;

// get random image from unsplash.com
let imageApi= "https://source.unsplash.com/random?topic=nature";

//when the image loads
image.onload=async function(){
    endTime = new Date().getTime();

    //Get image size

    await fetch(imageApi).then((response)=>{
        imageSize=response.headers.get("content-length");
        calculateSpeed();

    });
}

// function to calculate speed

function calculateSpeed(){
    let timeDuration = (endTime - startTime)/1000;
    // total bites
    let loadedBits = imageSize*8;
    let speedInBits= loadedBits /timeDuration;
    let speedInKbs = speedInBits/1024;
    let speedInMbs = speedInKbs/1024;

    totaleBitSpeed += speedInBits;
    totaleKbsSpeed += speedInKbs;
    totaleMbsSpeed += speedInMbs;

    teatCompleted++;

    //If all test completed then show the result (we get 5 then calqulate the speed)

    if(teatCompleted===numTest){
        let averageSpeedInBits = (totaleBitSpeed/numTest).toFixed(2);
        let averageSpeedInKbs = (totaleKbsSpeed/numTest).toFixed(2);
        let averageSpeedInMbs = (totaleMbsSpeed/numTest).toFixed(2);

        //Display average speed
        bitSpeed.innerHTML = `${averageSpeedInBits} bit/s`;
        mbsSpeed.innerHTML = `${averageSpeedInMbs} Mbs`;
        kbsSpeed.innerHTML = `${averageSpeedInKbs} Kbs`;
        info.innerHTML = "Test Completed!";
    }
    else{
        // Run the next test

        startTime = new Date().getTime();
        image.src=imageApi;
    }
}

// intial function to start the test

const init = async()=>{
    info.innerHTML="Testing...";
    startTime=new Date().getTime();
    image.src = imageApi;
};

// run test when window loads

window.onload =()=>{
    for(let i=0;i< numTest;i++){
        init();
    }
};