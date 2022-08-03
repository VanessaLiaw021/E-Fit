//Import required packages
import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_ALL_EXERCISES} from '../utils/queries';
import { useQuery } from '@apollo/client';
import {
  UPDATE_EXERCISES,
} from '../utils/actions';
import { idbPromise } from '../utils/helpers';

//Exercise Component
const Exercises = () => {
  const [state, dispatch] = useStoreContext();

  const { exercises } = state;

  const { loading, data: exerciseData } = useQuery(QUERY_ALL_EXERCISES);

  useEffect(() => {
    if (exerciseData) {
      dispatch({
        type: UPDATE_EXERCISES,
        exercises: exerciseData.exercises,
      });
      exerciseData.exercises.forEach((exercise) => {
        idbPromise('exercises', 'put', exercise);
      });
    } else if (!loading) {
      idbPromise('exercises', 'get').then((exercises) => {
        dispatch({
          type: UPDATE_EXERCISES,
          exercises: exercises,
        });
      });
    }
  }, [exerciseData, loading, dispatch]);

  return (
    <div className="main">
      <h2 className="headings">Exercises</h2>

      <form className="search-form">
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
      </form>

      <ul>
        {exercises.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

//Export Exercise Component
export default Exercises;