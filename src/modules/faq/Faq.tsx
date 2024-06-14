import { useAppSelector } from "../../store/hooks";
import { Question } from "../question";

export const Faq = () => {
  const { data } = useAppSelector(state => state.data);

  return (
    <section className="faq" id="faq">
      <h2 className="title">{data.faqs.title}</h2>

      <div className="faq__questions">
        {data.faqs.questions.map((question, i) => (
          <Question question={question.question} answer={question.answer} key={i} />
        ))}
      </div>
    </section>
  )
};