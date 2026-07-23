import { useState } from 'react'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const photos = galleryItems.filter((item) => item.type === 'photo')
  const videos = galleryItems.filter((item) => item.type === 'video')

  return (
    <div className="gallery">
      <div className="gallery__block">
        <h3 className="gallery__heading">Fotografías</h3>
        <div className="gallery__grid">
          {photos.map((item) => (
            <figure key={item.id} className="gallery__card">
              <div className="gallery__image-wrap">
                <img src={item.src} alt={item.title} loading="lazy" />
              </div>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="gallery__block">
        <h3 className="gallery__heading">Videos</h3>
        <div className="gallery__grid gallery__grid--videos">
          {videos.map((item) => (
            <figure key={item.id} className="gallery__card gallery__card--video">
              {activeVideo === item.id ? (
                <div className="gallery__video-wrap">
                  <iframe
                    src={item.src}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="gallery__video-thumb"
                  onClick={() => setActiveVideo(item.id)}
                  aria-label={`Reproducir ${item.title}`}
                >
                  <img
                    src={item.thumbnail ?? item.src}
                    alt=""
                    loading="lazy"
                  />
                  <span className="gallery__play" aria-hidden="true">
                    ▶
                  </span>
                </button>
              )}
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
