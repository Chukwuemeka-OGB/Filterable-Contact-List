//Get Input Element
const filterInput = document.querySelector('#filter');

//Add Event

filterInput.addEventListener('keyup', filterNames);


function filterNames(){
    //get Input value
    const FilterValue = filterInput.value.toLowerCase();

    //Get Names ul
    const ul = document.querySelector('#names');
    //get lis from ul
    const li = document.querySelectorAll('li.collection-item');

    li.forEach((liItem)=>{
        let a = liItem.querySelector('a');
        //Matching
        if(a.innerText.toLowerCase().indexOf(FilterValue) > -1){
            liItem.style.display = '';
        }else{
            liItem.style.display = ' none';
        }
    })

}    

    // //looping through lis
    // for(let i=0; i<li.length; i++){
    //     let a = li[i].querySelectorAll('a');
    //     console.log(a);

    //     //matching
    //     if(a.innerHTML.toLowerCase().indexOf(FilterValue) > -1){
    //         li[i].style.display = '';
    //     }else{
    //         li[i].style.display = 'none';
    //     }

    // }