//    PUT

fetch("http://localhost:3000/quotes")
.then(res=>res.json())
.then((data)=>{
    for(let i=0;i<data.length;i++){
        console.log(data[i].author);
        
    }
})

//    PUT

let options = {
    "method":"PUT",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
         "id": 2,
      "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      "author": "Abdul"
    })
};
fetch("http://localhost:3000/quotes/2",options)
.then(res=>{
    if(res.ok){
        console.log(res.statusText);
        
    }else{
        console.log("data not put");
        
    }
})

//     PATCH

let options={
    "method":"PATCH",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "author": "Kumar"
    })
};

fetch("http://localhost:3000/quotes/1",options)
.then(res=>{
    if(res.ok){
        console.log(res.statusText);
        
    }else{
        console.log("data not patch ");
        
    }
})


let quotes=[
    {
      "id": 4,
      "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
      "author": "Bill Gates"
    },
    {
      "id": 5,
      "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      "author": "Rumi"
    },
    {
      "id": 6,
      "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "id": 7,
      "quote": "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
      "author": "Albert Einstein"
    },
    {
      "id": 8,
      "quote": "O man you are busy working for the world, and the world is busy trying to turn you out.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "id": 9,
      "quote": "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
      "author": "Abdul Kalam"
    },
    {
      "id": 10,
      "quote": "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
      "author": "Abraham Lincoln"
    }
];

//              POST

let options={
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    }
};

for(let i=0;i<quotes.length;i++){
    let obj=quotes[i];
    options.body=JSON.stringify(obj)
    fetch("http://localhost:3000/quotes",options)
    .then(res=>{
        if(res.ok){
            console.log(res.statusText);
            
        }else{
            console.log("Data not posted");
            
        }
    })
};


//    DELETE
let options={
    "method":"DELETE"
};
fetch("http://localhost:5000/quotes/5",options)
.then(res=>{
    if(res.ok){
        console.log(res.statusText);
        
    }else{
        console.log("Data not deleted");
        
    }

});