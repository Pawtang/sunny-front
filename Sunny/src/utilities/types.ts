export interface attributeObject {
  name: string;
  type: string;
  value?: number;
}

export interface dayObject {
  _id?: string;
  date?: string;
  name?: string;
  notes?: string;
  dayRating?: number;
  attributes?: attributeObject[];
}

export interface IDay {
  id: number;
  dayRating?: number | undefined;
  attributes?: Array<attributeObject>;
  date?: string | undefined;
  notes?: string | undefined;
}

export interface attributeLibrary {
  [key: string]: number[];
}

export interface scores {
  name: string;
  score: string;
}

export interface dayProps {
  // id: number;
  // dayRating: number;
  date?: string;
}

export interface buttonProps {
  buttonText: string;
  onClick: any;
  styleTags?: string;
  buttonType?: string;
  // stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface linkButtonProps {
  buttonText: string;
  linkTo: string;
  styleTags?: string;
  buttonType?: string;
}

export interface checkProps {
  // name: string;
  // id: string;
  label: string;
  checked: boolean;
  onClick: Function;
}

export interface radioProps {
  name: string;
  value: string;
  label: string;
  onChange: Function;
  isChecked: boolean;
}

export interface ratingProps {
  label: string;
  value: number;
  maximum: number;
  onChange: Function;
}

export interface booleanToggleProps {
  index: number;
  label: string;
  checked: number;
  onChange: Function;
}

export interface numberRatingProps {
  index: number;
  label: string;
  value: number;
  increment: Function;
  decrement: Function;
  onChange: Function;
}

export interface modalProps {
  id: string;
  visible: boolean;
  onClick: any;
  content?: any;
}

export interface confirmActionModalProps {
  onClickConfirm: Function;
  onClickCancel: Function;
  modalText: string;
  buttonText: string;
  buttonType?: string;
}

export interface monthPickerProps {
  closeModal: Function;
  setMonth: Function;
  setYear: Function;
  loadMonth: Function;
  selectedMonth: number;
  selectedYear: number;
}

export interface navbarProps {
  month: boolean;
}
