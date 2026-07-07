import { useRef, useState } from 'react'

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }) {
  const sliderRef = useRef(null)
  const [pct, setPct] = useState(50)
  const draggingRef = useRef(false)

  function setPositionFromClientX(clientX) {
    const rect = sliderRef.current.getBoundingClientRect()
    let next = ((clientX - rect.left) / rect.width) * 100
    next = Math.max(0, Math.min(100, next))
    setPct(next)
  }

  function handlePointerDown(e) {
    e.preventDefault()
    draggingRef.current = true
    sliderRef.current.setPointerCapture(e.pointerId)
    setPositionFromClientX(e.clientX)
  }

  function handlePointerMove(e) {
    if (draggingRef.current) setPositionFromClientX(e.clientX)
  }

  function stopDragging() {
    draggingRef.current = false
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowRight') setPct((p) => Math.min(100, p + 5))
    if (e.key === 'ArrowLeft') setPct((p) => Math.max(0, p - 5))
  }

  return (
    <>
      <div
        className="ba-slider"
        ref={sliderRef}
        tabIndex={0}
        role="slider"
        aria-label="Vorher-Nachher Vergleich"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        onKeyDown={handleKeyDown}
      >
        <div className="layer before">
          <img src={beforeSrc} alt={beforeAlt} draggable={false} />
        </div>
        <div className="after-clip" style={{ width: `${pct}%` }}>
          <div className="layer after" style={{ width: `${100 / (pct / 100 || 1)}%` }}>
            <img src={afterSrc} alt={afterAlt} draggable={false} />
          </div>
        </div>
        <div className="ba-tags"><span>Vorher</span><span>Nachher</span></div>
        <div className="ba-handle" style={{ left: `${pct}%` }}>
          <div className="ba-line"></div>
          <div className="ba-grip">↔</div>
        </div>
      </div>
      <div className="slider-hint mono">↔ Ziehen zum Vergleichen</div>
    </>
  )
}
