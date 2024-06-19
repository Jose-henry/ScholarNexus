// page.tsx
import { getFoldersById } from "@/lib/actions/folder.action";
import NotesComponent from "@/components/misc/notes";
import FoldersSubComponent from "@/components/misc/subFolders";
import { getNotes } from "@/lib/actions/notes.action";

export default async function Page({ params }: { params: { id: string } }) {
  const folders = await getFoldersById(params.id);
  if (!folders) return null;

  // Assuming you need folderId for notes as well
  const notes = await getNotes(params.id);
  if (!notes) return null;

  return (
    <>
      <FoldersSubComponent folders={folders} />
      <NotesComponent folders={folders} notes={notes} />
    </>
  );
}
