import AnswerForm from "../components/AnswerForm";
import AnswerList from "../components/AnswerList";
import Detail from "../components/Detail";

export function QuestionDetail() {
  return (
    <>
      <Detail data={data} />
      <AnswerList items={data?.answers} />
      <AnswerForm />
    </>
  );
}
const data = {
  image: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
  title: "Ant Design Title 1",
  desc: "Ant Design, a design language for background applications, is refined by Ant UED Team?",
  id: "1",
  answers: [
    {
      image: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      title: "Ant Design Title 1",
      desc: "Ant Design, a design language for background applications, is refined by Ant UED Team?Ant Design, a design language for background applications, is refined by Ant UED Team?Ant Design, a design language for background applications, is refined by Ant UED Team?Ant Design, a design language for background applications, is refined by Ant UED Team?",
      id: "1",
    },
    {
      image: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      title: "Ant Design Title 2",
      desc: "Ant Design, a design language for background applications, is refined by Ant UED Team?",
      id: "2",
    },
  ],
};
