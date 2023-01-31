
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = function() {
        const task = document.querySelector('#ts').value
        if (task === ''){
            alert('Ви не можете відправити пусту заявку')
        }
        else {
            const li = document.createElement('li')
            li.innerHTML = task;
            document.querySelector('#tasks').append(li);
    
            document.querySelector('#ts').value = '';
        }

        return false;
    }
})