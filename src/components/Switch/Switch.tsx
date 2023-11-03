import './Switch.css'

const Switch = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default Switch