import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateCourseProgress } from '../../features/coursesSlice';
import { readLocalStorageJSONData } from '../../data/local_storage_manager';


const CheckBox = () => {
    const dispatch = useDispatch();
    const courseId = useSelector(state => state.courses.currentCourseId);
    const [check, setCheck] = useState(false);
    function handleChecked() {
        setCheck((prev) => !prev);
        let currentPercentage = parseInt(readLocalStorageJSONData('courses_progress')[courseId]["total_progress_percentage"])
        let currentCourseProgress = readLocalStorageJSONData('courses_progress');
        currentPercentage += 5;
        currentCourseProgress[courseId]["total_progress_percentage"] = currentPercentage; 
        localStorage.removeItem('courses_progress');
        localStorage.setItem('courses_progress', JSON.stringify(currentCourseProgress))
        console.log(readLocalStorageJSONData('courses_progress'))
        dispatch(updateCourseProgress())
      }
  return (
    <label>
         <input
              type="checkbox"
              className="accent-slate-900"
              checked={check}
              onChange={handleChecked}
            />
    </label>
  )
}

export default CheckBox