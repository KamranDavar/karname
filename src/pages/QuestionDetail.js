import { useParams } from "react-router-dom";
import AnswerForm from "../components/AnswerForm";
import AnswerList from "../components/AnswerList";
import Detail from "../components/Detail";
import { useGetQuestionQuery } from "../store/services/jsonServerApi";

export function QuestionDetail() {
  const {id}=useParams()
  const { data } = useGetQuestionQuery(id);
  return (
    <>
      <Detail data={data} />
      <AnswerList items={data?.answers} />
      <AnswerForm />
    </>
  );
}
