import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./recoil/atom/toDoAtom";

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIdx = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIdx),
        newToDo,
        ...oldToDos.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          TO DO
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}
