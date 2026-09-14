const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
nav.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('active');
});
});

const sensitivityInputs = ['general', 'redDot', 'scope2x'];

sensitivityInputs.forEach(id => {
const input = document.getElementById(id);
const output = document.getElementById(`${id}Value`);

```
input.addEventListener('input', () => {
    output.textContent = input.value;
});
```

});

document.getElementById('saveSensitivity').addEventListener('click', () => {

```
const settings = {};

sensitivityInputs.forEach(id => {
    settings[id] = document.getElementById(id).value;
});

localStorage.setItem(
    'freeFireSensitivity',
    JSON.stringify(settings)
);

document.getElementById('sensitivityMessage').textContent =
    '¡Configuración guardada correctamente!';
```

});

const savedSettings = localStorage.getItem('freeFireSensitivity');

if (savedSettings) {

```
const settings = JSON.parse(savedSettings);

sensitivityInputs.forEach(id => {

    if (settings[id] !== undefined) {

        document.getElementById(id).value = settings[id];

        document.getElementById(`${id}Value`).textContent =
            settings[id];

    }

});
```

}
