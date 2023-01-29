document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function() {
        const name = document.querySelector('#name').value;
        alert(`Hello,${name}!`)
        
    });

});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {
            document.querySelector('body').style.backgroundColor = button.dataset.color
        }
       
    })
    
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn').addEventListener('click', function() {
        document.querySelector('h1').innerHTML = `Hello, Vlad`
    })
})
