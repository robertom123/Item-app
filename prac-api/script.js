


document.getElementById('submit').addEventListener('click', (e)=> {
    e.preventDefault();
    let x = document.getElementById('items').value;
    console.log(x);
    document.getElementById('items').value = "";

   

}, false);


let url = 'http://localhost:7000/api/item';

async function poster(){
    

    let item = {
        item: 'gizmo'
    };

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           // "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });

    let result = await res.json();
    alert(result.message);


}

//poster();

async function getter(){
    let res = await fetch(url);

    let data = await res.json();
    data.forEach(items => {
        //console.log(items);
        console.log(items.item);
        
    });
    
    //console.log(data);
}

getter()
 