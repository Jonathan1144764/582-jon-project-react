import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <>
      <MainHeader />
      <section className="home-landing">
        <div className="container">
          <h2>Welcome to Your Local Parks!</h2>
          <p>
            Here you can check out the status of your parks and see what's
            available at those parks.
          </p>
          <p>
            You can also see what amazing events we have planned at our local
            parks. Events are fun for all ages.
          </p>
        </div>
      </section>
    </>
  );
}
