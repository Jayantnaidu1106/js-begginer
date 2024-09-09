const api = new XMLHttpRequest();
const url = 'https://api.github.com/users/jayantnaidu1106'
api.open('GET',url)
let image ='';
api.onreadystatechange = function() 
    {
        if(api.readyState === 4)
        {
            const data = JSON.parse(this.responseText)
            console.log(data.avatar_url);
           
            image =image + data.avatar_url;
            const  img = document.querySelector('img')
            const div = document.querySelector('div')
            div.innerHTML = `${data.followers}`
            img.outerHTML=`<img src="${data.avatar_url}" alt="">`
            console.log(img.outerHTML);
        }

    }
   
api.send();

