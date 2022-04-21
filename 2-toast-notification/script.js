const btn = document.getElementById('btn');
const container = document.getElementById('container');


btn.addEventListener('click', () =>
{
    
    createNotification();
    
})

function createNotification()
{
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerHTML ='Hello its Your Notification' 
    container.appendChild(notification);
    setTimeout(() =>
    { 
        notification.remove()
    },2000)
}
function changeColor()
{
    btn.classList.add('chcolor');
}