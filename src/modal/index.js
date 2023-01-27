export const modalListener = (event) => {
    event.preventDefault()
    const img = event.target
    const link =img.parentElement
    console.log(link.href)

}