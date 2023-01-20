import { List } from "antd";
import { QuestionListItem } from "../components/QuestionListItem";
import { useGetQuestionsQuery } from "../store/services/jsonServerApi";

export function QuestionList() {
  const { data } = useGetQuestionsQuery();


  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => <QuestionListItem item={item} />}
      />
    </>
  );
}