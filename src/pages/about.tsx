import DefaultLayout from "../components/default-layout";

export default function About() {
  return (
    <DefaultLayout style="flex flex-col md:max-w-3xl w-full h-screen justify-center px-8 md:px-0 text-neutral-700">
      <div className="text-xl font-medium mb-4">About me</div>
      <div className="text-sm">
        <p className="mb-3">
          Hi! My name is Osvaldo Colina, and I’m a Full Stack Software Engineer
          specializing in web and mobile development.
        </p>
        <p className="mb-3">
          With a strong background in front-end, back-end, and mobile
          development, I have extensive experience in every stage of product
          creation, from design and coding to testing and maintenance.
        </p>
        <p className="mb-3">
          I have successfully delivered 18 projects on Upwork, consistently
          earning positive feedback. My track record speaks to the quality and
          dedication I bring to each project.
        </p>
        <p className="mb-3">
          What sets me apart is my commitment to continuous improvement. I’m
          passionate about learning and staying updated with emerging
          technologies and trends. This drive has allowed me to grow from my
          early roles as a QA Analyst to leading a product development team,
          demonstrating my ability to tackle new challenges and solve complex
          problems.
        </p>
        <p className="mb-3">Let's build something great together!</p>
      </div>
    </DefaultLayout>
  );
}
