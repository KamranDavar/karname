import { List } from "antd";
import { QuestionListItem } from "../components/QuestionListItem";
import {
  useGetQuestionsQuery, useGetUsersQuery,
} from "../store/services/jsonServerApi";

export function QuestionList() {
  const { data } = useGetQuestionsQuery();
  const { data: users } = useGetUsersQuery();


  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => <QuestionListItem item={item} users={users} />}
      />
    </>
  );
}
