import { getFoldersById, getParentFolderName } from "@/lib/actions/folder.action";
import NotesComponent from "@/components/misc/notes";
import FoldersSubComponent from "@/components/misc/subFolders";
import { getNotes } from "@/lib/actions/notes.action";

export default async function Page({ params }: { params: { id: string } }) {
  const folders = await getFoldersById(params.id);
  if (!folders) return null;


  const parentFolderName = await getParentFolderName(params.id);


  // Fetch notes
  const notes = await getNotes(params.id);
  if (!notes) return null;

  return (
    <div className="inline-flex">
      <FoldersSubComponent folders={folders} parentFolderId={params.id} parentFolderName={parentFolderName} />
      {notes && notes.length > 0 && <NotesComponent notes={notes} />}
      </div>
  );
}


      
