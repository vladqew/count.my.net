document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('form').onsubmit = () => {
            const names = document.querySelector('#gh').value;
            alert(`Hello , ${names}`)
            document.querySelector('#gh').value = ''

            return false;
    }

})
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select').onchange = function() {
        document.querySelector('body').style.backgroundColor = this.value
    }

    
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').onclick = () => {
        const inf = document.querySelector('#gh').value;
        document.querySelector('h1').innerHTML = `Hello, ${inf}`
        document.querySelector('#gh').value = ''

        return false;
    }
})




