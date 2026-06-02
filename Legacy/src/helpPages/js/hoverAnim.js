let blocks = document.getElementsByClassName('block')
blocks = Array.from(blocks)

blocks.forEach(b => {
    console.log(b)
    b.addEventListener('mousemove', e => {
        const targ = e.target
        const rect = targ.getBoundingClientRect()

        let x = e.clientX - rect.left
        let y = e.clientY - rect.top

        targ.style.setProperty('--ms-x', `${x}px`)
        targ.style.setProperty('--ms-y', `${y}px`)
    })
});