let url = 'http://localhost:7000/api/item';

document.getElementById('submit').addEventListener('click', (e)=> {
    e.preventDefault();
    let x = document.getElementById('items').value;
    console.log(x);
    document.getElementById('items').value = "";

   

async function poster(){
    

    let item = {
        item: x
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
poster();

}, false);


document.getElementById('get').addEventListener('click', (e)=>{
    e.preventDefault();
    async function getter(){
        let res = await fetch(url);
    
        let data = await res.json();
        data.forEach(items => {
            let ul = document.getElementById('ul');
            let li = document.createElement('li');
            li.textContent = items.item;

            ul.appendChild(li);
            //console.log(items);

            
        });
        
        //console.log(data);
    }
    
    getter();
});

//poster();
// get command
async function getter(){
    let res = await fetch(url);

    let data = await res.json();
    data.forEach(items => {
        //console.log(items);
        console.log(items.item);
        
    });
    
    //console.log(data);
}

getter();
 