import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector } from "./recoil/atom/toDoAtom";
import ToDo from "./ToDo";

// export const ToDoList = () => {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError("");
//     setTodo(value);
//   };
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       return setTodoError("To-do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={handleChange}
//           type="text"
//           value={todo}
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   );
// };

// interface IFormInputs {
//   email: string;
//   firstName: string;
//   lastName: string;
//   userName: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }

// export default function ToDoList() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     setError,
//   } = useForm<IFormInputs>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });

//   const lastNameArr = ["Kim", "Lee"];

//   const validateSubmitValues: SubmitHandler<IFormInputs> = (data) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Passwords are not the same!" },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError", { message: "Server offline." });
//   };

//   return (
//     <div>
//       <h1></h1>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(validateSubmitValues)}
//       >
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "only naver.com emails allowed",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: true,
//             minLength: {
//               value: 2,
//               message: "Your first name is too short.",
//             },
//           })}
//           type="text"
//           placeholder="First Name"
//         />
//         <span>{errors.firstName?.message}</span>
//         <input
//           {...register("lastName", {
//             required: true,
//             validate: {
//               duplicate: (value) =>
//                 lastNameArr.includes(value) ? "duplicated" : true,
//             },
//           })}
//           type="text"
//           placeholder="Last Name"
//         />
//         <span>{errors.lastName?.message}</span>
//         <input
//           {...register("userName", { required: true })}
//           type="text"
//           placeholder="User Name"
//         />
//         <span>{errors.userName?.message}</span>
//         <input
//           {...register("password", {
//             required: true,
//             minLength: {
//               value: 5,
//               message: "Your password is too short!",
//             },
//           })}
//           type="password"
//           placeholder="Password"
//         />
//         <span>{errors.password?.message}</span>
//         <input
//           {...register("password1", {
//             required: true,
//           })}
//           type="password"
//           placeholder="Confirm Password"
//         />
//         <span>{errors.password1?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Create a To Do</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">TO DO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
