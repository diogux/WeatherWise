import React from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCardOrder } from './CardOrderContext'; // Adjust the import path as necessary

const DraggableCard = ({ name, index, moveCard }) => {
  const [, drag] = useDrag(() => ({
    type: 'card',
    item: { name, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'card',
    hover(item) {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div ref={(node) => drag(drop(node))} style={{ border: '1px solid white', padding: '8px', margin: '5px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      {name}
    </div>
  );
};

const SheetContentDemo = () => {
  const { cardOrder, setCardOrder } = useCardOrder();

  const moveCard = (from, to) => {
    const updatedCards = [...cardOrder];
    const [removed] = updatedCards.splice(from, 1);
    updatedCards.splice(to, 0, removed);
    setCardOrder(updatedCards);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ color: 'white' }}> 
        {cardOrder.map((card, index) => (
          <DraggableCard key={card} name={card} index={index} moveCard={moveCard} />
        ))}
      </div>
    </DndProvider>
  );
};

export default SheetContentDemo;
