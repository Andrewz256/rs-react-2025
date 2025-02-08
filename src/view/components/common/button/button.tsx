import { ButtonProps } from '../../../../data/types/button';
import styles from './button.module.css';

function Button({ name, classElement, idElement, type }: ButtonProps) {
  return (
    <button
      className={`${classElement} ${styles.buttonElement}`}
      id={idElement}
      type={type}
    >
      {name}
    </button>
  );
}
export default Button;
