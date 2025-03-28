const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-btn");
const close = document.querySelector(".close-btn");
const addBtn = document.querySelector(".task-add");
const notesContainer = document.querySelector(".notes-task-area");
const originalNote = document.querySelector(".notes");
const hero = document.querySelector("h1");
const tl = gsap.timeline();

// Navigation animations
menu.addEventListener("click", () => navShow());
close.addEventListener("click", () => navClose());

function navShow() {
    tl.to(nav, { top: 0, duration: 0.5, ease: "expo.out" });
}

function navClose() {
    tl.to(nav, { top: "-100%", duration: 0.5, ease: "expo.in" });
}

// Note Class
class Note {
    constructor(clone = false) {
        this.element = clone ? this.createNewNote() : originalNote;
        this.preview = this.element.querySelector(".notes-preview");
        this.nameInput = this.element.querySelector(".notes-task-name");
        this.contentInput = this.element.querySelector(".notes-task-place");
        this.saveBtn = this.element.querySelector(".save-btn");
        this.deleteBtn = this.element.querySelector(".delete-btn");
        
        this.initialize();
    }

    createNewNote() {
        
        const newNote = document.createElement('div');
        newNote.className = 'notes';
        newNote.innerHTML = `
            <h3 class="notes-preview none">Name</h3>
            <input type="text" class="notes-task-name" placeholder="Add name">
            <textarea class="notes-task-place" placeholder="Type here..."></textarea>
            <div class="icons">
                <i class="ri-delete-bin-6-line delete-btn"></i>
                <button class="save-btn"><h4>save</h4></button>
            </div>
        `;
        return newNote;
    }

    initialize() {
        this.element.addEventListener("dblclick", () => this.expand());
        this.saveBtn.addEventListener("click", () => this.save());
        this.deleteBtn.addEventListener("click", () => this.delete());
        this.contentInput.addEventListener("input", this.autoResize);
    }

    expand() {
        this.preview.classList.add("none");
        this.nameInput.classList.remove("none");
        this.contentInput.classList.remove("none");
        this.saveBtn.classList.remove("none");
    }

    save() {
        this.preview.textContent = this.nameInput.value || "Untitled Note";
        this.preview.classList.remove("none");
        this.nameInput.classList.add("none");
        this.contentInput.classList.add("none");
        this.saveBtn.classList.add("none");
        document.querySelector("h3").innerText="'Double Click to expand'"
    }

    delete() {
        this.element.remove();
    }

    autoResize() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    }
}

// Initialize original note
const mainNote = new Note();

// Add New Note
addBtn.addEventListener("click", () => {
    hero.classList.add("none");
    const newNote = new Note(true);
    notesContainer.appendChild(newNote.element);
    newNote.expand();
});

// Textarea Auto-resize
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });
});