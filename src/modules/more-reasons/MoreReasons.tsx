import { useGSAP } from "@gsap/react";
import { useAppSelector } from "../../store/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export const MoreReasons = () => {
  const { data } = useAppSelector(state => state.data);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 640 });
  const isMobile = useMediaQuery({ maxWidth: 639 });

  useGSAP(() => {
    const reasons = gsap.utils.toArray<Element>('.more-reason__icon');
    let xValue: number;

    if (isDesktop) {
      xValue = 600;
    } else if (isTablet) {
      xValue = 500;
    } else {
      xValue = 300;
    }

    reasons.forEach((reason, i) => {
      let value = i % 2 === 0 ? xValue : -xValue;

      gsap.fromTo(reason, {
        x: value,
        opacity: .7,
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: reason,
          start: isMobile? '-200 bottom': '-100 bottom',
          end: isMobile ? 'top +=400' : 'top top',
          scrub: true,
        },
      });
    })
  }, []);

  return (
    <section className="more-reasons">
      {data.why_choose_us.items.map((item, i) => (
        <article className={`more-reason more-reason--${i + 1}`} key={i}>
          <div className={`more-reason__icon more-reason__icon--${i + 1}`} />

          <p className="more-reason__text">{item}</p>
        </article>
      ))}
    </section>
  );
};