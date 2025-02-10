import styles from './input.module.css';
import { InputProps } from '../../../../data/types/input';

function Input({
  placeholder,
  classElement,
  idElement,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={`${classElement} ${styles.inputElement}`}
      placeholder={placeholder}
      id={idElement}
      name={idElement}
      value={value}
      onChange={onChange}
    />
  );
}
export default Input;
