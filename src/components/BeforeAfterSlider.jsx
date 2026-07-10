import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }) {
  const { t } = useTranslation()
  const sliderRef = useRef(null)
  const [pct, setPct] = useState(50)

  function setPositionFromClientX(clientX) {
    const rect = sliderRef.current.getBoundingClientRect()
    let next = ((clientX - rect.left) / rect.width) * 100
    next = Math.max(0, Math.min(100, next))
    setPct(next)
  }

  function handlePointerMove(e) {
    setPositionFromClientX(e.clientX)
  }

  function stopDragging() {
    window.removeEventListener('pointermove', handlePointerMove)
    window.removeEventListener('pointerup', stopDragging)
    window.removeEventListener('pointercancel', stopDragging)
  }

  function handlePointerDown(e) {
    e.preventDefault()
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', stopDragging)
    window.addEventListener('pointercancel', stopDragging)
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowRight') setPct((p) => Math.min(100, p + 5))
    if (e.key === 'ArrowLeft') setPct((p) => Math.max(0, p - 5))
  }

  return (
    <>
      <div className="ba-slider" ref={sliderRef}>
        <div className="layer before">
          <img src={beforeSrc} alt={beforeAlt} draggable={false} />
        </div>
        <div className="after-clip" style={{ width: `${pct}%` }}>
          <div className="layer after" style={{ width: `${100 / (pct / 100 || 1)}%` }}>
            <img src={afterSrc} alt={afterAlt} draggable={false} />
          </div>
        </div>
        <div className="ba-tags"><span>{t('slider.before')}</span><span>{t('slider.after')}</span></div>
        <div
          className="ba-handle"
          style={{ left: `${pct}%` }}
          tabIndex={0}
          role="slider"
          aria-label={t('slider.ariaLabel')}
          aria-valuenow={Math.round(pct)}
          aria-valuemin={0}
          aria-valuemax={100}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
        >
          <div className="ba-line"></div>
          <div className="ba-grip">↔</div>
        </div>
      </div>
      <div className="slider-hint mono">{t('slider.hint')}</div>
    </>
  )
}
