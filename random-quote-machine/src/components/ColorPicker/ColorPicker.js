import React, { Component } from 'react';

import './ColorPicker.css';

class ColorPicker extends Component {
  

  render() {
    console.log('render');
    const {
      colors,
      activeColor,
      handleActiveColor
    } = this.props;

    return (
      <div className="ColorPicker">
        {colors.map(color => {
          const style = { backgroundColor: color };
          const cls = color === activeColor ? 'color-item active' : 'color-item';

          return (
            <span 
              key={color} 
              className={cls} 
              style={style}
              onClick={() => handleActiveColor(color)}
            />
          )
        })}
      </div>
    )
  }
}
// khi dùng list rendering => mảng JS.map => mảng JSX => Cần config key

export default ColorPicker;