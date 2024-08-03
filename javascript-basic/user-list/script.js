// JSON data

const users=[
    {
        name:"John Doe",
      age:"Age:25",
        interest:["coding","reading"]
    },
    {
        name:"john Doe",
       age:"Age:25",
        interest:["music","reading"]
    },
    {
        name:"john Doe",
        age:"Age:25",
        interest:["photography","reading"]
    }
];

// Function to display users
document.addEventListener('DOMContentLoaded',function(){
    function displayUsers(){
        const userList=document.getElementById("user-list")
        users.forEach(item=>{
            const userDiv =document.createElement('div');
            userDiv.classList.add('user');
            // const userName=document.createElement('h2');
            // userName.textContent=`Age:${user.age}`;
            // const userInterests = document.createElement('p');
            // userInterests.textContent = `Interests: ${user.interests.join(', ')}`;
            // userDiv.appendChild(userName);
            // userDiv.appendChild(userAge);
            // userDiv.appendChild(userDiv);
            userDiv.innerHTML=`<h2>${item.name}</h2>
            <p>${item.age}</p> <div class="intrest">${item.interest}</div>`
            userList.appendChild(userDiv)
        });
    
    }
    // Call the function to display users on page load
    displayUsers();
})

