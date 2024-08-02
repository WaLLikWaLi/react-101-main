import css from "./Main.module.css";
import block from "../../assets/block.svg";
const Main = () => {
  return (
    <>
      <main className={`${css.main} container`}>
        <section className={css.main__section}>
          <div className={css.main__info}>
            <h1 className={css.main__h1}>
              Unlock your potential with the best{" "}
              <span className={css.main__language}>language</span> tutors
            </h1>
            <p className={css.main__text}>
              Embark on an Exciting Language Journey with Expert Language
              <br />
              Tutors: Elevate your language proficiency to new heights by
              <br />
              connecting with highly qualified and experienced tutors.
            </p>
            <button className={`${css.main__button} button`}>
              Get started
            </button>
          </div>
          <div className={css.main__img}>
            <img src={block} alt="" />
          </div>
        </section>
        <div className={css.main__benefits_div}>
          <ul className={css.main__benefits}>
            <li className={css.main__benefits_li}>
              <p className={css.main__benefits_number}>32,000+</p>
              <p className={css.main__benefits_text}>Experienced tutors</p>
            </li>
            <li className={css.main__benefits_li}>
              <p className={css.main__benefits_number}>300,000+</p>
              <p className={css.main__benefits_text}>_tar tutor reviews</p>
            </li>
            <li className={css.main__benefits_li}>
              <p className={css.main__benefits_number}>120+</p>
              <p className={css.main__benefits_text}>
                Subjects <br />
                taught
              </p>
            </li>
            <li className={css.main__benefits_li}>
              <p className={css.main__benefits_number}>200+</p>
              <p className={css.main__benefits_text}>
                Tutor <br />
                nationalities
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Main;
