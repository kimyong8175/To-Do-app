// import { useForm } from "react-hook-form";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import { customCategories } from "./recoil/atom/toDoAtom";

// interface ICategory {
//   category: string;
// }

// export default function CreateCategory() {
//   const { register, handleSubmit, setValue } = useForm<ICategory>();
//   const cus_category = useRecoilValue(customCategories);
//   // const setCustomCategory = useSetRecoilState(customCategories);
//   console.log(cus_category);

//   function onValid({ category }: ICategory) {

//     setValue("category", "");
//   }

//   return (
//     <form onSubmit={handleSubmit(onValid)}>
//       <input
//         type="text"
//         {...register("category", {
//           required: "Please input a category",
//         })}
//         placeholder="Input category..."
//       />
//       <button>Add</button>
//     </form>
//   );
// }

import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  width: 30px;
  height: 24px;
  color: black;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Input = styled.input`
  height: 24px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
`;

export default function CreateCategory() {
  return (
    <Container>
      <CategoryContainer>
        <Button>TO DO</Button>
        <Button>DOING</Button>
        <Button>DONE</Button>
      </CategoryContainer>
      <RightContainer>
        <IconContainer onClick={() => console.log("click")}>
          <AddToPhotosIcon />
        </IconContainer>
        <Input type="text" placeholder="Add a category..." />
      </RightContainer>
    </Container>
  );
}
