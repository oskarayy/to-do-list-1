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
    filter: isDragging ? 'blur(3px)' : 'none'
  };

  return (
    <li {...listeners} {...attributes} id={id} ref={setNodeRef} style={style}>
      {children}
    </li>
  );
};

export default Draggable;
