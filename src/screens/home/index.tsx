import { SelectedPage } from "@/shared/types";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="relative flex items-start justify-center w-full h-screen bg-gradient-space-btt text-white py-40 md:h-full md:pb-0"
    >
      <div className="flex items-center justify-between w-5/6 flex-col md:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="w-full z-20">
          {/* NAME */}
          <div>Hi, I'm Thikamporn Simud</div>
          {/*  DETAILS */}
          <div></div>
        </div>
        {/* RIGTH SIDE */}
        <div className="w-full flex justify-end">Planet</div>
      </div>
      <div className="absolute z-10 top-30 md:top-40 -left-40 md:-left-52 w-56 h-56 md:w-72 md:h-72 bg-gradient-brush-1 rounded-full blur-3xl"></div>
      <div className="absolute z-5 top-5 -left-4 w-56 h-56 bg-gradient-brush-3 rounded-full filter blur-3xl opacity-50"></div>

      <div className="absolute z-10 top-72 -right-40 w-56 h-56 md:w-72 md:h-72 bg-gradient-brush-3 rounded-full blur-3xl opacity-50"></div>

      <div className="absolute z-10 bottom-0 md:-bottom-16 -left-40 md:-left-36 w-56 h-48 md:w-56 md:h-56 bg-gradient-brush-3 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute z-5 bottom-2 left-32 w-56 h-56 bg-gradient-brush-2 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};

export default Home;
