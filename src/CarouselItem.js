import h from 'hyperscript'
import moment from 'moment'

const relativeDate = dateStr => moment(dateStr, 'YYYY-MM-DD').fromNow()

const Controls = ({ slug, youtubeVideoId }) =>
  h(
    'div',
    h(
      'a',
      {
        href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        title: 'Watch trailer',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.card__controls', {
        src: 'assets/play-icon.png',
        alt: 'Play',

      })
    ),
    h(
      'a',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.card__controls', {
        src: 'assets/plus-icon.png',
        alt: 'More info',
      })
    )
  )

const CarouselItem = ({
  imageUrl,
  title,
  subtitle,
  slug,
  youtubeVideoId,
  startDate,
}) =>
  h(
    'div.carousel-item',
    h('img.carousel-item--poster', { src: imageUrl, alt: '', loading: 'lazy' }),
    h(
      'div.carousel-item--references',
      Controls({ slug, youtubeVideoId }),
      h('p.references--title', title),
      h('p.references--subtitle', subtitle),
      h('p.references--Realesed', `Released: ${relativeDate(startDate)}`)
    )
  )

export default CarouselItem
