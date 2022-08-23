const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        // Split the inner texts creating an array
        .split('')
        // Map to an array to what is after the '=>' in this case the span
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        // then rejoining back together
        .join('')
})