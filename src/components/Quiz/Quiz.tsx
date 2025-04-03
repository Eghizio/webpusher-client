import { Trophy } from "lucide-react";
import { Title } from "@/components/Title/Title";
import { VibeQuiz } from "./VibeQuiz";

interface Props {}

export const Quiz = ({}: Props) => {
  return (
    <article className="flex flex-col gap-2">
      <Title left={<Trophy size={26} />}>Quiz</Title>

      <VibeQuiz />

      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        molestiae, eum, eius enim voluptas error praesentium ab sint officia quo
        corrupti eaque! Accusantium at ducimus minus molestias obcaecati nam
        optio?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        molestiae, eum, eius enim voluptas error praesentium ab sint officia quo
        corrupti eaque! Accusantium at ducimus minus molestias obcaecati nam
        optio?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        molestiae, eum, eius enim voluptas error praesentium ab sint officia quo
        corrupti eaque! Accusantium at ducimus minus molestias obcaecati nam
        optio?
      </p> */}
    </article>
  );
};
