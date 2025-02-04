import css from "./Home.module.css";
import block from "../../assets/block.svg";
const Home = () => {
  return (
    <>
      <div className={`${css.home} container`}>
        <section className={css.home__section}>
          <div className={css.home__info}>
            <h1 className={css.home__h1}>
              Unlock your potential with the best{" "}
              <span className={css.home__language}>language</span> tutors
            </h1>
            <p className={css.home__text}>
              Embark on an Exciting Language Journey with Expert Language
              <br />
              Tutors: Elevate your language proficiency to new heights by
              <br />
              connecting with highly qualified and experienced tutors.
            </p>
            <button className={`${css.home__button} button`}>
              Get started
            </button>
          </div>
          <div className={css.home__img}>
            <img src={block} alt="" />
          </div>
        </section>
        <div className={css.home__benefits_div}>
          <ul className={css.home__benefits}>
            <li className={css.home__benefits_li}>
              <p className={css.home__benefits_number}>32,000+</p>
              <p className={css.home__benefits_text}>Experienced tutors</p>
            </li>
            <li className={css.home__benefits_li}>
              <p className={css.home__benefits_number}>300,000+</p>
              <p className={css.home__benefits_text}>_tar tutor reviews</p>
            </li>
            <li className={css.home__benefits_li}>
              <p className={css.home__benefits_number}>120+</p>
              <p className={css.home__benefits_text}>
                Subjects <br />
                taught
              </p>
            </li>
            <li className={css.home__benefits_li}>
              <p className={css.home__benefits_number}>200+</p>
              <p className={css.home__benefits_text}>
                Tutor <br />
                nationalities
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
