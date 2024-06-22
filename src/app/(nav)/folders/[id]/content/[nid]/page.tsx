import NotesCard from "@/components/cards/NoteContentCard";
import Modal from "@/components/misc/modal";
import { getNoteById} from "@/lib/actions/notes.action";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string, nid: string } }) {

    const notes = await getNoteById(params.nid, params.id);
    return (
        <Suspense fallback={<div>Loading...</div>}>
    <Modal>
      <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-md overflow-hidden shadow-lg border border-[#e3e3e3]'>
      <Suspense fallback={<div>Loading...</div>}>

      <NotesCard
        key={notes.nid}
        id={params.nid}
        content={notes.content}
        authorId={notes.authorId} 
        title={notes.title}
        folderId={params.id} />
      </Suspense>
      </main>
    </Modal>
    </Suspense>
    )
}