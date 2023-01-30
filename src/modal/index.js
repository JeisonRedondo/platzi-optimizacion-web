import {openModal} from './open-modal.js'

export const modalListener = (event) => {
    
    event.preventDefault()
    const img = event.target
    const link =img.parentElement

    if (link && link.classList.contains('js-video-link')) {
        // console.log(link.dataset.videoid)
        
        openModal(link.dataset.videoid)

    }


}