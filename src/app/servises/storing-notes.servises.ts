export interface currentNote {
    title: string,
    text: string,
    index: number,
    isSaved: boolean
}

export interface note {
    title: string,
    text: string
}

export class storingNotes {

    notes = [
        {
            title: 'title',
            text: "content"
        },

        {
            title: 'veryyyyBigTitle veryyy veryyyy',
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsa maiores corrupti. Aliquam, rerum temporibus, dolorum error magni consequuntur est ad excepturi porro culpa labore facere molestiae velit voluptatibus eius"
        },
        {
            title: 'title',
            text: "content"
        },
    ]


    currentNote: currentNote = {
        title: '',
        text: '',
        index: 0,
        isSaved: false
    }




    getNotes() {
        return this.notes
    }

    
    setNote(note: note){
        this.notes.push(note)
    }



    getCurrentNote(){
        return this.currentNote
    }


    setCurrentNote(index: number){
        this.currentNote.isSaved = true
        this.currentNote.text = this.notes[index].text
        this.currentNote.title = this.notes[index].title
        this.currentNote.index = index
    }

    changeNote(index:number, note: note) {
        this.notes[index] = note
    }


    deleteNote(index:number) {
        this.notes.splice(index,1)
    }


}