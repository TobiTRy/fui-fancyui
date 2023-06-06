import React from 'react';
import styled from 'styled-components';
import { uiColors } from '../../Design/design';
import Color from 'color';

interface DateOutputProps {
  date?: Date;
  onDateSelect?: (date: Date) => void;
}

const Container = styled.button`
  text-align: center;
  width: 100%;
  background-color: transparent;
  border: none;
`;  

export default function DateOutput ({ date, onDateSelect }: DateOutputProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);

  // Format the date to display as "6. Juni"
  const formattedDate = React.useMemo(() => {
    if (!selectedDate) return '';
    const options = { day: 'numeric', month: 'short' } as const; // Define as const
    return selectedDate.toLocaleDateString('de-DE', options);
  }, [selectedDate]);
  

  // We need to know how your custom Calendar component works.
  // Assuming it takes 'selectedDate' and 'onDateSelect' as props.
  const handleOpenCalendar = () => {
    // Open your custom Calendar component here
    // Pass the current 'selectedDate' and 'onDateSelect' to it
  };

  // Update the selected date when receiving new props.
  // 'date' prop could change outside this component.
  React.useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  return (
    <Container onClick={handleOpenCalendar}>
      {formattedDate || 'Select a date'}
      {/* Render your custom Calendar component here */}
    </Container>
  );
};


DateOutput.defaultProps = {
  date: new Date(),
}