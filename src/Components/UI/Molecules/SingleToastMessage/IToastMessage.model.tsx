type IToastMessage = {
  id: number;
  title: string;
  message: string;
  time: number;
  type: 'success' | 'warning' | 'error';
};

export default IToastMessage;