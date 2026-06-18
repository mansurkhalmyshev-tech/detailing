 // === Навигация ===
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// === Калькулятор ===
const prices = {
    moyka: 1500,
    polirovka: 8000,
    keramika: 25000,
    plenka: 35000,
    himchistka: 6000,
    fary: 3000
};

function calculatePrice() {
    const service = document.getElementById('calcService').value;
    const size = parseFloat(document.getElementById('calcSize').value);
    const extra = parseInt(document.getElementById('calcExtra').value);
    
    const basePrice = prices[service] || 0;
    const total = Math.round(basePrice * size + extra);
    
    document.getElementById('calcResult').textContent = 
        Итоговая стоимость: ${total.toLocaleString('ru-RU')} ₽;
}

function selectService(service) {
    document.getElementById('calcService').value = service;
    calculatePrice();
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
}

function bookService() {
    alert('Запись на услугу оформлена! Мы свяжемся с вами для подтверждения.');
}

// === Чат ===
function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    
    const messages = document.getElementById('chatMessages');
    
    // Сообщение пользователя
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);
    
    // Автоответ бота
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        botMsg.textContent = 'Спасибо за сообщение! Наш специалист скоро ответит вам.';
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 500);
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

// === Заметки ===
let notes = [];
function addNote() {
    const input = document.getElementById('noteInput');
    const text = input.value.trim();
    if (!text) return;
    
    notes.push(text);
    renderNotes();
    input.value = '';
}

function removeNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

function renderNotes() {
    const list = document.getElementById('notesList');
    list.innerHTML = notes.map((note, i) => 
        <div class="note-item">
            <span>${note}</span>
            <button onclick="removeNote(${i})">Удалить</button>
        </div>
    ).join('');
}

// === Материалы ===
let materials = [];
function addMaterial() {
    const name = document.getElementById('matName').value.trim();
    const desc = document.getElementById('matDesc').value.trim();
    if (!name) return;
    
    materials.push({ name, desc });
    renderMaterials();
    document.getElementById('matName').value = '';
    document.getElementById('matDesc').value = '';
}

function removeMaterial(index) {
    materials.splice(index, 1);
    renderMaterials();
}

function renderMaterials() {
    const list = document.getElementById('materialsList');
    list.innerHTML = materials.map((mat, i) => 
        <div class="material-item">
            <div>
                <strong>${mat.name}</strong>
                ${mat.desc ? <div class="material-desc">${mat.desc}</div> : ''}
            </div>
            <button onclick="removeMaterial(${i})">Удалить</button>
        </div>
    ).join('');
}

// === Переводчик ===
const dictionary = {
    'ceramic coating': 'керамическое покрытие',
    'polish': 'полировка',
    'clay bar': 'глина для очистки кузова',
    'wax': 'воск',
    'sealant': 'силант (защитное покрытие)',
    'compound': 'абразивная паста',
    'pad': 'полировальный круг',
    'buffing': 'полировка',
    'detailing': 'детейлинг',
    'paint correction': 'коррекция ЛКП'
};
     function translateText() {
    const input = document.getElementById('transInput').value.trim().toLowerCase();
    const result = document.getElementById('transResult');
    
    if (!input) {
        result.textContent = 'Введите термин для перевода';
        return;
    }
    
    const translation = dictionary[input];
    if (translation) {
        result.innerHTML = <strong>${input}</strong> → <strong>${translation}</strong>;
    } else {
        result.textContent = 'Термин не найден в словаре. Попробуйте другой.';
    }
}

// === FAQ ===
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    
    answer.classList.toggle('active');
    icon.classList.toggle('rotate');
}

// === Инициализация ===
document.addEventListener('DOMContentLoaded', () => {
    calculatePrice();
});