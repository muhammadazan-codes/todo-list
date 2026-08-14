const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const clearBtn = document.getElementById('clear');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = input.value.trim();
    const li = document.createElement("li");
    li.style.border='1px solid orange';
    li.style.borderRadius='5px';
    li.style.padding='10px';
    li.style.marginBottom='10px';
    li.style.backgroundColor='lightyellow';
    li.style.fontFamily='Arial, sans-serif';
    li.style.display='flex';
    li.style.justifyContent='space-between';    
    li.style.gap='5px';
    li.innerText= task;

    list.appendChild(li);
    input.value = ''; 

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    deleteBtn.style.color = 'red';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.fontSize = '8px';
    deleteBtn.style.display = 'flex';
    deleteBtn.style.flexDirection = 'row';
    deleteBtn.style.justifyContent = 'space-between';
    deleteBtn.style.border = 'none';
    deleteBtn.style.background = 'transparent';

});
clearBtn.addEventListener('click', () => {
    list.innerHTML = '';
});
