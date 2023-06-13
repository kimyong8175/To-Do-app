import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./recoil/atom/toDoAtom";

interface IFormToDo {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IFormToDo>();

  function validateSubmitValues({ toDo }: IFormToDo) {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    setValue("toDo", "");
  }

  return (
    <form onSubmit={handleSubmit(validateSubmitValues)}>
      <input
        type="text"
        {...register("toDo", {
          required: "Please write a to do.",
        })}
        placeholder="Write a To-do"
      />
      <button>Add</button>
    </form>
  );
}
