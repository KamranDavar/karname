import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnswerForm from "../components/AnswerForm";
import AnswerList from "../components/AnswerList";
import Detail from "../components/Detail";
import {
  useGetQuestionQuery,
  useGetUsersQuery,
} from "../store/services/jsonServerApi";

export function QuestionDetail() {
  const { id } = useParams();
  const { data } = useGetQuestionQuery(id);
  const { data: users } = useGetUsersQuery();

  return (
    <>
      <Detail data={data} users={users} />
      <AnswerList items={data?.answers} />
      <AnswerForm users={users} />
    </>
  );
}
