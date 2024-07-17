import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import './styles.css'

const DraggableContainer = styled.div`
  margin-bottom: 8px;
`;

const DraggableComponent = ({ component, index, moveComponent }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'REORDER_COMPONENT',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveComponent(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'REORDER_COMPONENT',
    item: { type: 'REORDER_COMPONENT', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <DraggableContainer ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {component}
    </DraggableContainer>
  );
};

export default DraggableComponent;
