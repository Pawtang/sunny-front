export interface IDay {
  id: number;
  dayRating?: number | undefined;
  sleep?: number | undefined;
  date?: string | undefined;
  notes?: string | undefined;
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
  // stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface numberRatingProps {
  label: string;
  value: number;
  increment: Function;
  decrement: Function;
  onChange: Function;
}

export interface attributeObject {
  name: string;
  type: string;
  value?: number;
}

export interface dayObject {
  _id?: string;
  name?: string;
  notes?: string;
  attributes?: attributeObject[];
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
}

export interface monthPickerProps {
  closeModal: Function;
  setMonth: Function;
  setYear: Function;
  selectedMonth: string;
  selectedYear: string;
}
