//Import required packages
import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_ALL_EXERCISES } from '../utils/queries';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { UPDATE_EXERCISES } from '../utils/actions';
import { idbPromise } from '../utils/helpers';
import Footer from './Footer';
import { useLazyQuery } from '@apollo/client';

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

  // const handleSearch = () => {
  //     const [getExercises, { loading, error, data }] = useLazyQuery(QUERY_ALL_EXERCISES);

  //     if (loading) return <p>Loading....</p>
  // };

  return (
    <>
    <div className="main exercise">
      <h2 className="headings">Exercises</h2>

      <form className="search-form">
        <input type="text" placeholder="Search"></input>
        <button type="submit">Search</button>
      </form>

      <div className="exercises">
        {exercises.map((item) => (
          <div className="exercise-card" key={item._id}>
            <div className="exercise-image">
              <Link to={`/exercises/${item._id}`}>
                <img variant="top" src={item.image || '/images/E-Fit-Logo.png'} alt={item.name}/>
              </Link>
            </div> 
            <div className="exercise-content">
              <Link to={`/exercises/${item._id}`} className="line">
                <p>{item.name}</p>
              </Link>
              <div className="exercise-description">
                {item.description.replaceAll('<p>', '').replaceAll('</p>', '').replaceAll('<li>', '').replaceAll('</li>', '').replaceAll('<ol>', '').replaceAll('</ol>', '').replaceAll('<em>', '').replaceAll('</em>', '').replaceAll('<ul>', '').replaceAll('</ul>', '')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

//Export Exercise Component
export default Exercises;