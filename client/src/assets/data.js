export const books = [
    { name: "Bhagavad Gita", isbn: "978-0-06-112008-4", author: "Vyasa", price: 12.99 },
    { name: "Ramayana", isbn: "978-0-452-28423-4", author: "Valmiki", price: 15.99 },
    { name: "Mahabharata", isbn: "978-0-7432-7356-5", author: "Vyasa", price: 19.99 },
    { name: "Upanishads", isbn: "978-0-316-76948-0", author: "Various", price: 14.99 },
    { name: "Vedas", isbn: "978-1-85326-000-2", author: "Various", price: 18.99 },
    { name: "Puranas", isbn: "978-1-85326-001-9", author: "Various", price: 16.99 },
    { name: "Aranyakas", isbn: "978-1-85326-002-6", author: "Various", price: 11.99 },
    { name: "Brahmanas", isbn: "978-1-85326-003-3", author: "Various", price: 13.99 },
    { name: "Yoga Sutras", isbn: "978-1-85326-004-0", author: "Patanjali", price: 9.99 },
    { name: "Sutras", isbn: "978-1-85326-005-7", author: "Various", price: 12.99 },
    { name: "Manusmriti", isbn: "978-1-85326-006-4", author: "Manu", price: 10.99 },
    { name: "Garuda Purana", isbn: "978-1-85326-007-1", author: "Vyasa", price: 14.99 },
    { name: "Bhagavata Purana", isbn: "978-1-85326-008-8", author: "Vyasa", price: 17.99 },
    { name: "Vishnu Purana", isbn: "978-1-85326-009-5", author: "Vyasa", price: 16.99 },
    { name: "Agni Purana", isbn: "978-1-85326-010-1", author: "Vyasa", price: 13.99 },
    { name: "Shiva Purana", isbn: "978-1-85326-011-8", author: "Vyasa", price: 15.99 },
    { name: "Narada Purana", isbn: "978-1-85326-012-5", author: "Vyasa", price: 12.99 },
    { name: "Padma Purana", isbn: "978-1-85326-013-2", author: "Vyasa", price: 17.99 },
    { name: "Skanda Purana", isbn: "978-1-85326-014-9", author: "Vyasa", price: 18.99 },
    { name: "Linga Purana", isbn: "978-1-85326-015-6", author: "Vyasa", price: 14.99 },
];

const additionalBooks = [
    "The Great Gatsby", "1984", "To Kill a Mockingbird", "The Catcher in the Rye", "Pride and Prejudice",
    "Moby Dick", "War and Peace", "Crime and Punishment", "The Brothers Karamazov", "Anna Karenina",
    "One Hundred Years of Solitude", "Brave New World", "The Odyssey", "The Iliad", "Don Quixote",
    "Jane Eyre", "Wuthering Heights", "The Divine Comedy", "The Canterbury Tales", "Les Misérables",
    "The Count of Monte Cristo", "Dracula", "Frankenstein", "The Picture of Dorian Gray", "The Hobbit",
    "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "Alice's Adventures in Wonderland", "The Wind in the Willows",
    "The Little Prince", "Fahrenheit 451", "The Hitchhiker's Guide to the Galaxy", "Catch-22", "Slaughterhouse-Five",
    "The Road", "Life of Pi", "The Alchemist", "The Old Man and the Sea", "Moby Dick",
    "Ulysses", "Gulliver's Travels", "A Tale of Two Cities", "David Copperfield", "Great Expectations",
    "Oliver Twist", "Bleak House", "The Scarlet Letter", "Beloved", "The Handmaid's Tale",
    "To the Lighthouse", "Mrs Dalloway", "Middlemarch", "Sense and Sensibility", "Emma",
    "Persuasion", "Northanger Abbey", "Mansfield Park", "The Catcher in the Rye", "Lord of the Flies",
    "The Bell Jar", "On the Road", "East of Eden", "Of Mice and Men", "Grapes of Wrath",
    "Tess of the d'Urbervilles", "Far from the Madding Crowd", "Jude the Obscure", "Vanity Fair", "Middlemarch",
    "Silas Marner", "Daniel Deronda", "The Mill on the Floss", "The Silmarillion", "The Hobbit",
    "The Two Towers", "The Return of the King", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire"
];

additionalBooks.forEach((title, index) => {
    books.push({
        name: title,
        isbn: `978-3-16-${String(index + 21).padStart(5, '0')}-0`,
        author: `Author ${index + 21}`,
        price: parseFloat((Math.random() * 50).toFixed(2))
    });
});


export const students = [
    { name: "John Doe", contact: "555-1234", batch: 2078 },
    { name: "Jane Smith", contact: "555-5678", batch: 2078 },
    { name: "Alice Johnson", contact: "555-9101", batch: 2078 },
    { name: "Bob Brown", contact: "555-1121", batch: 2078 },
    { name: "Charlie Davis", contact: "555-3141", batch: 2078 },
    { name: "Daisy Evans", contact: "555-5161", batch: 2078 },
    { name: "Edward Franklin", contact: "555-7181", batch: 2078 },
    { name: "Fiona Green", contact: "555-9201", batch: 2078 },
    { name: "George Harris", contact: "555-1221", batch: 2078 },
    { name: "Hannah King", contact: "555-3241", batch: 2078 }
];

export const libraryStaffs = [
    { name: "Emily Johnson", contact: "555-2001", position: "Chief Librarian" },
    { name: "David Smith", contact: "555-2002", position: "Assistant Librarian" },
    { name: "Sophia Brown", contact: "555-2003", position: "Reference Librarian" },
    { name: "James Williams", contact: "555-2004", position: "Cataloging Librarian" },
    { name: "Olivia Jones", contact: "555-2005", position: "Children's Librarian" },
    { name: "Liam Garcia", contact: "555-2006", position: "Circulation Clerk" },
    { name: "Isabella Martinez", contact: "555-2007", position: "Technical Services Librarian" },
    { name: "Benjamin Rodriguez", contact: "555-2008", position: "Acquisitions Librarian" },
    { name: "Mia Wilson", contact: "555-2009", position: "Library Assistant" },
    { name: "Ethan Anderson", contact: "555-2010", position: "Library Technician" }
];





