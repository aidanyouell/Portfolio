import './loading.css'

export default function Loading() {
  return (
    <div className="site-loader" aria-hidden="true">
      <div className="loader-box">
        <div className="spinner" />
        <div className="loader-text">Loading</div>
      </div>
    </div>
  )
}
