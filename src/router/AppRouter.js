import { Route, Routes } from "react-router-dom";
import { QuestionList, QuestionDetail, Error404 } from "../pages";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<QuestionList />} />
      <Route path="/:id" element={<QuestionDetail />}/>
      <Route element={<Error404 />} />
    </Routes>
  );
}
