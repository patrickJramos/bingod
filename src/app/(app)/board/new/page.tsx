import { SubmitButton } from "@/app/(app)/board/new/submitButton";

export default function NewBoardPage() {
  async function createBoard(fd: FormData) {
    "use server";
    console.log(fd);
  }
  return (
    <form action={createBoard}>
      <input type="text" name="name" />
      <SubmitButton />
    </form>
  );
}
