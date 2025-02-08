import styles from './input.module.css';
import { InputProps } from '../../../../data/types/input';

function Input({ placeholder, classElement, idElement }: InputProps) {
  return (
    <input
      className={`${classElement} ${styles.inputElement}`}
      placeholder={placeholder}
      id={idElement}
      name={idElement}
    />
  );
}
export default Input;
