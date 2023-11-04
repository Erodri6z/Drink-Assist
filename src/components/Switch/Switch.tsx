import { Component } from 'react'
import './Switch.css'


interface ToggleSwitchProps {
  onSwitchChange: (isChecked: boolean) => void
  defaultChecked?: boolean
}

interface ToggleSwitchState {
  isChecked: boolean
}

class Switch extends Component<ToggleSwitchProps, ToggleSwitchState> {
  constructor(props: ToggleSwitchProps) {
    super(props)
    this.state = {
      isChecked: props.defaultChecked || false
    }
  }
  
  toggleComponent = () => {
    const { onSwitchChange } = this.props
    const newIsChecked = !this.state.isChecked
    this.setState({ isChecked: newIsChecked })
    onSwitchChange(newIsChecked)
  }
  
  render() {
    return (
      <div>
      <label className="switch">
        <input 
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleComponent}
          />
        <span className="slider"></span>
      </label>
    </div>
  )
}
}


export default Switch