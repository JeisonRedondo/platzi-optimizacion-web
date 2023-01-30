import h from 'hyperscript'
import { fetchPopular, fetchHighestRated, fetchTrending } from './api'
import CarouselItem from './CarouselItem'
import { modalListener } from './modal'

const SectionTitle = title => h('h3.carousel-title', title)

const Carousel = ({ itemsList = [] }) =>
  h(
    'section.carousel',
    h(
      'div.carousel--container',
      itemsList.map(
        ({
          attributes: { titles, posterImage, slug, youtubeVideoId, startDate },
        }) =>
          CarouselItem({
            imageUrl: posterImage.small,
            title: titles.en,
            subtitle: titles.ja_jp,
            slug,
            youtubeVideoId,
            startDate,
          })
      )
    )
  )

window.addEventListener('DOMContentLoaded', async () => {
  const mountReference = document.querySelector('.main').lastElementChild

  if (!mountReference) {
    return 0
  }

  const trending = await fetchTrending()
  const popular = await fetchPopular()
  const highestRated = await fetchHighestRated()

  mountReference
    .insertAdjacentElement('afterend', SectionTitle('Trending Anime'))
    .insertAdjacentElement(
      'afterend',
      Carousel({
        itemsList: trending,
      })
    )
    .insertAdjacentElement('afterend', SectionTitle('Highest Rated Anime'))
    .insertAdjacentElement(
      'afterend',
      Carousel({
        itemsList: highestRated,
      })
    )
    .insertAdjacentElement('afterend', SectionTitle('Most Popular Anime'))
    .insertAdjacentElement(
      'afterend',
      Carousel({
        itemsList: popular,
      })
    )
  // const carouselImages = document.querySelectorAll('.carousel-item--references')
  // const observer = lozad(carouselImages);
  // observer.observe()

  document.body.addEventListener('click', (event) => {
    // console.log(event.target.tagName);

    const tagName = event.target.tagName
    if (['IMG', 'A'].includes(tagName)) {
      modalListener(event)
    }

  })

})

