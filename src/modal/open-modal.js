import ModalVideo from 'modal-video'
// css
import 'modal-video/css/modal-video.min.css'

export const openModal = (videoId) => {
    // console.log(` Open modal :${videoId}`)
    
    const button = document.createElement('BUTTON')
    button.dataset.videoId = videoId
    new ModalVideo([button])
    button.click()
}