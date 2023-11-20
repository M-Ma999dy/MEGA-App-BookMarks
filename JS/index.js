var siteName            = document.getElementById('nameOfSite');
var siteUrl             = document.getElementById('urlOfSite');

var visitBtn            = document.getElementById("visitBtn");
var updateBtn           = document.getElementById("updateBtn");
var deleteBtn           = document.getElementById("deleteBtn");


var h = "";
var y = "";

var siteList         = [];


if(localStorage.getItem('MBlist') != null){
    siteList = JSON.parse(localStorage.getItem('MBlist'));
    displaySites(siteList);
}else{
    siteList = [];
}

function addSite(){

    var site ={
        name:       siteName.value,
        url:        siteUrl.value,
    }

    siteList.push(site);

   setTotLocalStorage()

   displaySites(siteList);

   clearForm();
}


function updateSite(){
    var site ={
        name:    siteName.value,
        url:     siteUrl.value,
    }

    siteList.splice(y,1,site);
    setTotLocalStorage()

   displaySites(siteList);

   clearForm();
}


function displaySites(list){
    var mega = ``;
    for(var i = 0 ; i < list.length ; i++ ){
        mega += 
        `
        <tr>
            <th class="text-center px-5">${i+1}</th>
            <th class="text-center px-5">${list[i].name}</th>
            <th class="text-end px-5">
            <button id="visitBtn" class="btn btn-primary mx-3" onclick="visitYourSite(${i})">Visit</button>
            <button id="updateBtn" class="mx-3 btn btn-warning" onclick="getSiteData(${i})">update</button>
            <button id="deleteBtn" class="mx-3 btn btn-danger" onclick="deleteSite(${i})">Delete</button>
            </th>
        </tr>
        `
    }
    document.getElementById("tableData").innerHTML = mega
}



function visitYourSite(index){
    var a = siteList[index].url
    window.open(a)
}




function clearForm(flag){
    
    siteName.value    = flag? flag.name:""
    siteUrl.value     = flag? flag.url:""
}

function deleteSite(index){
    siteList.splice(index,1)
    displaySites(siteList)
    setTotLocalStorage()
}



function setTotLocalStorage(){
    localStorage.setItem('MBlist',JSON.stringify(siteList))
}

function getSiteData(index){

    
    clearForm(siteList[index])
    
    
    addBtn.classList.add("d-none")
    document.getElementById("updateBtn").classList.replace("d-none","d-inline","mx-auto")

    y = index
}


function searchDB(searchKey){
    var searchList = []
    for (var i=0 ; i < siteList.length; i++){
        if(siteList[i].name.toLowerCase().includes(searchKey.toLowerCase())) {
            searchList.push(siteList[i]);
        }
    }
    displaySites(searchList);
}







