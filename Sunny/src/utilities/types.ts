export interface IDay {
  id: number;
  quality?: number | undefined;
  sleep?: number | undefined;
  date?: string | undefined;
  notes?: string | undefined;
}

export interface dayProps {
  // id: number;
  // quality: number;
  date?: string;
}

export interface buttonProps {
  buttonText: string;
  onClick: any;
  styleTags?: string;
  // stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ratingProps {
  label: string;
  value: number;
  maximum: number;
  onChange: Function;
}
