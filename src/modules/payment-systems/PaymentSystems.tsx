import { useAppSelector } from "../../store/hooks";

export const PaymentSystems = () => {
  const { data } = useAppSelector((state) => state.data);

  return (
    <section className="payment-systems" id="payment-systems">
      <h2 className="title">{data.paymentSystems.title}</h2>

      <div className="payment-systems__systems">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((system) => (
          <div
            className={`payment-systems__system payment-systems__system--${system}`}
            key={system}
          />
        ))}
      </div>
    </section>
  );
};
