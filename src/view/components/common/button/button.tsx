import { Component } from 'react';
import { ButtonProps } from '../../../../data/types/button';
import styles from './button.module.css';

class Button extends Component<ButtonProps> {
  name: string = '';
  classElement: string = '';
  idElement: string = '';
  type: 'submit' | 'reset' | 'button' | undefined;

  constructor(props: ButtonProps) {
    super(props);
    this.name = props.name;
    this.classElement = props.classElement;
    this.idElement = props.idElement;
    this.type = props.type;
  }
  render() {
    return (
      <button
        className={`${this.classElement} ${styles.buttonElement}`}
        id={this.idElement}
        type={this.type}
      >
        {this.name}
      </button>
    );
  }
}
export default Button;
