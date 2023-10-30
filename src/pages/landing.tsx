import { observer } from "mobx-react-lite";

const LandingContent = () => {
  return (
    <div className="flex flex-col flex-1 h-screen px-20 bg-bsas">
      <nav className="h-20 pt-8 flex items-center justify-end">
        <p>topbar</p>
      </nav>
      <section className=" backdrop-blur-md bg-black/40 w-full h-full rounded-xl p-8 my-8  flex flex-col text-white">
        landing
      </section>
      <footer className="h-20 pb-8 flex items-center justify-center">
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, obcaecati ab consequuntur, quam reiciendis quasi eum
          fugiat similique dolorum molestiae non ratione excepturi rem
          consectetur fugit earum doloribus possimus asperiores.
        </p>
      </footer>
    </div>
  );
};

export const Landing = observer(LandingContent);
