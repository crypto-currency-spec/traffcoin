import { useGSAP } from "@gsap/react";
import { useAppSelector } from "../../store/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Reasons = () => {
  const { data } = useAppSelector((state) => state.data);
  
  useGSAP(() => {
    const reasons = gsap.utils.toArray<Element>('.reason');

    reasons.forEach(reason => {
      gsap.fromTo(reason, {
        y: 200,
        opacity: .7,
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: reason,
          start: 'top bottom',
          end: 'top +=400',
          scrub: true,
        },
      });
    })
  }, []);

  // useEffect(() => {
  //   const options = {
  //     threshold: .1,
  //   };

  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('reason-visible');
  //         observer.unobserve(entry.target);
  //       }
  //     })}, options);

  //   const reasons = document.querySelectorAll('.reason');

  //   reasons.forEach(reason => {
  //     observer.observe(reason);
  //   });

  // }, []);

  return (
    <section className="reasons" id="reasons">
      <h1 className="reasons__title">{data.reasons.title}</h1>

      <div className="reasons__reasons">
        {data.reasons.items.map((item, i) => (
          <article className="reason" key={i}>
            <div className="reason__counter">{i + 1}</div>

            <p className="reason__title">{item.title}</p>

            <p className="reason__description">{item.description}</p>
          </article>
        ))}
      </div>

      <p className="reasons__conclusion">{data.reasons.conclusion}</p>
    </section>
  );
};
