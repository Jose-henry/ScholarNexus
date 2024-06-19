import NotesCard from "@/components/cards/NoteContentCard";
import Modal from "@/components/misc/modal";
import { getNotes, getNotesById } from "@/lib/actions/notes.action";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string, nid: string } }) {

    const notes = await getNotesById(params.id, params.nid);
    return (
        <Suspense fallback={<div>Loading...</div>}>
    <Modal>
      <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-md overflow-hidden shadow-lg border border-[#e3e3e3]'>
      <Suspense fallback={<div>Loading...</div>}>

      <NotesCard
        key={notes.id}
        authorId={notes.authorId}
        id={params.nid}
        content={notes.content} 
        title={notes.title}
        folderId={params.id} />
      </Suspense>
      </main>
    </Modal>
    </Suspense>
    )
}