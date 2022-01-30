const keysNodeList = document.querySelectorAll('.key');

keysNodeList.forEach(key => {
    key.addEventListener('mousedown', (e) => {
        key.classList.add('playing');
        
        const dataKey = key.getAttribute('data-key');
        const audioElement = document.querySelector(`audio[data-key='${dataKey}']`);
        if (!audioElement) return;
        audioElement.currentTime = 0;
        audioElement.play();
    });

    key.addEventListener('mouseup', (e) => {
        key.classList.remove('playing');
    });
});

window.addEventListener('keydown', (e) => {
    const audioElement = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audioElement) return;  // if audioElement is null
    audioElement.currentTime = 0;  // for fast repeating
    audioElement.play();

    const keyDiv = document.querySelector(`div[data-key='${e.keyCode}']`);
    keyDiv.classList.add('playing');
});

window.addEventListener('keyup', (e) => {
    const keyDiv = document.querySelector(`div[data-key='${e.keyCode}']`);
    if (!keyDiv) return;
    keyDiv.classList.remove('playing');
});

// МОЖНО БЫЛО СДЕЛАТЬ ЧЕРЕЗ transitionend (по задумке автора), но я посчитал способ выше более верным
// способ выше лучше выгядит, если мы держим клавишу, не отпуская