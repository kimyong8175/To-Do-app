import { IToDo } from "./recoil/atom/toDoAtom";

export default function ToDo({ text }: IToDo) {
  return <li>{text}</li>;
}
