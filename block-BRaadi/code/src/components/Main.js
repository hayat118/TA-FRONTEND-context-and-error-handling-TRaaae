import ErrorBoundary2 from "./ErrorBoundary2";
import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundary2>
          <SectionOne />
          <SectionTwo />
          <Location />
        </ErrorBoundary2>
      </div>
    </section>
  );
}

export default Main;
