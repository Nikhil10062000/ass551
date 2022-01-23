var count = 0 ;
document.getElementById("counter").innerText = count ;



var like = document.getElementById("like");
like.addEventListener('dblclick', likes);
function likes() {
    count = count + 1;
	document.getElementById("counter").innerText = count;
    if (like.style.color == "black") {
      like.style.color = "red";
      like.style.backgroundColor ="black";
    } else {
      like.style.color = "black";
      like.style.backgroundColor ="whitesmoke";
    }
}



var img_arr = [
    'https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1570527140771-020891229bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
];

var btn_ref = document.getElementById('initButton');


btn_ref.addEventListener('click', showImages);



function showImages() {
    var container_ref = document.getElementById("gallery_container");

    container_ref.innerText = "";
    
    for(var i = 0; i < img_arr.length; i = i + 1) {
        var img_ref = document.createElement("img");
        img_ref.src = img_arr[i];
      

        container_ref.appendChild(img_ref);
    }

    



}











// showImages();

// var div_r = document.getElementById("something");

// console.log(div_r.innerText);
// console.log(div_r.textContent);

// div_r.innerText = "New Inner text";
// div_r.textContent = "New Inner Text";