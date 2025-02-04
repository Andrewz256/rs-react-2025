import { ChangeEvent } from 'react';

export interface InputProps {
  placeholder: string;
  classElement: string;
  idElement: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
