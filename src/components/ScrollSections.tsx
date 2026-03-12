export default function ScrollSections() {
  return (
    <div className="scroll-sections">
      <section id="overview" className="scroll-step">
        <div className="content-block">
          <p className="label">01</p>
          <h2>Designed as motion sculpture.</h2>
          <p>
            The first chapter keeps the Huayra R assembled while the body slowly
            rotates and reveals its silhouette.
          </p>
        </div>
      </section>

      <section id="engineering" className="scroll-step">
        <div className="content-block">
          <p className="label">02</p>
          <h2>Mechanical theatre in exploded view.</h2>
          <p>
            With scroll progression, individual parts separate from the chassis
            to expose the car as an engineering object.
          </p>
        </div>
      </section>

      <section id="experience" className="scroll-step">
        <div className="content-block">
          <p className="label">03</p>
          <h2>Precision, light and speed.</h2>
          <p>
            The final scene pushes the composition into a dramatic suspended
            breakdown.
          </p>
        </div>
      </section>
    </div>
  );
}
