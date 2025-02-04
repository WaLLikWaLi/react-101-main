import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/teachersOps";

const TeachersList = () => {
  const dispatch = useDispatch();
  const { teachers, lastLoadedKey, status } = useSelector(
    (state) => state.teachers
  );
  console.log(teachers);
  useEffect(() => {
    if (status === "idle" && teachers.length === 0) {
      dispatch(fetchTeachers({ limit: 4 }));
    }
  }, [dispatch, status, teachers.length]);

  const handleLoadMore = () => {
    dispatch(fetchTeachers({ startAfterKey: lastLoadedKey, limit: 4 }));
  };

  return (
    <div>
      <h2>Teachers List</h2>
      {teachers.length === 0 && status === "idle" && <p>No teachers found.</p>}
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <img src={teacher.avatar_url} alt="" width={96} />
          <h3>
            {teacher.name} {teacher.surname}
            <br></br>
          </h3>
          Lessons done:
          {teacher.lessons_done}
          <br />
          Rating:
          {teacher.rating}
          <br />
          Price / 1 hour:
          {teacher.price_per_hour}
          <br />
          Languages:
          {teacher.languages}
          <br />
          Lesson-info:
          {teacher.lesson_info}
          <br />
          Conditions:
          {teacher.conditions}
          <br />
          {teacher.experience}
          <br />
          Levels:
          {teacher.levels}
          <h2>Reviews List</h2>
          {teacher.reviews.length === 0 && status === "idle" && (
            <p>No reviews found.</p>
          )}
          {teacher.reviews.map((review) => (
            <div key={review.comment}>
              {" "}
              {review.reviewer_name}
              {review.comment}
              {review.reviewer_rating}
            </div>
          ))}
          <button>Book trial lesson</button>
        </div>
      ))}

      {status === "loading" ? (
        <button disabled>Loading...</button>
      ) : (
        <button onClick={handleLoadMore} disabled={status === "loading"}>
          Load More
        </button>
      )}
    </div>
  );
};

export default TeachersList;
