
import { useDispatch } from "react-redux";
import { addTeacher } from "../redux/teachers/teachersOps";

const AddTeacherForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const teacherData = {
      name: "Max",
      surname: "Andersen",
      languages: ["German"],
      levels: ["A1 Beginner", "A2 Elementary", "B1 Intermediate"],
      rating: 4.6,
      reviews: [
        {
          reviewer_name: "Olivia",
          reviewer_rating: 4,
          comment:
            "Max is a dedicated and knowledgeable teacher. I enjoyed his German lessons.",
        },
        {
          reviewer_name: "Noah",
          reviewer_rating: 5,
          comment:
            "I highly recommend Max for German lessons. He explains concepts clearly and provides useful tips.",
        },
      ],
      price_per_hour: 28,
      lessons_done: 1305,
      avatar_url: "https://ftp.goit.study/img/avatars/9.jpg",
      lesson_info:
        "Lessons focus on building a strong foundation in German language skills.",
      conditions: [
        "Teaches adults and teenagers (15 years and above).",
        "Flexible lesson timings available.",
      ],
      experience:
        "Max has been teaching German for 6 years and has a deep understanding of the language. He has helped numerous students gain proficiency in German through his structured and comprehensive lessons. Max's teaching approach is tailored to each student's needs, ensuring a personalized and effective learning experience.",
    };

    dispatch(addTeacher(teacherData));
  };

  return (
    <div>
      <button onClick={handleSubmit}>Add Teacher</button>
    </div>
  );
};

export default AddTeacherForm;
