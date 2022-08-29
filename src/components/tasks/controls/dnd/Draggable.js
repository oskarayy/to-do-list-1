import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Draggable = ({ children, id }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging
  } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    listStyle: 'none',
    touchAction: 'none',
    opacity: isDragging ? '0.6' : '1',
    cursor: isDragging ? 'grabbing' : 'grab'
  };

  return (
    <li ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {children}
    </li>
  );
};

export default Draggable;
