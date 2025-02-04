import { Component } from 'react';
import styles from './input.module.css';
import { InputProps } from '../../../../data/types/input';

class Input extends Component<InputProps> {
  placeholder: string = '';
  classElement: string = '';
  idElement: string = '';

  constructor(props: InputProps) {
    super(props);
    this.placeholder = props.placeholder;
    this.classElement = props.classElement;
    this.idElement = props.idElement;
  }
  render() {
    return (
      <input
        className={`${this.classElement} ${styles.inputElement}`}
        placeholder={this.placeholder}
        id={this.idElement}
        name={this.idElement}
      />
    );
  }
}
export default Input;
