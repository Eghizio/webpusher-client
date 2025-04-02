import { Trophy } from "lucide-react";
import { Title } from "../Title/Title";

interface Props {}

export const Quiz = ({}: Props) => {
  return <Title left={<Trophy size={26} />}>Quiz</Title>;
};
