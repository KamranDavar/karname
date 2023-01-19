import { List } from "antd";
import { QuestionListItem } from "../components/questionListItem";

export function QuestionList() {
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

const data = [
  {
    image: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    title: "Ant Design Title 1",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team?",
    id: "1",
  },
  {
    image: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    title: "Ant Design Title 2",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team?",
    id: "2",
  },
  {
    image: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    title: "Ant Design Title 3",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team?",
    id: "3",
  },
  {
    image: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    title: "Ant Design Title 4",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team?",
    id: "4",
  },
];
