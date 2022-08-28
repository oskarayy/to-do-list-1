import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

import FormButton from './interface/FormButton';
import './NewTask.css';
import RemoveBox from './tasks/controls/RemoveBox';

const NewTask = ({ onHideForm }) => {
  const dispatch = useDispatch();
  const [inputsValid, setInputsValid] = useState({
    title: true,
    time: true
  });
  const title = useRef();
  const time = useRef();
  const date = useRef();

  const currentTime = new Date().getTime();
  const defaultDate = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');

  const resetTitleValidation = () => {
    setInputsValid((prevState) => {
      return { ...prevState, title: true };
    });
  };

  const resetTimeValidation = () => {
    setInputsValid((prevState) => {
      return { ...prevState, time: true };
    });
  };

  const addNewTaskHandler = (e) => {
    e.preventDefault();
    const dateObject = new Date(`${date.current.value}T${time.current.value}`);
    const newTask = {
      id: `task-${currentTime}`,
      title: title.current.value,
      time: dateObject.getTime()
    };

    const titleIsValid = title.current.value.trim().length > 1;
    const timeIsValid =
      typeof newTask.time === 'number' && newTask.time > currentTime;

    if (!titleIsValid || !timeIsValid)
      return setInputsValid({
        title: titleIsValid,
        time: timeIsValid
      });

    dispatch(addTask(newTask));
    onHideForm();
  };

  return (
    <section className='new-task'>
      <h2>New Task</h2>
      <p>Any new upcoming due?</p>
      <form className='new-task__form' onSubmit={addNewTaskHandler}>
        <div
          className={
            inputsValid.title
              ? 'new-task__form__item'
              : 'new-task__form__item--invalid'
          }>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            ref={title}
            maxLength={34}
            onChange={resetTitleValidation}
          />
          <span className='form-warning'>Min: 2 letters | Max: 34 letters</span>
        </div>
        <div
          className={
            inputsValid.time
              ? 'new-task__form__item'
              : 'new-task__form__item--invalid'
          }>
          <label htmlFor='deadline'>Deadline</label>
          <div id='deadline' className='new-task__form__item__deadline'>
            <input
              id='task-form-time'
              type='time'
              ref={time}
              defaultValue='12:00'
              onChange={resetTimeValidation}
            />
            <input
              id='task-form-date'
              type='date'
              ref={date}
              defaultValue={defaultDate}
              onChange={resetTimeValidation}
            />
          </div>
          <span className='form-warning'>
            Pro Tip: You cannot change the past!
          </span>
        </div>
        <div className='new-task__form__actions'>
          <FormButton onClick={onHideForm} />
          <FormButton add />
        </div>
      </form>
    </section>
  );
};
export default NewTask;
