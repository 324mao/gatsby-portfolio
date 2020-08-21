import React, { useState, useCallback } from 'react'
import { graphql　} from "gatsby"
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

const Gallery = ({ data }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

  return (
    <div>
      {data && (<div className="row">
        {data.allMicrocmsWorks.edges.map((edge, i) => {
        const work = edge.node
        return (<GalleryItem
          id={work.id}
          source={work.image.url}
          thumbnail={work.image.url}
          caption={work.title}
          description={work.description}
          position={work.position}
          toggleLightbox={work.toggleLightbox}
          position={i}
          toggleLightbox={toggleLightbox}
        />); 
        })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={data} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export const query = graphql`
 {
   allMicrocmsWorks(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        id
        title
        image {
          url
        }
        description
      }
    }
  }
 }
`

export default Gallery
