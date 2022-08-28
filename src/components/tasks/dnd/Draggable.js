const Draggable = ({ children, onDragStart, onDragEnter, onDragEnd }) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}>
      {children}
    </div>
  );
};

export default Draggable;
